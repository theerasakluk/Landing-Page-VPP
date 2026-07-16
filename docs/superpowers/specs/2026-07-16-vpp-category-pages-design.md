# VPP Category Pages Design

## Goal

Add eight product category pages for V Power Plus using the supplied Excel workbook as the source of product data.

## Approved Approach

Use a simple static-data approach first: extract product rows from Excel into a generated TypeScript data module, render category pages from that module, and keep the structure easy to migrate to a database later.

## Product Data

Source workbook:
`C:/Users/Theerasak/VPP Products/outputs/019f64c7/รายการสินค้าVVP_พร้อมรายละเอียดและรูปสินค้า_ฉบับสมบูรณ์.xlsx`

Use these fields:
- `หมวดหมู่สินค้า`
- `รหัสสินค้า`
- `รายการสินค้า`
- `รายละเอียดสินค้า`

Do not show price, delivery note, old category, recommendation column, or image link on the category pages.

## Pages

Create eight category routes:
- `/categories/office-supplies`
- `/categories/office-electronics`
- `/categories/office-furniture`
- `/categories/tools-equipment`
- `/categories/pantry-cleaning`
- `/categories/stationery-paper`
- `/categories/computer-it`
- `/categories/solar-rooftop`

The solar rooftop page remains available even when the workbook has no rows for that category.

## Category Page UI

Each page shows:
- category title
- product count
- short description
- subcategory navigation when the category has more than 100 products
- product table with columns: ลำดับสินค้า, รหัสสินค้า, รายการสินค้า, รายละเอียดสินค้า

The product number resets for each main category page after filtering by the active subcategory.

The table style should be simple and readable:
- light borders
- sticky-looking header treatment
- subtle alternating row backgrounds
- compact text
- mobile-friendly card layout for narrow screens

## Subcategories

For categories with more than 100 rows, create simple keyword-based subcategory groups from product names/details. Include an `ทั้งหมด` option for each of those categories.

Categories currently over 100 rows:
- อุปกรณ์เครื่องเขียน และผลิตภัณฑ์กระดาษ
- อุปกรณ์สำนักงานเบ็ดเตล็ด
- อุปกรณ์และเครื่องมือ

## Future Database Recommendation

Short term: generated TypeScript static data.

VPS phase: SQLite + Drizzle ORM for a small catalog/admin flow.

Growth phase: PostgreSQL + Drizzle ORM if the site later needs multi-user admin, quotation records, inventory, or richer product workflows.

## Verification

Run:
- `npm test`

Tests should verify:
- category data renders
- category routes render
- homepage category cards link to category pages
- solar rooftop page exists without product rows
