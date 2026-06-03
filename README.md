# Nathaniel J. Shepherd - Graduate Research Portfolio

Full-stack web application built with **React** (frontend) and **FastAPI** (backend). Designed for easy deployment to nathanieljshepherd.com.

## Project Structure

```
├── frontend/                 # React app (Vite + TypeScript)
│   ├── src/
│   │   ├── components/      # Reusable components (Header, Footer)
│   │   ├── pages/           # Page components (Home, About, Research, etc.)
│   │   ├── App.tsx          # Main app router
│   │   ├── App.css          # Shared styles
│   │   └── main.tsx         # Entry point
│   ├── package.json
│   ├── vite.config.ts       # Vite build config
│   └── tsconfig.json
│
├── backend/                  # FastAPI application
│   ├── app/
│   │   ├── main.py          # FastAPI server
│   │   ├── static/          # React build output (generated)
│   │   └── __init__.py
│   └── requirements.txt
│
├── package.json             # Root package config (npm scripts)
├── .github/workflows/       # GitHub Actions CI/CD
└── README.md               # This file
```

## Local Development

### Prerequisites
- **Node.js** 18+ 
- **Python** 3.9+
- **npm** package manager

### 1. Initial Setup

```bash
# Install all dependencies (frontend + backend)
npm run install:all
```

This command:
- Installs Node dependencies for the root and frontend
- Installs Python dependencies in a virtual environment

### 2. Start Development Servers

Run both frontend and backend simultaneously:

```bash
npm run dev
```

This will start:
- **Frontend** (React + Vite): http://localhost:5173
- **Backend** (FastAPI): http://localhost:8000

The frontend is configured to proxy API calls to the backend.

### 3. Individual Development

**Frontend only:**
```bash
npm run dev:frontend
```

**Backend only:**
```bash
npm run dev:backend
```

## Building for Production

```bash
npm run build
```

This:
1. Builds the React frontend to `frontend/dist`
2. Copies the build to `backend/app/static`
3. Prepares the backend to serve both the API and static files

## Customization

### Update Portfolio Content

1. **Home Page**: Edit `frontend/src/pages/HomePage.tsx`
2. **About Page**: Edit `frontend/src/pages/AboutPage.tsx`
3. **Research Page**: Edit `frontend/src/pages/ResearchPage.tsx`
4. **Publications**: Edit `frontend/src/pages/PublicationsPage.tsx`
5. **Photography**: Edit `frontend/src/pages/PhotographyPage.tsx`

### Add Photography

1. Place image files in `frontend/public/photos/`
2. Update gallery backgrounds in `frontend/src/App.css`:

```css
.tone-a {
  background-image: url("/photos/your-image.jpg");
}
```

### Update Contact Email

Replace `your.email@example.com` in:
- `frontend/src/components/Footer.tsx`
- `backend/app/main.py`

## Deployment Options

### Option 1: GitHub Pages (Static Hosting) - EASIEST

Best for: Simple portfolio without API requirements.

1. **Create GitHub repository:**
   ```bash
   git remote add origin https://github.com/your-username/nathanieljshepherd.com.git
   git push -u origin main
   ```

2. **GitHub Pages will auto-deploy** via the `.github/workflows/deploy.yml` workflow

3. **Configure custom domain:**
   - Go to repo Settings → Pages
   - Custom domain: `nathanieljshepherd.com`
   - Update DNS CNAME to `<your-github-username>.github.io`

---

## Git Workflow: Push to Repository

### Initial Setup

```bash
git init
git add .
git commit -m "Initial commit: React + FastAPI portfolio"
git remote add origin https://github.com/your-username/nathanieljshepherd.com.git
git branch -M main
git push -u origin main
```

### Daily Updates

```bash
# Make changes
# ...

# Commit and push
git add .
git commit -m "Update: [description of changes]"
git push origin main
```

**That's it!** Your changes will automatically deploy via GitHub Actions.

---

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/` | Serves React app |
| `/api/health` | Health check |
| `/api/info` | Portfolio metadata |

---

## Environment Variables

Create `.env` in `backend/`:

```env
DEBUG=True
SECRET_KEY=your-secret-key
```

---

## Troubleshooting

**Dependencies won't install:**
```bash
npm run install:all
```

**Ports already in use:**
- Frontend: http://localhost:5173
- Backend: http://localhost:8000

**Build fails:**
```bash
rm -rf frontend/dist backend/app/static
npm run build
```

---

## Styling & Colors

Edit `frontend/src/App.css`:

```css
:root {
  --ink: #102028;          /* Dark text */
  --accent: #c7531e;       /* Orange accent */
  --paper: #f6f2e8;        /* Light background */
}
```

---

**Built with React 18, TypeScript, FastAPI & Vite**
