#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/opt/vpp-catalog"
ARCHIVE="/tmp/vpp-catalog-deploy.tar.gz"

sudo mkdir -p "$APP_DIR"
sudo chown -R "$(id -u):$(id -g)" "$APP_DIR"
tar -xzf "$ARCHIVE" -C "$APP_DIR"
cd "$APP_DIR"

if [ ! -f .env ]; then
  cp .env.example .env
fi

docker compose up -d --build
docker compose ps
