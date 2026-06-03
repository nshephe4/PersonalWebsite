#!/usr/bin/env bash
set -euo pipefail

APP_NAME="PersonalWebsite"
APP_DIR="/home/nshep6998/${APP_NAME}"
BACKEND_DIR="${APP_DIR}/backend"
FRONTEND_DIR="${APP_DIR}/frontend"
SERVICE_NAME="personalwebsite"

if [[ ${EUID} -ne 0 ]]; then
  echo "Run this script with sudo."
  exit 1
fi

apt update
apt install -y git curl nginx python3 python3-venv python3-pip build-essential certbot python3-certbot-nginx

if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt install -y nodejs
fi

if [[ ! -d "${APP_DIR}" ]]; then
  git clone https://github.com/nshephe4/PersonalWebsite.git "${APP_DIR}"
else
  cd "${APP_DIR}"
  git pull --rebase
fi

cd "${APP_DIR}"

cd frontend
npm install
npm run build

cd "${BACKEND_DIR}"
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt

install -d -m 755 "${BACKEND_DIR}/uploads"
install -d -m 755 "${BACKEND_DIR}/static"

cp -r "${FRONTEND_DIR}/dist/"* "${BACKEND_DIR}/static/"

cp "${APP_DIR}/scripts/deploy/${SERVICE_NAME}.service" "/etc/systemd/system/${SERVICE_NAME}.service"
cp "${APP_DIR}/scripts/deploy/${SERVICE_NAME}.nginx" "/etc/nginx/sites-available/${SERVICE_NAME}"

ln -sf "/etc/nginx/sites-available/${SERVICE_NAME}" "/etc/nginx/sites-enabled/${SERVICE_NAME}"
rm -f /etc/nginx/sites-enabled/default

systemctl daemon-reload
systemctl enable "${SERVICE_NAME}"
systemctl restart "${SERVICE_NAME}"

nginx -t
systemctl restart nginx

certbot --nginx -d nathanieljshepherd.com -d www.nathanieljshepherd.com --non-interactive --agree-tos --redirect -m your.email@example.com

nginx -t
systemctl restart nginx

echo "Deployment setup complete."