import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const requiredCategories = [
  "อุปกรณ์สำนักงานเบ็ดเตล็ด",
  "อุปกรณ์สำนักงานอิเล็กทรอนิกส์",
  "เฟอร์นิเจอร์สำนักงาน",
  "อุปกรณ์และเครื่องมือ",
  "เครื่องดื่ม เครื่องใช้ และผลิตภัณฑ์อื่นๆ",
  "อุปกรณ์เครื่องเขียน และผลิตภัณฑ์กระดาษ",
  "ผลิตภัณฑ์สำหรับคอมพิวเตอร์และไอทีต่างๆ",
  "ผลิตภัณฑ์สำหรับโซล่าร์รูฟท็อป",
];

const requiredCategoryImages = [
  "/category-office-supplies.png",
  "/category-office-electronics.png",
  "/category-office-furniture.png",
  "/category-tools-equipment.png",
  "/category-pantry-cleaning.png",
  "/category-stationery-paper.png",
  "/category-computer-it.png",
  "/category-solar-rooftop.png",
];

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the V Power Plus quotation catalog homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]+lang="th"/i);
  assert.match(html, /<title>V Power Plus \| วีพาวเวอร์พลัส<\/title>/i);
  assert.match(html, /VPP/);
  assert.match(html, /SHOP/);
  assert.match(html, /V Power Plus Catalog Online/);
  assert.match(html, /href="\/categories\/office-supplies"/);
  assert.match(html, /href="\/categories\/stationery-paper"/);
  assert.match(html, /href="\/categories\/solar-rooftop"/);
  assert.match(html, /ขอใบเสนอราคาเลย/);
  assert.match(html, /เกี่ยวกับเรา/);
  assert.match(html, /บทความ/);
  assert.match(html, /App/);
  assert.match(html, /\(083\) 178-6446/);
  assert.match(html, /\(061\) 057-8761/);
  assert.match(html, /VPowerPlusTH@gmail\.com/);
  assert.match(html, /อ\.เมือง จ\.หนองบัวลำภู/);
  assert.doesNotMatch(html, /ช่วยเหลือ/);
  assert.doesNotMatch(html, /How to/);

  for (const category of requiredCategories) {
    assert.match(html, new RegExp(category));
  }

  for (const image of requiredCategoryImages) {
    assert.match(html, new RegExp(`src="${image}"`));
  }

  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("source keeps the final site independent from the starter preview", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /const categories = \[/);
  assert.match(page, /V Power Plus Catalog Online/);
  assert.match(page, /<section className="about-section" id="about">/);
  assert.match(page, /<section className="app-strip" id="app"/);
  assert.match(page, /App VPP Employee Only/);
  assert.match(page, /<SiteHeader \/>/);
  assert.match(layout, /lang="th"/);
  assert.doesNotMatch(page, /SkeletonPreview|_sites-preview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("category image assets exist and are wired into the homepage source", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  for (const image of requiredCategoryImages) {
    assert.match(page, new RegExp(image.replace("/", "\\/")));
    await access(new URL(`../public${image}`, import.meta.url));
  }
});

test("category pages render products from the generated Excel data", async () => {
  const response = await render("/categories/stationery-paper");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /อุปกรณ์เครื่องเขียน และผลิตภัณฑ์กระดาษ/);
  assert.match(html, /696/);
  assert.match(html, /ลำดับสินค้า/);
  assert.match(html, /รหัสสินค้า/);
  assert.match(html, /รายการสินค้า/);
  assert.match(html, /รายละเอียดสินค้า/);
  assert.match(html, /VSP/);
  assert.match(html, /หนังสือ/);
  assert.match(html, /หนังสือและสื่อการเรียน/);
});

test("large categories expose subcategory navigation", async () => {
  const response = await render("/categories/tools-equipment?group=cleaning-maintenance");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /อุปกรณ์และเครื่องมือ/);
  assert.match(html, /ทำความสะอาดและดูแลพื้นที่/);
  assert.match(html, /ทั้งหมด/);
  assert.match(html, /ไม้ฟองน้ำซับน้ำ|แปรงขัดส้วม|สก๊อต/);
});

test("solar rooftop category remains available for future products", async () => {
  const response = await render("/categories/solar-rooftop");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /ผลิตภัณฑ์สำหรับโซล่าร์รูฟท็อป/);
  assert.match(html, /0/);
  assert.match(html, /ยังไม่มีรายการสินค้าในหมวดนี้/);
  assert.match(html, /อัปเดตสินค้าในอนาคต/);
});

test("search page renders query details and matching products", async () => {
  const response = await render("/search?q=VSP595&category=all");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /ผลการค้นหาสินค้า/);
  assert.match(html, /คำค้นหา/);
  assert.match(html, /VSP595/);
  assert.match(html, /หมวดหมู่ทั้งหมด/);
  assert.match(html, /รายการที่เกี่ยวข้อง/);
  assert.match(html, /href="\/categories\/office-supplies"/);
});

test("account page renders member registration and login profile surface", async () => {
  const response = await render("/account?mode=register");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /สมาชิก V Power Plus/);
  assert.match(html, /สมัครสมาชิก/);
  assert.match(html, /username/);
  assert.match(html, /password/);
  assert.match(html, /Profile/);
});

test("generated product data keeps the expected Excel import shape", async () => {
  const data = await readFile(new URL("../data/products.ts", import.meta.url), "utf8");

  assert.match(data, /export const products = /);
  assert.match(data, /"categorySlug": "stationery-paper"/);
  assert.match(data, /"categorySlug": "office-supplies"/);
  assert.match(data, /"code": "VSP595"/);
  assert.match(data, /"subcategorySlug": "books-learning"/);
  assert.match(data, /export function getProductsByCategorySlug/);
});
