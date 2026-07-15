# V Power Plus Catalog Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved V Power Plus A + C catalog homepage for quotation requests.

**Architecture:** Create a new Sites web project in the empty workspace, then implement a single responsive homepage. Keep content and styling focused in the starter app's main page and global stylesheet unless the generated starter uses a different established pattern.

**Tech Stack:** Sites starter, React/TypeScript, CSS, lucide-style icons if available in the starter.

## Global Constraints

- Use Thai copy for the customer-facing site.
- Use the approved A + C mockup direction: clean catalog layout plus V Power Plus energy accents.
- Use the provided logo as the primary brand asset and prepare a transparent-background version for web placement.
- The site is a catalog for quotation requests, not a checkout/cart store.
- Include all eight requested product categories exactly as approved in the design spec.
- Keep the first version front-end only unless the user provides a quote form destination.

---

## File Structure

- `app/page.tsx`: Homepage layout, content, categories, quote CTA, and accessible sections.
- `app/globals.css`: Brand palette, responsive layout, category grid, quote form styling.
- `app/layout.tsx`: Thai metadata, title, description, and Open Graph metadata if an image is available.
- `public/v-power-plus-logo.png`: Web-ready brand logo with transparent background.

### Task 1: Create Site Starter And Brand Asset

**Files:**
- Create/Modify: generated Sites starter files
- Create: `public/v-power-plus-logo.png`

**Interfaces:**
- Produces: a runnable web project with `app/page.tsx`, `app/globals.css`, and `app/layout.tsx`.
- Produces: `/v-power-plus-logo.png` usable from React with `<img src="/v-power-plus-logo.png" alt="V Power Plus" />`.

- [ ] **Step 1: Initialize the Sites starter**

Run the Sites project initializer for the workspace root once.

- [ ] **Step 2: Prepare transparent logo**

Use the supplied logo image as source, remove the light background where possible, and save the result as `public/v-power-plus-logo.png`.

- [ ] **Step 3: Confirm starter runs**

Run the local development server and confirm the starter page loads.

### Task 2: Build Homepage Layout

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: `/v-power-plus-logo.png`.
- Produces: a single homepage with header, hero, proof strip, category grid, quote section, and footer.

- [ ] **Step 1: Replace starter page with V Power Plus content**

Implement semantic sections:
`Header`, `Hero`, `ProofStrip`, `CategoryGrid`, `QuoteSection`, and `Footer`.

- [ ] **Step 2: Add exact category content**

Render the eight category labels from the approved spec, with short supporting descriptions where useful.

- [ ] **Step 3: Update metadata**

Set the title to `V Power Plus | วีพาวเวอร์พลัส` and the description to a Thai catalog and quotation message.

### Task 3: Style The Approved A + C Direction

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: class names from `app/page.tsx`.
- Produces: responsive blue/green/white catalog UI matching the approved mockup.

- [ ] **Step 1: Add brand design tokens**

Define colors for V Power blue, deep blue, energy green, aqua, borders, and light backgrounds.

- [ ] **Step 2: Style desktop layout**

Create compact header, search bar, hero, proof metrics, category grid, and quote panel.

- [ ] **Step 3: Style mobile layout**

Stack header controls, hero, proof cards, categories, and quote form without text clipping.

### Task 4: Validate And Publish

**Files:**
- Modify only if validation finds defects.

**Interfaces:**
- Consumes: completed site.
- Produces: build-validated and deployed Sites URL.

- [ ] **Step 1: Run production build**

Run `npm run build` and fix any build failures.

- [ ] **Step 2: Preview key responsive states**

Check desktop and mobile layouts for readable Thai text, visible categories, and clear quote CTA.

- [ ] **Step 3: Deploy with Sites**

Publish the validated site and return the deployed URL.

## Self-Review

- Spec coverage: all sections in the approved design spec map to Tasks 1-4.
- Placeholder scan: no unresolved TBD/TODO placeholders remain.
- Type consistency: the only cross-task asset interface is `/v-power-plus-logo.png`.
