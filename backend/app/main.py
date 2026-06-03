from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os
from pathlib import Path

app = FastAPI(
    title="Nathaniel Shepherd Portfolio",
    description="Graduate research portfolio API",
    version="1.0.0",
)

# Get the directory where this script is located
BASE_DIR = Path(__file__).resolve().parent

# Mount static files (React build output)
static_dir = BASE_DIR / "static"
if static_dir.exists():
    app.mount("/static", StaticFiles(directory=static_dir), name="static")

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
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
