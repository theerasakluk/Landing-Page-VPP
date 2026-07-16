import type { CSSProperties } from "react";
import AccountPanel from "@/components/AccountPanel";
import SiteHeader from "@/components/SiteHeader";

type AccountPageProps = {
  searchParams?: Promise<{ mode?: string }>;
};

export const metadata = {
  title: "สมาชิกและโปรไฟล์ | V Power Plus",
  description: "สมัครสมาชิก เข้าสู่ระบบ และแก้ไขโปรไฟล์สำหรับลูกค้า V Power Plus",
};

export default async function AccountPage({ searchParams }: AccountPageProps) {
  const query = searchParams ? await searchParams : {};

  return (
    <main className="page-shell category-page-shell">
      <SiteHeader searchId="account-search" />

      <header className="category-page-hero">
        <div className="category-page-heading">
          <div>
            <p className="quote-kicker">Member Account</p>
            <h1>สมาชิก V Power Plus</h1>
            <p>
              สมัครสมาชิกง่ายๆ ด้วยข้อมูลติดต่อพื้นฐาน จากนั้นสามารถ Login/Logout และแก้ไขข้อมูลโปรไฟล์ได้ทันที
            </p>
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
              <img src="/v-power-plus-logo.png" alt="" />
            </span>
            <span className="category-visual-label">
              <span>Account</span>
              <strong>Login / Profile</strong>
            </span>
            <span className="category-visual-count">
              <strong>VPP</strong>
              Member
            </span>
          </div>
        </div>
      </header>

      <AccountPanel initialMode={query.mode} />
    </main>
  );
}
