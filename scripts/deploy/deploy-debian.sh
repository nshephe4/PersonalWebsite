#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: ./deploy-debian.sh user@vm-ip"
  exit 1
fi

TARGET="$1"
APP_DIR="/opt/PersonalWebsite"

rsync -av --delete \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude 'backend/.venv' \
  --exclude 'backend/uploads' \
  ./ "${TARGET}:${APP_DIR}/"

ssh "${TARGET}" "cd ${APP_DIR} && sudo bash scripts/deploy/setup-debian.sh"