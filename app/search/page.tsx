import Link from "next/link";
import type { CSSProperties } from "react";
import SiteHeader from "@/components/SiteHeader";
import { categoryMeta, products, getCategoryBySlug } from "@/data/products";

type SearchPageProps = {
  searchParams?: Promise<{ q?: string; category?: string }>;
};

const normalize = (value: string) => value.toLowerCase().trim();

const scoreProduct = (product: (typeof products)[number], query: string) => {
  const text = normalize(`${product.code} ${product.name} ${product.detail}`);
  const normalizedQuery = normalize(query);
  const words = normalizedQuery.split(/\s+/).filter((word) => word.length >= 2);

  if (!normalizedQuery) {
    return 0;
  }

  if (normalize(product.code) === normalizedQuery) {
    return 100;
  }

  if (text.includes(normalizedQuery)) {
    return 80;
  }

  const matchedWords = words.filter((word) => text.includes(word)).length;
  if (matchedWords > 0) {
    return 40 + matchedWords * 5;
  }

  return 0;
};

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const query = searchParams ? await searchParams : {};
  const keyword = query.q?.trim();

  return {
    title: keyword ? `ค้นหา ${keyword} | V Power Plus` : "ค้นหาสินค้า | V Power Plus",
    description: "ค้นหารายการสินค้า V Power Plus จากชื่อสินค้า รหัสสินค้า รายละเอียดสินค้า และหมวดหมู่",
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams ? await searchParams : {};
  const keyword = query.q?.trim() ?? "";
  const categorySlug = query.category && getCategoryBySlug(query.category) ? query.category : "all";
  const selectedCategory = categorySlug === "all" ? null : getCategoryBySlug(categorySlug);
  const searchScope = selectedCategory?.name ?? "หมวดหมู่ทั้งหมด";

  const scopedProducts =
    categorySlug === "all" ? products : products.filter((product) => product.categorySlug === categorySlug);

  const results = keyword
    ? scopedProducts
        .map((product) => ({
          product,
          score: scoreProduct(product, keyword),
          category: getCategoryBySlug(product.categorySlug),
        }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score || a.product.id - b.product.id)
    : [];

  return (
    <main className="page-shell category-page-shell">
      <SiteHeader searchQuery={keyword} searchCategory={categorySlug} searchId="search-page-input" />

      <header className="category-page-hero search-hero">
        <div className="category-page-heading">
          <div>
            <p className="quote-kicker">Product Search</p>
            <h1>ผลการค้นหาสินค้า</h1>
            <p>
              ค้นหาจากรหัสสินค้า รายการสินค้า และรายละเอียดสินค้า พร้อมเลือกได้ว่าจะค้นหาทั้งหมดหรือเฉพาะหมวดหมู่
            </p>
            <div className="search-summary">
              <span>คำค้นหา: {keyword || "ยังไม่ได้ระบุ"}</span>
              <span>หมวดหมู่: {searchScope}</span>
              <span>พบสินค้า: {results.length.toLocaleString("th-TH")} รายการ</span>
            </div>
          </div>
          <div
            className="category-visual"
            style={
              {
                "--category-accent": "#61af3e",
                "--category-wash": "rgba(218, 245, 227, 0.78)",
              } as CSSProperties
            }
          >
            <span className="category-visual-image">
              <img src="/category-office-supplies.png" alt="" />
            </span>
            <span className="category-visual-label">
              <span>Search Scope</span>
              <strong>{searchScope}</strong>
            </span>
            <span className="category-visual-count">
              <strong>{results.length.toLocaleString("th-TH")}</strong>
              ผลลัพธ์
            </span>
          </div>
        </div>
      </header>

      <section className="product-table-section">
        <div className="product-table-head">
          <div>
            <h2>{keyword ? `รายการที่เกี่ยวข้องกับ “${keyword}”` : "กรุณาพิมพ์คำค้นหา"}</h2>
            <p>ผลลัพธ์เรียงจากรายการที่ตรงที่สุด แล้วตามด้วยรายการที่มีคำใกล้เคียงในรายละเอียดสินค้า</p>
          </div>
          <Link className="primary-button" href="/#quote">
            ขอใบเสนอราคา
          </Link>
        </div>

        {results.length > 0 ? (
          <div className="product-table-wrap">
            <table className="product-table">
              <thead>
                <tr>
                  <th>ลำดับสินค้า</th>
                  <th>รหัสสินค้า</th>
                  <th>รายการสินค้า</th>
                  <th>รายละเอียดสินค้า</th>
                  <th>หมวดหมู่</th>
                </tr>
              </thead>
              <tbody>
                {results.map(({ product, category }, index) => (
                  <tr key={`${product.code}-${product.id}`}>
                    <td data-label="ลำดับสินค้า">{index + 1}</td>
                    <td data-label="รหัสสินค้า">{product.code || "-"}</td>
                    <td data-label="รายการสินค้า">{product.name}</td>
                    <td data-label="รายละเอียดสินค้า">{product.detail || "-"}</td>
                    <td data-label="หมวดหมู่">
                      <Link className="table-link" href={`/categories/${product.categorySlug}`}>
                        {category?.name ?? "-"}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-products">
            <strong>{keyword ? "ยังไม่พบรายการสินค้าที่ตรงกับคำค้นหา" : "เริ่มค้นหาสินค้าได้จากช่องด้านบน"}</strong>
            <p>
              ลองค้นด้วยรหัสสินค้า ชื่อสินค้า หรือคำใกล้เคียง เช่น กระดาษ ปากกา โต๊ะ เก้าอี้ เครื่องมือ หรือหมวดหมู่ที่ต้องการ
            </p>
          </div>
        )}
      </section>

      <section className="subcategory-nav" aria-label="เลือกค้นหาตามหมวดหมู่">
        <Link className={categorySlug === "all" ? "active" : ""} href={`/search?q=${encodeURIComponent(keyword)}`}>
          ทั้งหมด
        </Link>
        {categoryMeta.map((category) => (
          <Link
            className={categorySlug === category.slug ? "active" : ""}
            href={`/search?q=${encodeURIComponent(keyword)}&category=${category.slug}`}
            key={category.slug}
          >
            {category.name}
          </Link>
        ))}
      </section>
    </main>
  );
}
