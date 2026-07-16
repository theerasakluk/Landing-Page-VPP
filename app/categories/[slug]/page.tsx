import { notFound } from "next/navigation";
import Link from "next/link";
import type { CSSProperties } from "react";
import SiteHeader from "@/components/SiteHeader";
import {
  categoryMeta,
  getCategoryBySlug,
  getProductsByCategorySlug,
  getSubcategoryGroups,
} from "@/data/products";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ group?: string }>;
};

const categoryImages: Record<string, string> = {
  "office-supplies": "/category-office-supplies.png",
  "office-electronics": "/category-office-electronics.png",
  "office-furniture": "/category-office-furniture.png",
  "tools-equipment": "/category-tools-equipment.png",
  "pantry-cleaning": "/category-pantry-cleaning.png",
  "stationery-paper": "/category-stationery-paper.png",
  "computer-it": "/category-computer-it.png",
  "solar-rooftop": "/category-solar-rooftop.png",
};

const visualThemes: Record<string, { accent: string; wash: string }> = {
  "office-supplies": { accent: "#61af3e", wash: "rgba(218, 245, 227, 0.72)" },
  "office-electronics": { accent: "#0874bb", wash: "rgba(228, 243, 255, 0.78)" },
  "office-furniture": { accent: "#7a9f38", wash: "rgba(240, 246, 218, 0.76)" },
  "tools-equipment": { accent: "#4f8f32", wash: "rgba(224, 242, 210, 0.76)" },
  "pantry-cleaning": { accent: "#36a06f", wash: "rgba(218, 245, 227, 0.76)" },
  "stationery-paper": { accent: "#0874bb", wash: "rgba(228, 243, 255, 0.76)" },
  "computer-it": { accent: "#0868a8", wash: "rgba(228, 243, 255, 0.82)" },
  "solar-rooftop": { accent: "#61af3e", wash: "rgba(223, 244, 200, 0.82)" },
  "uniform-event": { accent: "#4f8f32", wash: "rgba(223, 244, 200, 0.78)" },
  "personal-care": { accent: "#36a06f", wash: "rgba(218, 245, 227, 0.78)" },
  "document-office": { accent: "#0874bb", wash: "rgba(228, 243, 255, 0.78)" },
  "cleaning-maintenance": { accent: "#36a06f", wash: "rgba(218, 245, 227, 0.78)" },
  "repair-tools": { accent: "#4f8f32", wash: "rgba(240, 246, 218, 0.78)" },
  "site-materials": { accent: "#7a9f38", wash: "rgba(223, 244, 200, 0.78)" },
  "books-learning": { accent: "#0874bb", wash: "rgba(228, 243, 255, 0.78)" },
  "paper-files": { accent: "#61af3e", wash: "rgba(218, 245, 227, 0.78)" },
  "writing-tools": { accent: "#0868a8", wash: "rgba(228, 243, 255, 0.72)" },
  "creative-supplies": { accent: "#36a06f", wash: "rgba(218, 245, 227, 0.72)" },
  other: { accent: "#7a9f38", wash: "rgba(240, 246, 218, 0.72)" },
};

export function generateStaticParams() {
  return categoryMeta.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "หมวดหมู่สินค้า | V Power Plus",
    };
  }

  return {
    title: `${category.name} | V Power Plus`,
    description: `${category.description} สำหรับขอใบเสนอราคา V Power Plus`,
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const query = searchParams ? await searchParams : {};
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const allProducts = getProductsByCategorySlug(slug);
  const subcategories = getSubcategoryGroups(slug);
  const activeGroup = subcategories.some((group) => group.slug === query.group) ? query.group : "";
  const visibleProducts = activeGroup
    ? allProducts.filter((product) => product.subcategorySlug === activeGroup)
    : allProducts;
  const activeGroupLabel = subcategories.find((group) => group.slug === activeGroup)?.label;
  const visualLabel = activeGroupLabel ?? category.name;
  const visualEyebrow = activeGroupLabel ? "หมวดหมู่ย่อย" : "หมวดหมู่หลัก";
  const visualCountLabel = activeGroupLabel ? "รายการในหมวดย่อย" : "รายการสินค้า";
  const visualTheme = visualThemes[activeGroup || slug] ?? visualThemes.other;
  const categoryImage = categoryImages[slug] ?? "/category-office-supplies.png";

  return (
    <main className="page-shell category-page-shell">
      <SiteHeader searchCategory={slug} searchId="category-search" />

      <header className="category-page-hero">
        <div className="category-page-heading">
          <div>
            <p className="quote-kicker">Product Category</p>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
            <div className="hero-actions">
              <Link className="primary-button" href="/#quote">
                ขอใบเสนอราคาเลย
              </Link>
              <Link className="secondary-button" href="/#categories">
                กลับไปหมวดหมู่ทั้งหมด
              </Link>
            </div>
          </div>
          <div
            className="category-visual"
            style={
              {
                "--category-accent": visualTheme.accent,
                "--category-wash": visualTheme.wash,
              } as CSSProperties
            }
          >
            <span className="category-visual-image">
              <img src={categoryImage} alt="" />
            </span>
            <span className="category-visual-label">
              <span>{visualEyebrow}</span>
              <strong>{visualLabel}</strong>
            </span>
            <span className="category-visual-count">
              <strong>{visibleProducts.length.toLocaleString("th-TH")}</strong>
              {visualCountLabel}
            </span>
          </div>
        </div>
      </header>

      {subcategories.length > 0 ? (
        <nav className="subcategory-nav" aria-label="หมวดหมู่ย่อย">
          <Link className={!activeGroup ? "active" : ""} href={`/categories/${slug}`}>
            ทั้งหมด
          </Link>
          {subcategories.map((group) => (
            <Link
              className={activeGroup === group.slug ? "active" : ""}
              href={`/categories/${slug}?group=${group.slug}`}
              key={group.slug}
            >
              {group.label}
            </Link>
          ))}
        </nav>
      ) : null}

      <section className="product-table-section">
        <div className="product-table-head">
          <div>
            <h2>{activeGroupLabel ?? "รายการสินค้าทั้งหมด"}</h2>
            <p>ลำดับสินค้าเริ่มต้นใหม่ในแต่ละหมวดหมู่และตัวกรองหมวดย่อย</p>
          </div>
          <Link className="primary-button" href="/#quote">
            ขอใบเสนอราคา
          </Link>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="product-table-wrap">
            <table className="product-table">
              <thead>
                <tr>
                  <th>ลำดับสินค้า</th>
                  <th>รหัสสินค้า</th>
                  <th>รายการสินค้า</th>
                  <th>รายละเอียดสินค้า</th>
                </tr>
              </thead>
              <tbody>
                {visibleProducts.map((product, index) => (
                  <tr key={`${product.code}-${product.id}`}>
                    <td data-label="ลำดับสินค้า">{index + 1}</td>
                    <td data-label="รหัสสินค้า">{product.code || "-"}</td>
                    <td data-label="รายการสินค้า">{product.name}</td>
                    <td data-label="รายละเอียดสินค้า">{product.detail || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-products">
            <strong>ยังไม่มีรายการสินค้าในหมวดนี้</strong>
            <p>หมวดนี้ถูกเตรียมไว้สำหรับอัปเดตสินค้าในอนาคต สามารถเพิ่มข้อมูลจาก Excel หรือฐานข้อมูลได้ภายหลัง</p>
          </div>
        )}
      </section>
    </main>
  );
}
