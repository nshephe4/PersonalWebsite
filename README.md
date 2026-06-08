# Nathaniel J. Shepherd Portfolio

Full-stack personal research portfolio for Nathaniel J. Shepherd, a Ph.D. student at the University of Tennessee, Knoxville.

The site is centered on LLM and retrieval-augmented generation work for policy, procedures, and contracts. It also includes supporting project work, UTK ASL lab contribution context, and a FastAPI-backed photography upload workflow.

## Tech Stack

- React 18 + TypeScript
- Vite
- FastAPI
- Python 3.9+
- UNC Charlotte reference colors for the visual system

## Project Structure

```text
frontend/
  src/
    components/      Shared header and footer
    data/            Shared profile, project, and lab contribution content
    pages/           Routed site pages
    App.tsx          Router and site shell
    App.css          Shared visual system
backend/
  app/
    main.py          FastAPI app, metadata API, photo upload API, static serving
    static/          Generated React build output
scripts/
  deploy/           Debian VM deployment scripts and service files
  dev/              Local domain helper scripts
```

## Site Content

Primary project theme:

- LLM policy systems
- RAG for procedures
- Contract intelligence
- Model evaluation and benchmarking

Main public project evidence:

- `dse697_LU_NS`: LLM/RAG policy and procedure benchmarking
- `dse697_finetune`: policy and procedure verification with fine-tuning and evaluation
- Contract intelligence workstream

Supporting work and lab context:

- Supporting GitHub repositories from `nshephe4`
- UTK ASL public repository contribution context
- Photography upload/gallery page

Most site copy is centralized in:

```text
frontend/src/data/profile.ts
```

## Local Development

Install dependencies:

```bash
npm install
cd frontend && npm install
cd ../backend
python -m venv .venv
.venv\Scripts\python -m pip install -r requirements.txt
```

Run both frontend and backend:

```bash
npm run dev
```

Default local URLs:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8000`
- Health check: `http://localhost:8000/api/health`

## Local Custom Domain

To preview the site locally at `nathanieljshepherd.com`, run PowerShell as Administrator:

```powershell
Set-Location "C:\Users\nshephe4\OneDrive - University of Tennessee\Documents\Website"
.\scripts\dev\start-local-domain.ps1
```

This maps:

```text
127.0.0.1 nathanieljshepherd.com
127.0.0.1 www.nathanieljshepherd.com
```

and starts the local dev servers.

## Production Build

```bash
npm run build
```

The Vite build outputs the React app into:

```text
backend/app/static/
```

FastAPI serves that built app and keeps API routes available under `/api`.

## API Endpoints

| Endpoint | Description |
| --- | --- |
| `/` | Serves the built React app |
| `/api/health` | Backend health check |
| `/api/info` | Portfolio metadata |
| `/api/photos` | Lists uploaded photos |
| `POST /api/photos` | Uploads a photo |

Uploaded photos are stored in:

```text
backend/app/uploads/
```

## Deployment

The Debian VM deployment files live in:

```text
scripts/deploy/personalwebsite.service
scripts/deploy/personalwebsite.nginx
scripts/deploy/setup-debian.sh
scripts/deploy/deploy-debian.sh
```

Recommended service environment values:

```text
APP_DOMAIN=https://nathanieljshepherd.com
ALLOWED_ORIGINS=https://nathanieljshepherd.com,https://www.nathanieljshepherd.com
PORT=8000
```

Build before deploying:

```bash
npm run build
```

Then publish to the VM with:

```bash
./scripts/deploy/deploy-debian.sh user@vm-ip
```

## Styling

The active React styling is in:

```text
frontend/src/App.css
frontend/src/components/Header.css
frontend/src/components/Footer.css
```

The current palette uses UNC Charlotte reference colors:

- Charlotte Green: `#005035`
- Niner Gold: `#a49665`
- Ore Black: `#101820`
- Sky Blue: `#007377`

## Contact

Email: `nathaniel.shepherd@utk.edu`

GitHub: `https://github.com/nshephe4`
