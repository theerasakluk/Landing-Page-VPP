"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type StoredMember = {
  firstName: string;
  lastName: string;
  username: string;
};

const MEMBER_KEY = "vpp.member";
const SESSION_KEY = "vpp.session";

export default function AccountLinks() {
  const [member, setMember] = useState<StoredMember | null>(null);

  useEffect(() => {
    const refresh = () => {
      const username = window.localStorage.getItem(SESSION_KEY);
      const rawMember = window.localStorage.getItem(MEMBER_KEY);

      if (!username || !rawMember) {
        setMember(null);
        return;
      }

      try {
        const parsed = JSON.parse(rawMember) as StoredMember;
        setMember(parsed.username === username ? parsed : null);
      } catch {
        setMember(null);
      }
    };

    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("vpp-auth-change", refresh);

    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("vpp-auth-change", refresh);
    };
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem(SESSION_KEY);
    window.dispatchEvent(new Event("vpp-auth-change"));
    setMember(null);
  };

  if (member) {
    return (
      <div className="account-links" aria-label="บัญชีและรายการขอราคา">
        <Link className="account-username" href="/account" aria-label={`โปรไฟล์ของ ${member.username}`}>
          {member.username}
        </Link>
        <button className="text-link-button" type="button" onClick={handleLogout}>
          Logout
        </button>
        <Link className="rfq-pill" href="/#quote" aria-label="รายการขอใบเสนอราคา 0 รายการ">
          RFQ
        </Link>
      </div>
    );
  }

  return (
    <div className="account-links" aria-label="บัญชีและรายการขอราคา">
      <Link href="/account?mode=login">เข้าสู่ระบบ</Link>
      <Link href="/account?mode=register">สมัครสมาชิก</Link>
      <Link className="rfq-pill" href="/#quote" aria-label="รายการขอใบเสนอราคา 0 รายการ">
        RFQ
      </Link>
    </div>
  );
}
