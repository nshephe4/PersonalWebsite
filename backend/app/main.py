from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import json
import os
from uuid import uuid4

app = FastAPI(
    title="Nathaniel Shepherd Portfolio",
    description="Graduate research portfolio API",
    version="1.0.0",
)

app_domain = os.getenv("APP_DOMAIN", "https://nathanieljshepherd.com")
additional_origins = [origin.strip() for origin in os.getenv("ALLOWED_ORIGINS", "").split(",") if origin.strip()]

allowed_origins = [
    app_domain,
    "https://www.nathanieljshepherd.com",
    "http://localhost:5173",
    "http://localhost:8000",
]
allowed_origins.extend(additional_origins)

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Get the directory where this script is located
BASE_DIR = Path(__file__).resolve().parent

# Mount static files (React build output)
static_dir = BASE_DIR / "static"
if static_dir.exists():
    app.mount("/static", StaticFiles(directory=static_dir), name="static")
    assets_dir = static_dir / "assets"
    if assets_dir.exists():
        app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")

uploads_dir = BASE_DIR / "uploads"
uploads_dir.mkdir(exist_ok=True)
metadata_file = uploads_dir / "photos.json"


def load_photos() -> list[dict[str, str]]:
    if not metadata_file.exists():
        return []
    try:
        return json.loads(metadata_file.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return []


def save_photos(photos: list[dict[str, str]]) -> None:
    metadata_file.write_text(json.dumps(photos, indent=2), encoding="utf-8")

@app.get("/")
async def root():
    """Serve the main React app"""
    index_file = static_dir / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    return {"message": "Portfolio API running. Build React frontend with 'npm run build' in frontend/"}

@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "portfolio-api"}

@app.get("/api/info")
async def get_info():
    """Get portfolio metadata"""
    return {
        "name": "Nathaniel J. Shepherd",
        "title": "Graduate Student",
        "email": "your.email@example.com",
        "social": {
            "github": "https://github.com",
            "linkedin": "https://linkedin.com",
            "twitter": "https://twitter.com"
        }
    }


@app.get("/api/photos")
async def list_photos():
    """Return uploaded photos for the gallery."""
    return {"photos": load_photos()}


@app.post("/api/photos")
async def upload_photo(
    file: UploadFile = File(...),
    title: str = Form(...),
):
    """Upload a photo and store its metadata locally."""
    if not file.content_type or not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Please upload an image file.")

    extension = Path(file.filename or "photo").suffix.lower() or ".jpg"
    stored_name = f"{uuid4().hex}{extension}"
    stored_path = uploads_dir / stored_name

    contents = await file.read()
    stored_path.write_bytes(contents)

    photos = load_photos()
    photo_record = {
        "id": uuid4().hex,
        "title": title.strip() or "Untitled Photo",
        "filename": stored_name,
        "url": f"/uploads/{stored_name}",
    }
    photos.insert(0, photo_record)
    save_photos(photos)

    return photo_record


app.mount("/uploads", StaticFiles(directory=uploads_dir), name="uploads")

# Catch-all for React Router - serve index.html for any non-API route
@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    """Serve React app for all non-API routes (SPA fallback)"""
    if full_path.startswith("api/"):
        return {"error": "Not found"}
    
    index_file = static_dir / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    
    return {"error": "React build not found. Run 'npm run build' in frontend/"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=int(os.getenv("PORT", "8000")),
        reload=True,
    )
