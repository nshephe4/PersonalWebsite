# Quick Start Scripts

## Development

### Run everything (frontend + backend)
npm run dev

### Frontend only
npm run dev:frontend

### Backend only
npm run dev:backend

## Production

### Build
npm run build

### Start production server
npm start

## Installation

### First time setup
npm run install:all

## Deployment

### GitHub Pages
git push origin main
(Auto-deploys via .github/workflows/deploy.yml)

Note: photo uploads require the FastAPI backend to be hosted on a live server. Static-only GitHub Pages can show the page, but it cannot store uploads.

### DNS records you still need
- Apex `nathanieljshepherd.com` A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www.nathanieljshepherd.com` CNAME: `nshephe4.github.io`

