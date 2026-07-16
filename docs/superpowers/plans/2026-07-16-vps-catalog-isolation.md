# VPP Catalog VPS Isolation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Run the V Power Plus catalog in its own VPS container and link it safely with the existing V Power Plus employee Web App.

**Architecture:** The catalog runs at `https://vpowerplus.tech` through its own Traefik router. The existing employee Web App remains a separate Docker Compose project at `https://app.vpowerplus.tech`; both services use the existing `n8n_default` Traefik network without sharing containers, volumes, or router names.

**Tech Stack:** Vinext/React, Node.js 22, Docker Compose, PowerShell, SSH/SCP, existing Next.js employee Web App.

## Global Constraints

- Preserve the existing `/opt/delivery-note-search` deployment and its Docker Compose project.
- Use `vpowerplus.tech` for the catalog and `app.vpowerplus.tech` for the employee Web App.
- Do not upload to the VPS until the user explicitly approves the deployment.
- Keep the catalog URL as `https://vpowerplus.tech`.
- Keep the employee app URL as `https://app.vpowerplus.tech`.

---

### Task 1: Make cross-application navigation explicit

**Files:**
- Modify: `app/page.tsx`
- Modify: `C:\Users\Theerasak\Finding\src\components\AppHeader.tsx`
- Modify: `C:\Users\Theerasak\Finding\.env.example`

**Interfaces:**
- Consumes: employee Web App URL `https://app.vpowerplus.tech`
- Produces: `App VPP Employee Only` link and `LANDING_PAGE_URL` configuration for the return link.

- [x] Replace the catalog placeholder target with `https://app.vpowerplus.tech`.
- [x] Add an external anchor in the employee app header using `process.env.LANDING_PAGE_URL ?? "https://vpowerplus.tech"`.
- [x] Add `LANDING_PAGE_URL=https://vpowerplus.tech` to the employee app environment template.
- [x] Run the catalog tests and employee app tests after both links are added.

### Task 2: Add isolated catalog container configuration

**Files:**
- Create: `Dockerfile`
- Create: `docker-compose.yml`
- Create: `.dockerignore`
- Create: `.env.example`

**Interfaces:**
- Consumes: `npm run build` and `npm run start -- --hostname 0.0.0.0 --port 3000`
- Produces: Docker service `catalog`, image `vpp-catalog:latest`, and Traefik router `vpp-catalog`.

- [x] Configure the catalog image to use Node.js 22 and run `npm run build` during its image build.
- [x] Start `vinext` on container port `3000`.
- [x] Route `vpowerplus.tech` and `www.vpowerplus.tech` to the catalog through its own Traefik labels and shared proxy network.
- [x] Exclude local build output, dependencies, logs, and secrets from the deployment build context.

### Task 3: Prepare repeatable VPS handoff

**Files:**
- Create: `scripts/deploy-vps.ps1`
- Create: `scripts/remote-deploy-vps.sh`
- Modify: `README.md`

**Interfaces:**
- Consumes: SSH/SCP credentials supplied by the VPS owner.
- Produces: `/opt/vpp-catalog`, a standalone Docker Compose deployment, and `https://vpowerplus.tech`.

- [x] Archive only deployable source and copy it to `/tmp/vpp-catalog-deploy.tar.gz`.
- [x] Extract the archive only into `/opt/vpp-catalog`.
- [x] Create `.env` from `.env.example` only if it does not exist.
- [ ] Run `docker compose up -d --build` in `/opt/vpp-catalog` after deployment approval.
- [ ] Verify `docker compose ps` before reporting the catalog URL.

### Task 4: Validate and request deployment approval

**Files:**
- Test: `tests/rendered-html.test.mjs`
- Test: `C:\Users\Theerasak\Finding\tests`

**Interfaces:**
- Consumes: completed navigation and container configuration.
- Produces: validated source awaiting explicit VPS deployment approval.

- [x] Run `npm test` in `C:\Users\Theerasak\Landing Page` and confirm zero failed tests.
- [x] Run `npm test` in `C:\Users\Theerasak\Finding` and confirm zero failed tests.
- [x] Inspect both Git working trees for unintended changes.
- [ ] Ask the user to approve deployment only after confirming the planned host port and HTTP/HTTPS behavior.
