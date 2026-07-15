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

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
  assert.match(html, /ขอใบเสนอราคาเลย/);
  assert.match(html, /Contact Center: 02-XXX-XXXX/);

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

  assert.match(page, /v-power-plus-logo\.png/);
  assert.match(page, /const categories = \[/);
  assert.match(page, /V Power Plus Catalog Online/);
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
