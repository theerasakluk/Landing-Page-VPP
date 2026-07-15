import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "V Power Plus | วีพาวเวอร์พลัส",
  description:
    "ร้านแคตตาล็อกอุปกรณ์สำนักงาน ไอที เครื่องมือ เฟอร์นิเจอร์ และโซลาร์รูฟท็อป สำหรับขอใบเสนอราคา",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={notoSansThai.variable}>{children}</body>
    </html>
  );
}
