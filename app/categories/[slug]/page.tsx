import { notFound } from "next/navigation";
import Link from "next/link";
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
  const categoryImage = categoryImages[slug] ?? "/category-office-supplies.png";

  return (
    <main className="page-shell category-page-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="V Power Plus หน้าแรก">
          <img src="/v-power-plus-logo.png" alt="V Power Plus" />
        </Link>

        <form className="search-bar" role="search" aria-label="ค้นหาสินค้า">
          <label className="sr-only" htmlFor="category-search">
            ค้นหาสินค้า
          </label>
          <input id="category-search" type="search" placeholder="ชื่อสินค้า หรือ รหัสสินค้า" />
          <select aria-label="เลือกหมวดหมู่" defaultValue={slug}>
            {categoryMeta.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
          <button type="submit" aria-label="ค้นหา">
            ⌕
          </button>
        </form>

        <div className="account-links" aria-label="บัญชีและรายการขอราคา">
          <Link href="/#quote">เข้าสู่ระบบ</Link>
          <Link href="/#quote">สมัครสมาชิก</Link>
          <Link className="rfq-pill" href="/#quote" aria-label="รายการขอใบเสนอราคา 0 รายการ">
            RFQ
          </Link>
        </div>
      </header>

      <nav className="main-nav" aria-label="เมนูหลัก">
        <Link className="category-menu" href="/#categories">
          <span aria-hidden="true">≡</span> หมวดหมู่สินค้า
        </Link>
        <div className="nav-links">
          <Link href="/">หน้าแรก</Link>
          <Link href="/#about">เกี่ยวกับเรา</Link>
          <Link href="/#articles">บทความ</Link>
          <Link href="/#app">App</Link>
        </div>
        <div className="contact-line">
          <span>Tel: (083) 178-6446 คุณรุ้ง</span>
          <span>(061) 057-8761 คุณกิม</span>
        </div>
      </nav>

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
          <div className="category-visual" aria-hidden="true">
            <span className="category-visual-image">
              <img src={categoryImage} alt="" />
            </span>
            <span className="category-visual-count">
              <strong>{allProducts.length.toLocaleString("th-TH")}</strong>
              รายการสินค้า
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
