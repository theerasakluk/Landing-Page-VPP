"use client";

import { FormEvent, useMemo, useState } from "react";

type Member = {
  firstName: string;
  lastName: string;
  phone: string;
  lineId: string;
  address: string;
  organization: string;
  username: string;
  password: string;
};

const MEMBER_KEY = "vpp.member";
const SESSION_KEY = "vpp.session";

const emptyMember: Member = {
  firstName: "",
  lastName: "",
  phone: "",
  lineId: "",
  address: "",
  organization: "",
  username: "",
  password: "",
};

type AccountPanelProps = {
  initialMode?: string;
};

export default function AccountPanel({ initialMode = "login" }: AccountPanelProps) {
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage.getItem(SESSION_KEY)) {
      return "profile";
    }

    return initialMode === "register" ? "register" : "login";
  });
  const [member, setMember] = useState<Member>(() => {
    if (typeof window === "undefined") {
      return emptyMember;
    }

    const rawMember = window.localStorage.getItem(MEMBER_KEY);
    if (!rawMember) {
      return emptyMember;
    }

    try {
      return JSON.parse(rawMember) as Member;
    } catch {
      return emptyMember;
    }
  });
  const [login, setLogin] = useState({ username: "", password: "" });
  const [activeUsername, setActiveUsername] = useState(() => {
    if (typeof window === "undefined") {
      return "";
    }

    return window.localStorage.getItem(SESSION_KEY) ?? "";
  });
  const [message, setMessage] = useState("");

  const isLoggedIn = useMemo(() => Boolean(activeUsername && member.username === activeUsername), [activeUsername, member]);

  const notifyAuthChange = () => {
    window.dispatchEvent(new Event("vpp-auth-change"));
  };

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!member.firstName.trim() || !member.lastName.trim() || !member.username.trim() || !member.password.trim()) {
      setMessage("กรุณากรอก ชื่อ นามสกุล username และ password ให้ครบ");
      return;
    }

    window.localStorage.setItem(MEMBER_KEY, JSON.stringify(member));
    window.localStorage.setItem(SESSION_KEY, member.username);
    setActiveUsername(member.username);
    setMode("profile");
    setMessage("สมัครสมาชิกและเข้าสู่ระบบเรียบร้อยแล้ว");
    notifyAuthChange();
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login.username === member.username && login.password === member.password) {
      window.localStorage.setItem(SESSION_KEY, member.username);
      setActiveUsername(member.username);
      setMode("profile");
      setMessage("เข้าสู่ระบบเรียบร้อยแล้ว");
      notifyAuthChange();
      return;
    }

    setMessage("username หรือ password ไม่ถูกต้อง");
  };

  const handleProfileSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!member.firstName.trim() || !member.lastName.trim() || !member.username.trim() || !member.password.trim()) {
      setMessage("กรุณากรอก ชื่อ นามสกุล username และ password ให้ครบ");
      return;
    }

    window.localStorage.setItem(MEMBER_KEY, JSON.stringify(member));
    window.localStorage.setItem(SESSION_KEY, member.username);
    setActiveUsername(member.username);
    setMessage("บันทึกข้อมูลโปรไฟล์เรียบร้อยแล้ว");
    notifyAuthChange();
  };

  const handleLogout = () => {
    window.localStorage.removeItem(SESSION_KEY);
    setActiveUsername("");
    setMode("login");
    setMessage("ออกจากระบบแล้ว");
    notifyAuthChange();
  };

  const updateMember = (field: keyof Member, value: string) => {
    setMember((current) => ({ ...current, [field]: value }));
  };

  const renderMemberFields = () => (
    <>
      <label>
        ชื่อ *
        <input value={member.firstName} onChange={(event) => updateMember("firstName", event.target.value)} required />
      </label>
      <label>
        นามสกุล *
        <input value={member.lastName} onChange={(event) => updateMember("lastName", event.target.value)} required />
      </label>
      <label>
        เบอร์โทร
        <input value={member.phone} onChange={(event) => updateMember("phone", event.target.value)} />
      </label>
      <label>
        Line
        <input value={member.lineId} onChange={(event) => updateMember("lineId", event.target.value)} />
      </label>
      <label className="full">
        องค์กร / หน่วยงาน / บริษัท
        <input value={member.organization} onChange={(event) => updateMember("organization", event.target.value)} />
      </label>
      <label className="full">
        ที่อยู่
        <textarea value={member.address} onChange={(event) => updateMember("address", event.target.value)} />
      </label>
      <label>
        username *
        <input value={member.username} onChange={(event) => updateMember("username", event.target.value)} required />
      </label>
      <label>
        password *
        <input
          type="password"
          value={member.password}
          onChange={(event) => updateMember("password", event.target.value)}
          required
        />
      </label>
    </>
  );

  return (
    <section className="account-panel">
      <div className="account-tabs" aria-label="เลือกการใช้งานบัญชี">
        <button className={mode === "login" ? "active" : ""} type="button" onClick={() => setMode("login")}>
          เข้าสู่ระบบ
        </button>
        <button className={mode === "register" ? "active" : ""} type="button" onClick={() => setMode("register")}>
          สมัครสมาชิก
        </button>
        <button className={mode === "profile" ? "active" : ""} type="button" onClick={() => setMode("profile")}>
          Profile
        </button>
      </div>

      {message ? <p className="form-message">{message}</p> : null}

      {mode === "login" ? (
        <form className="quote-form account-form" onSubmit={handleLogin}>
          <label>
            username
            <input value={login.username} onChange={(event) => setLogin({ ...login, username: event.target.value })} />
          </label>
          <label>
            password
            <input
              type="password"
              value={login.password}
              onChange={(event) => setLogin({ ...login, password: event.target.value })}
            />
          </label>
          <button type="submit">เข้าสู่ระบบ</button>
        </form>
      ) : null}

      {mode === "register" ? (
        <form className="quote-form account-form" onSubmit={handleRegister}>
          {renderMemberFields()}
          <button type="submit">สมัครสมาชิก</button>
        </form>
      ) : null}

      {mode === "profile" ? (
        isLoggedIn ? (
          <form className="quote-form account-form" onSubmit={handleProfileSave}>
            {renderMemberFields()}
            <button type="submit">บันทึกข้อมูลใหม่</button>
            <button className="secondary-action" type="button" onClick={handleLogout}>
              Logout
            </button>
          </form>
        ) : (
          <div className="empty-products">
            <strong>ยังไม่ได้เข้าสู่ระบบ</strong>
            <p>กรุณาเข้าสู่ระบบหรือสมัครสมาชิกก่อนแก้ไขข้อมูลโปรไฟล์</p>
          </div>
        )
      ) : null}
    </section>
  );
}
