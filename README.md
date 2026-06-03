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
2. Prepares the backend to serve the React app and API endpoints
3. Keeps the upload gallery ready for a live FastAPI host

## Customization

### Update Portfolio Content

1. **Home Page**: Edit `frontend/src/pages/HomePage.tsx`
2. **About Page**: Edit `frontend/src/pages/AboutPage.tsx`
3. **Research Page**: Edit `frontend/src/pages/ResearchPage.tsx`
4. **Publications**: Edit `frontend/src/pages/PublicationsPage.tsx`
5. **Photography**: Edit `frontend/src/pages/PhotographyPage.tsx`

### Add Photography

1. Upload photos from the Photography page when the FastAPI backend is running
2. The backend stores uploaded images in `backend/app/uploads/`
3. Photo metadata is saved in `backend/app/uploads/photos.json`

If you deploy only to GitHub Pages, the gallery page will still load, but uploads will not be saved because GitHub Pages does not run FastAPI.

### Update Contact Email

Replace `your.email@example.com` in:
- `frontend/src/components/Footer.tsx`
- `backend/app/main.py`

## Deployment Options

### Option 1: GitHub Pages

Best for: static hosting of the React site.

Note: photo uploads require a live FastAPI backend. GitHub Pages can display the site, but it cannot save uploads.

1. **Create GitHub repository:**
   ```bash
  git remote add origin https://github.com/nshephe4/PersonalWebsite.git
   git push -u origin main
   ```

2. **GitHub Pages will auto-deploy** via the `.github/workflows/deploy.yml` workflow

3. **Configure custom domain:**
   - Go to repo Settings → Pages
   - Custom domain: `nathanieljshepherd.com`
   - Update DNS as follows:
     - Apex/root `nathanieljshepherd.com` A records:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - `www.nathanieljshepherd.com` CNAME:
       - `nshephe4.github.io`
   - Keep the repository `CNAME` file set to `nathanieljshepherd.com`

### Option 2: Google Cloud Debian VM

Best for: a full deployment where FastAPI serves the site and stores uploaded photos.

Follow these steps to run FastAPI on the VM and connect `nathanieljshepherd.com` to it.

1. Provision a Debian VM on Google Cloud and note its public IP.
2. Point your domain DNS to the VM public IP:
  - `A` record for `@` -> VM IP
  - `CNAME` for `www` -> `nathanieljshepherd.com`
3. SSH into the VM and install the required packages:

```bash
sudo apt update
sudo apt install -y python3 python3-venv python3-pip nginx certbot python3-certbot-nginx
```

4. Clone the repository on the VM and create the Python environment:

```bash
cd /opt
sudo git clone https://github.com/nshephe4/PersonalWebsite.git
cd PersonalWebsite/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

5. Build the React frontend so FastAPI can serve the compiled site:

```bash
cd /opt/PersonalWebsite
npm install
npm run build
```

6. Create the systemd service and Nginx config using the files in `scripts/deploy/`.
7. Reload systemd and start the service:

```bash
sudo cp PersonalWebsite/scripts/deploy/personalwebsite.service /etc/systemd/system/personalwebsite.service
sudo cp PersonalWebsite/scripts/deploy/personalwebsite.nginx /etc/nginx/sites-available/personalwebsite
sudo ln -sf /etc/nginx/sites-available/personalwebsite /etc/nginx/sites-enabled/personalwebsite
sudo rm -f /etc/nginx/sites-enabled/default
sudo systemctl daemon-reload
sudo systemctl enable personalwebsite
sudo systemctl restart personalwebsite
sudo nginx -t
sudo systemctl restart nginx
sudo certbot --nginx -d nathanieljshepherd.com -d www.nathanieljshepherd.com
sudo nginx -t
sudo systemctl restart nginx
```

8. Verify the app is reachable at `http://127.0.0.1:8000` on the VM and then test `nathanieljshepherd.com` in the browser.
9. Use the upload page to confirm FastAPI is saving photos to `backend/app/uploads/`.

Example Nginx server block:

```nginx
server {
  listen 80;
  server_name nathanieljshepherd.com www.nathanieljshepherd.com;

  location / {
    proxy_pass http://127.0.0.1:8000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

### Debian service files

For Google Cloud, use a systemd service that runs the backend with a `PORT` environment variable and restarts on reboot.

Repo location in this project:

```bash
scripts/deploy/personalwebsite.service
scripts/deploy/personalwebsite.nginx
scripts/deploy/setup-debian.sh
scripts/deploy/deploy-debian.sh
```

Example service location on the VM:

```bash
/etc/systemd/system/personalwebsite.service
```

The service should run:

```bash
/opt/PersonalWebsite/backend/.venv/bin/uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Set `PORT=8000` in the service environment so the app is easy to move between local and VM deployments.

Recommended service environment values:

```bash
APP_DOMAIN=https://nathanieljshepherd.com
ALLOWED_ORIGINS=https://nathanieljshepherd.com,https://www.nathanieljshepherd.com
PORT=8000
```

Fastest path: run the bootstrap script after copying the repo to the VM.

```bash
sudo bash scripts/deploy/setup-debian.sh
```

From your local machine, you can publish updates to the VM with:

```bash
./scripts/deploy/deploy-debian.sh user@vm-ip
```

---

## Git Workflow: Push to Repository

### Initial Setup

```bash
git init
git add .
git commit -m "Initial commit: React + FastAPI portfolio"
git remote add origin https://github.com/nshephe4/PersonalWebsite.git
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
| `/api/photos` | Lists uploaded photos |
| `POST /api/photos` | Uploads a new photo |

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
