# VPP Category Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build eight product category pages from the VPP Excel workbook with readable product tables and future database migration in mind.

**Architecture:** Generate a static TypeScript data module from the workbook, render one dynamic category route from shared metadata, and reuse helper functions for category/subcategory lookup. Keep data extraction separate from UI.

**Tech Stack:** Next/Vinext app router, React server components, TypeScript, CSS, bundled Python/openpyxl for one-time data generation, Node test runner.

## Global Constraints

- Do not implement a database in this phase.
- Use the workbook as the source of product data.
- Show only ลำดับสินค้า, รหัสสินค้า, รายการสินค้า, รายละเอียดสินค้า on category pages.
- Keep the solar rooftop page even when it has no products yet.
- Use simple, readable table styling.

---

### Task 1: Generate Product Data

**Files:**
- Create: `scripts/generate-products-data.py`
- Create: `data/products.ts`

**Interfaces:**
- Produces: `categoryMeta`, `products`, `getCategoryBySlug`, `getProductsByCategorySlug`, `getSubcategoryGroups`

- [ ] Add a Python script that reads the workbook and writes `data/products.ts`.
- [ ] Run the script.
- [ ] Inspect generated category counts.

### Task 2: Add Category Route

**Files:**
- Create: `app/categories/[slug]/page.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes product helpers from `data/products.ts`.
- Produces eight category pages.

- [ ] Add dynamic route page.
- [ ] Add subcategory filtering via `?group=...`.
- [ ] Add empty state for solar rooftop.
- [ ] Add responsive table/card styling.

### Task 3: Wire Homepage Links

**Files:**
- Modify: `app/page.tsx`

- [ ] Add category slugs to homepage categories.
- [ ] Link each category card to its category page.

### Task 4: Tests and Review

**Files:**
- Modify: `tests/rendered-html.test.mjs`

- [ ] Add route rendering tests for category pages.
- [ ] Add source tests for generated data and homepage links.
- [ ] Run `npm test`.
- [ ] Review code for maintainability, routing, data correctness, and mobile table behavior.
