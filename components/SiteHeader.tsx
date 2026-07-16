import Link from "next/link";
import AccountLinks from "./AccountLinks";
import SearchBar from "./SearchBar";

type SiteHeaderProps = {
  searchQuery?: string;
  searchCategory?: string;
  searchId?: string;
};

export default function SiteHeader({ searchQuery, searchCategory, searchId }: SiteHeaderProps) {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="V Power Plus หน้าแรก">
          <img src="/v-power-plus-logo.png" alt="V Power Plus" />
        </Link>

        <SearchBar defaultQuery={searchQuery} defaultCategory={searchCategory} id={searchId} />

        <AccountLinks />
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
    </>
  );
}
