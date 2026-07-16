export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
};

export type ProductSubcategory = {
  slug: string;
  label: string;
};

export type Product = {
  id: number;
  categorySlug: string;
  subcategorySlug: string;
  code: string;
  name: string;
  detail: string;
};

export const categoryMeta = [
  {
    "slug": "office-supplies",
    "name": "อุปกรณ์สำนักงานเบ็ดเตล็ด",
    "description": "เครื่องใช้ประจำสำนักงาน อุปกรณ์โต๊ะทำงาน และของใช้ทั่วไป"
  },
  {
    "slug": "office-electronics",
    "name": "อุปกรณ์สำนักงานอิเล็กทรอนิกส์",
    "description": "เครื่องคิดเลข โทรศัพท์ ปลั๊กไฟ และอุปกรณ์ไฟฟ้าในสำนักงาน"
  },
  {
    "slug": "office-furniture",
    "name": "เฟอร์นิเจอร์สำนักงาน",
    "description": "โต๊ะ เก้าอี้ ตู้เอกสาร ชั้นวาง และเฟอร์นิเจอร์สำหรับออฟฟิศ"
  },
  {
    "slug": "tools-equipment",
    "name": "อุปกรณ์และเครื่องมือ",
    "description": "เครื่องมือช่าง อุปกรณ์ซ่อมบำรุง อุปกรณ์เซฟตี้ และของใช้หน้างาน"
  },
  {
    "slug": "pantry-cleaning",
    "name": "เครื่องดื่มเครื่องใช้และผลิตภัณฑ์อื่นๆ",
    "description": "สินค้าแคนทีน ผลิตภัณฑ์ทำความสะอาด และของใช้ประจำอาคาร"
  },
  {
    "slug": "stationery-paper",
    "name": "อุปกรณ์เครื่องเขียน และผลิตภัณฑ์กระดาษ",
    "description": "ปากกา แฟ้ม สมุด กระดาษ แบบฟอร์ม และอุปกรณ์งานเอกสาร"
  },
  {
    "slug": "computer-it",
    "name": "ผลิตภัณฑ์สำหรับคอมพิวเตอร์และไอทีต่างๆ",
    "description": "อุปกรณ์ต่อพ่วง หมึกพิมพ์ สายเคเบิล และสินค้าไอทีสำนักงาน"
  },
  {
    "slug": "solar-rooftop",
    "name": "ผลิตภัณฑ์สำหรับโซล่าร์รูฟท็อป",
    "description": "อุปกรณ์พลังงาน ระบบติดตั้ง และสินค้าเกี่ยวกับ solar rooftop"
  }
] as const satisfies readonly ProductCategory[];

export const subcategoryMeta = {
  "stationery-paper": [
    {
      "slug": "books-learning",
      "label": "หนังสือและสื่อการเรียน"
    },
    {
      "slug": "paper-files",
      "label": "กระดาษ สมุด และแฟ้ม"
    },
    {
      "slug": "writing-tools",
      "label": "ปากกา ดินสอ และเครื่องเขียน"
    },
    {
      "slug": "creative-supplies",
      "label": "งานศิลปะและสื่อสร้างสรรค์"
    },
    {
      "slug": "other",
      "label": "อื่นๆ"
    }
  ],
  "office-supplies": [
    {
      "slug": "uniform-event",
      "label": "เครื่องแต่งกายและกิจกรรม"
    },
    {
      "slug": "personal-care",
      "label": "ของใช้ส่วนตัวและความงาม"
    },
    {
      "slug": "document-office",
      "label": "งานเอกสารและอุปกรณ์สำนักงาน"
    },
    {
      "slug": "other",
      "label": "อื่นๆ"
    }
  ],
  "tools-equipment": [
    {
      "slug": "cleaning-maintenance",
      "label": "ทำความสะอาดและดูแลพื้นที่"
    },
    {
      "slug": "repair-tools",
      "label": "เครื่องมือช่างและซ่อมบำรุง"
    },
    {
      "slug": "site-materials",
      "label": "วัสดุก่อสร้างและหน้างาน"
    },
    {
      "slug": "other",
      "label": "อื่นๆ"
    }
  ]
} as const satisfies Record<string, readonly ProductSubcategory[]>;

export const products = [
  {
    "id": 1,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP595",
    "name": "ชุดเครื่องแบบ รปภ (XL-1ชุด และ 2XL-2ชุด)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ชุดเครื่องแบบ รปภ (XL-1ชุด และ 2XL-2ชุด)"
  },
  {
    "id": 2,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP596",
    "name": "ปลอกแขน รปภ",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ปลอกแขน รปภ"
  },
  {
    "id": 3,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP597",
    "name": "นกหวีดสายเหลือง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: นกหวีดสายเหลือง"
  },
  {
    "id": 4,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP313",
    "name": "ไม้ฟองน้ำซับน้ำ",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ไม้ฟองน้ำซับน้ำ"
  },
  {
    "id": 5,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP314",
    "name": "ผงซักผ้าขนาด 8 กก.",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ผงซักผ้าขนาด 8 กก."
  },
  {
    "id": 6,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP315",
    "name": "แปรงขัดส้วม แบบด้ามสั้น",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: แปรงขัดส้วม แบบด้ามสั้น"
  },
  {
    "id": 7,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP316",
    "name": "สก๊อตไปร์ท",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: สก๊อตไปร์ท"
  },
  {
    "id": 8,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP317",
    "name": "ถุงดำแบบยาง",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถุงดำแบบยาง"
  },
  {
    "id": 9,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP318",
    "name": "แปรงขัดพื้นแบบด้ามยาว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: แปรงขัดพื้นแบบด้ามยาว"
  },
  {
    "id": 10,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP247",
    "name": "เสภาเรื่อง ขุนช้างขุนแผน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เสภาเรื่อง ขุนช้างขุนแผน"
  },
  {
    "id": 11,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "books-learning",
    "code": "VSP248",
    "name": "หนังสือออกแบบการเรีบนรู้: แนวคิดและกระบวนการ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: หนังสือออกแบบการเรีบนรู้: แนวคิดและกระบวนการ"
  },
  {
    "id": 12,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "books-learning",
    "code": "VSP249",
    "name": "หนังสือจนกว่าโลกจะโอบกอดเราเอาไว้",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: หนังสือจนกว่าโลกจะโอบกอดเราเอาไว้"
  },
  {
    "id": 13,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP250",
    "name": "อสรพิษและเรื่องอื่นๆ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: อสรพิษและเรื่องอื่นๆ"
  },
  {
    "id": 14,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "books-learning",
    "code": "VSP251",
    "name": "การศึกษาแบบเรียนร่วม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: การศึกษาแบบเรียนร่วม"
  },
  {
    "id": 15,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP252",
    "name": "เกร็ดย่อยร้อยเรื่อง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เกร็ดย่อยร้อยเรื่อง"
  },
  {
    "id": 16,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "books-learning",
    "code": "VSP253",
    "name": "คลังข้อสอบภาษาไทย 1,000 ข้อ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลังข้อสอบภาษาไทย 1,000 ข้อ"
  },
  {
    "id": 17,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "books-learning",
    "code": "VSP254",
    "name": "คลังข้อสอบภาษาไทย ม.ปลาย จัดเต็ม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลังข้อสอบภาษาไทย ม.ปลาย จัดเต็ม"
  },
  {
    "id": 18,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "books-learning",
    "code": "VSP255",
    "name": "ภาษาไทย ม.ปลาย เก็งข้อสอบเฉียบ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ภาษาไทย ม.ปลาย เก็งข้อสอบเฉียบ"
  },
  {
    "id": 19,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP256",
    "name": "สูตรลัดภาษาไทย ม.ต้น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สูตรลัดภาษาไทย ม.ต้น"
  },
  {
    "id": 20,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP257",
    "name": "บทละครพูดคำฉันท์เรื่อง มัทนะพาธา",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: บทละครพูดคำฉันท์เรื่อง มัทนะพาธา"
  },
  {
    "id": 21,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "books-learning",
    "code": "VSP258",
    "name": "คลังข้อสอบภาษาไทย การอ่านจับประเด็น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลังข้อสอบภาษาไทย การอ่านจับประเด็น"
  },
  {
    "id": 22,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP259",
    "name": "การอ่านจับใจความ (ฉบับปรับปรุงใหม่)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: การอ่านจับใจความ (ฉบับปรับปรุงใหม่)"
  },
  {
    "id": 23,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP260",
    "name": "อิเหนา",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: อิเหนา"
  },
  {
    "id": 24,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP261",
    "name": "ลูกวอลเล่ย์บอล Mikasa V300W",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกวอลเล่ย์บอล Mikasa V300W"
  },
  {
    "id": 25,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP262",
    "name": "ลูกฟุตซอล Grandsport Gravity 2",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกฟุตซอล Grandsport Gravity 2"
  },
  {
    "id": 26,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP263",
    "name": "ลูกฟุตบอล Molten F503400",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกฟุตบอล Molten F503400"
  },
  {
    "id": 27,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP264",
    "name": "ลูกแชร์บอล Superstar",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกแชร์บอล Superstar"
  },
  {
    "id": 28,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP265",
    "name": "ตะกร้าแชร์บอล",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ตะกร้าแชร์บอล"
  },
  {
    "id": 29,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP266",
    "name": "เสาและตาข่ายเทเบิลเทนนิส Grandsport",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เสาและตาข่ายเทเบิลเทนนิส Grandsport"
  },
  {
    "id": 30,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP267",
    "name": "ตู้ Build-in ห้องวิทยาศาสตร์ ขนาด 1.3 เมตร ลึก 4.7 เมตร สูง 1.8 เมตร",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: ตู้ Build-in ห้องวิทยาศาสตร์ ขนาด 1.3 เมตร ลึก 4.7 เมตร สูง 1.8 เมตร"
  },
  {
    "id": 31,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP268",
    "name": "กรอบเกียรติบัตร ขนาด A4",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กรอบเกียรติบัตร ขนาด A4"
  },
  {
    "id": 32,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP269",
    "name": "กระดาษพิมพ์เกียรติบัตรขอบทอง ขนาด A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษพิมพ์เกียรติบัตรขอบทอง ขนาด A4"
  },
  {
    "id": 33,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP270",
    "name": "ถ่าน Panasonic AAA LR03T/2B",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่าน Panasonic AAA LR03T/2B"
  },
  {
    "id": 34,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP271",
    "name": "ปากกาลูกลื่น Deli Q03336 (50 ด้าม)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่น Deli Q03336 (50 ด้าม)"
  },
  {
    "id": 35,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP272",
    "name": "ที่เจาะกระดาษ 2 รู (Robin)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ที่เจาะกระดาษ 2 รู (Robin)"
  },
  {
    "id": 36,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP273",
    "name": "เทปลบความผิด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปลบความผิด"
  },
  {
    "id": 37,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "site-materials",
    "code": "VSP274",
    "name": "หินขนาด 3/4",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: หินขนาด 3/4"
  },
  {
    "id": 38,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "site-materials",
    "code": "VSP275",
    "name": "ยางมะตอยสำเร็จรูป (20 กก)",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ยางมะตอยสำเร็จรูป (20 กก)"
  },
  {
    "id": 39,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "repair-tools",
    "code": "VSP276",
    "name": "สว่านแท่น ยี่ห้อ Hero ขนาด 1/2\"",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: สว่านแท่น ยี่ห้อ Hero ขนาด 1/2\""
  },
  {
    "id": 40,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP277",
    "name": "สิ่วเจาะไม้ขนาด 1/4\" ด้ามไม้",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: สิ่วเจาะไม้ขนาด 1/4\" ด้ามไม้"
  },
  {
    "id": 41,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP278",
    "name": "สิ่วเจาะไม้ขนาด 3/8\" ด้ามไม้",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: สิ่วเจาะไม้ขนาด 3/8\" ด้ามไม้"
  },
  {
    "id": 42,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP279",
    "name": "สิ่วเจาะไม้ขนาด 1/2\" ด้ามไม้",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: สิ่วเจาะไม้ขนาด 1/2\" ด้ามไม้"
  },
  {
    "id": 43,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP280",
    "name": "สิ่วเจาะไม้ขนาด 5/8\" ด้ามไม้",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: สิ่วเจาะไม้ขนาด 5/8\" ด้ามไม้"
  },
  {
    "id": 44,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP281",
    "name": "สิ่วเจาะไม้ขนาด 3/4\" ด้ามไม้",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: สิ่วเจาะไม้ขนาด 3/4\" ด้ามไม้"
  },
  {
    "id": 45,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP282",
    "name": "สิ่วเจาะไม้ขนาด 1\" ด้ามไม้",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: สิ่วเจาะไม้ขนาด 1\" ด้ามไม้"
  },
  {
    "id": 46,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP283",
    "name": "ผ้าแดง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ผ้าแดง"
  },
  {
    "id": 47,
    "categorySlug": "office-supplies",
    "subcategorySlug": "personal-care",
    "code": "VSP284",
    "name": "สเปรย์ Caring",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: สเปรย์ Caring"
  },
  {
    "id": 48,
    "categorySlug": "office-supplies",
    "subcategorySlug": "personal-care",
    "code": "VSP285",
    "name": "กิ๊บดำ",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กิ๊บดำ"
  },
  {
    "id": 49,
    "categorySlug": "office-supplies",
    "subcategorySlug": "personal-care",
    "code": "VSP286",
    "name": "รองพื้น ศรีจันทร์ เบอร์120",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: รองพื้น ศรีจันทร์ เบอร์120"
  },
  {
    "id": 50,
    "categorySlug": "office-supplies",
    "subcategorySlug": "personal-care",
    "code": "VSP287",
    "name": "รองพื้น ศรีจันทร์ เบอร์130",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: รองพื้น ศรีจันทร์ เบอร์130"
  },
  {
    "id": 51,
    "categorySlug": "office-supplies",
    "subcategorySlug": "personal-care",
    "code": "VSP288",
    "name": "รองพื้น ศรีจันทร์ เบอร์140",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: รองพื้น ศรีจันทร์ เบอร์140"
  },
  {
    "id": 52,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP289",
    "name": "แป้งฝุ่น เบอร์ 02",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แป้งฝุ่น เบอร์ 02"
  },
  {
    "id": 53,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP290",
    "name": "แป้งฝุ่น เบอร์ 03",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แป้งฝุ่น เบอร์ 03"
  },
  {
    "id": 54,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP291",
    "name": "ดินสอเขียนคิ้วดึงเชือก",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ดินสอเขียนคิ้วดึงเชือก"
  },
  {
    "id": 55,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP292",
    "name": "พาเลทอายแชร์โดว์ เนื้อแมต",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: พาเลทอายแชร์โดว์ เนื้อแมต"
  },
  {
    "id": 56,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP293",
    "name": "พาเลทบรัชออน",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: พาเลทบรัชออน"
  },
  {
    "id": 57,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP294",
    "name": "แปรงแต่งหน้า",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แปรงแต่งหน้า"
  },
  {
    "id": 58,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP295",
    "name": "ขนตา",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ขนตา"
  },
  {
    "id": 59,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP296",
    "name": "กาวติดขนตา",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กาวติดขนตา"
  },
  {
    "id": 60,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP297",
    "name": "ลิปสติก สีแดง สีชมพู สีส้ม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ลิปสติก สีแดง สีชมพู สีส้ม"
  },
  {
    "id": 61,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP298",
    "name": "หวี",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: หวี"
  },
  {
    "id": 62,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP299",
    "name": "ใบมีด (สำหรับกันคิ้ว)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ใบมีด (สำหรับกันคิ้ว)"
  },
  {
    "id": 63,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP300",
    "name": "มาสคาร่า",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: มาสคาร่า"
  },
  {
    "id": 64,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP301",
    "name": "อายไลน์เนอร์",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: อายไลน์เนอร์"
  },
  {
    "id": 65,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP302",
    "name": "กล่องใส่เครื่องสำอาง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กล่องใส่เครื่องสำอาง"
  },
  {
    "id": 66,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP303",
    "name": "เข็ม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เข็ม"
  },
  {
    "id": 67,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP304",
    "name": "ด้ายสานสวิง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ด้ายสานสวิง"
  },
  {
    "id": 68,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP305",
    "name": "เมเยอร์",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เมเยอร์"
  },
  {
    "id": 69,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP306",
    "name": "โซ่เลื่อยยนต์ ชนิดซอยไม้ T38",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: โซ่เลื่อยยนต์ ชนิดซอยไม้ T38"
  },
  {
    "id": 70,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP307",
    "name": "โซ่เลื่อยยนต์ ชนิดตัดไม้ T38",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: โซ่เลื่อยยนต์ ชนิดตัดไม้ T38"
  },
  {
    "id": 71,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP308",
    "name": "น้ำมันหยอดโซ่",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: น้ำมันหยอดโซ่"
  },
  {
    "id": 72,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP309",
    "name": "ผงซักผ้า (8 กก)",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ผงซักผ้า (8 กก)"
  },
  {
    "id": 73,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP310",
    "name": "ถุงดำขนาด 24\"x28\"",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถุงดำขนาด 24\"x28\""
  },
  {
    "id": 74,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP311",
    "name": "ถุงดำขนาด 30\"x40\"",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถุงดำขนาด 30\"x40\""
  },
  {
    "id": 75,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP312",
    "name": "กระสอบป่านขนาด 100 กก",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กระสอบป่านขนาด 100 กก"
  },
  {
    "id": 76,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP317",
    "name": "ถุงมือดำแบบยาง",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถุงมือดำแบบยาง"
  },
  {
    "id": 77,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP319",
    "name": "บันไดอะลูมิเนียมขนาด 1.5 ม.",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: บันไดอะลูมิเนียมขนาด 1.5 ม."
  },
  {
    "id": 78,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP320",
    "name": "เลื่อยตัดติ่งไม้แบบต่อด้ามไม้",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: เลื่อยตัดติ่งไม้แบบต่อด้ามไม้"
  },
  {
    "id": 79,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "repair-tools",
    "code": "VSP321",
    "name": "ใบเลื่อยคันธนู ขนาด 24\"",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ใบเลื่อยคันธนู ขนาด 24\""
  },
  {
    "id": 80,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP322",
    "name": "สายน้ำดีต่อสุขภัณฑ์ขนาด 4 หุน ยาว 80-100 ซม.",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: สายน้ำดีต่อสุขภัณฑ์ขนาด 4 หุน ยาว 80-100 ซม."
  },
  {
    "id": 81,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP323",
    "name": "ตะปูคอนกรีตขนาด 2\"",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ตะปูคอนกรีตขนาด 2\""
  },
  {
    "id": 82,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP324",
    "name": "ใบมีดตัดหญ้าขนาด 4\"",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ใบมีดตัดหญ้าขนาด 4\""
  },
  {
    "id": 83,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP325",
    "name": "ปลั๊กไฟฟ้าตัวผู้ชนิดขาแบน",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟฟ้าตัวผู้ชนิดขาแบน"
  },
  {
    "id": 84,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP326",
    "name": "ปลั๊กไฟฟ้าตัวเมียชนิดขาแบน",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟฟ้าตัวเมียชนิดขาแบน"
  },
  {
    "id": 85,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP327",
    "name": "ตะกร้าใส่ของ",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ตะกร้าใส่ของ"
  },
  {
    "id": 86,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP328",
    "name": "โต๊ะเอนกประสงค์",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: โต๊ะเอนกประสงค์"
  },
  {
    "id": 87,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP329",
    "name": "แท่นเทปใส",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แท่นเทปใส"
  },
  {
    "id": 88,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP330",
    "name": "กะละมังสแตนเลส 30 นิ้ว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กะละมังสแตนเลส 30 นิ้ว"
  },
  {
    "id": 89,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP331",
    "name": "ผ้าขนหนูผืนเล็ก",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ผ้าขนหนูผืนเล็ก"
  },
  {
    "id": 90,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP332",
    "name": "ตะกร้าใส่ผ้าอเนกประสงค์",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ตะกร้าใส่ผ้าอเนกประสงค์"
  },
  {
    "id": 91,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP333",
    "name": "พรมดักฝุ่นขนาดใหญ่ Welcome",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: พรมดักฝุ่นขนาดใหญ่ Welcome"
  },
  {
    "id": 92,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP334",
    "name": "ปลอกหมอนสีฟ้า",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ปลอกหมอนสีฟ้า"
  },
  {
    "id": 93,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP335",
    "name": "กุญแจล็อคประตูคอยาว SOLO",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กุญแจล็อคประตูคอยาว SOLO"
  },
  {
    "id": 94,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP336",
    "name": "ถังเก็บความเย็นสี่เหลี่ยมขนาด 10 ลิตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถังเก็บความเย็นสี่เหลี่ยมขนาด 10 ลิตร"
  },
  {
    "id": 95,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP337",
    "name": "พัดลมตั้งพื้นสีขาวขนาด 16 นิ้ว -ยี่ห้อ Panasonic",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: พัดลมตั้งพื้นสีขาวขนาด 16 นิ้ว -ยี่ห้อ Panasonic"
  },
  {
    "id": 96,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP338",
    "name": "ชั้นวางเครื่องมือแพทย์มีล้อสองชั้น",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ชั้นวางเครื่องมือแพทย์มีล้อสองชั้น"
  },
  {
    "id": 97,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP339",
    "name": "เครื่องชั่งน้ำหนักดิจิตอล",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: เครื่องชั่งน้ำหนักดิจิตอล"
  },
  {
    "id": 98,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP340",
    "name": "แฟ้มเสนอเซนต์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มเสนอเซนต์"
  },
  {
    "id": 99,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP341",
    "name": "ถ่านอัลคาไลน์ 2A 1กล่อง -ยี่ห้อ Panasonic",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านอัลคาไลน์ 2A 1กล่อง -ยี่ห้อ Panasonic"
  },
  {
    "id": 100,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP342",
    "name": "ถ่านอัลคาไลน์ 3A 1กล่อง -ยี่ห้อ Panasonic",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านอัลคาไลน์ 3A 1กล่อง -ยี่ห้อ Panasonic"
  },
  {
    "id": 101,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP343",
    "name": "เครื่องเคลือบบัตร Deli E3893 A4",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: เครื่องเคลือบบัตร Deli E3893 A4"
  },
  {
    "id": 102,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP344",
    "name": "แผ่นเคลือบบัตรขนาด A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นเคลือบบัตรขนาด A4"
  },
  {
    "id": 103,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP345",
    "name": "ปลั๊กไฟ 3 ตา 10 เมตร",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟ 3 ตา 10 เมตร"
  },
  {
    "id": 104,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP346",
    "name": "ชุดผ้าปูที่นอน 3.5 ฟุต โทนสีฟ้า(ปลอกหมอนหนุน1 ปลอกหมอนข้าง1 ผ้าปู1 ผ้าห่ม1)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ชุดผ้าปูที่นอน 3.5 ฟุต โทนสีฟ้า(ปลอกหมอนหนุน1 ปลอกหมอนข้าง1 ผ้าปู1 ผ้าห่ม1)"
  },
  {
    "id": 105,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP347",
    "name": "ถ่านขนาด 23 A",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านขนาด 23 A"
  },
  {
    "id": 106,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP348",
    "name": "ปลั๊กไฟฟ้า 5 เมตร",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟฟ้า 5 เมตร"
  },
  {
    "id": 107,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP349",
    "name": "หมึก canon สีดำ",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก canon สีดำ"
  },
  {
    "id": 108,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP350",
    "name": "ซองอังเปา",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองอังเปา"
  },
  {
    "id": 109,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP351",
    "name": "กาว 2หน้าแบบบาง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาว 2หน้าแบบบาง"
  },
  {
    "id": 110,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP352",
    "name": "ประทัด 2000 นัด",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ประทัด 2000 นัด"
  },
  {
    "id": 111,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP353",
    "name": "โคมรังผึ้ง 25 ซม.",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: โคมรังผึ้ง 25 ซม."
  },
  {
    "id": 112,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP354",
    "name": "โคมเต็งลั้งขนาด 12 นิ้ว",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: โคมเต็งลั้งขนาด 12 นิ้ว"
  },
  {
    "id": 113,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP355, VSP1461",
    "name": "กระดาษโปสเตอร์สีแดง 2 หน้า",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์สีแดง 2 หน้า"
  },
  {
    "id": 114,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP356, VSP1462",
    "name": "กระดาษโปสเตอร์สีเหลือง 2 หน้า",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์สีเหลือง 2 หน้า"
  },
  {
    "id": 115,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP357",
    "name": "นาฬิกาแขวนผนัง",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: นาฬิกาแขวนผนัง"
  },
  {
    "id": 116,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP358",
    "name": "กล่องเก็บเอกสาร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กล่องเก็บเอกสาร"
  },
  {
    "id": 117,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP459",
    "name": "คลิปหนีบกระดาษ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปหนีบกระดาษ"
  },
  {
    "id": 118,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP460",
    "name": "กาว 2หน้าแบบบาง (ขนาด 1 นิ้ว)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาว 2หน้าแบบบาง (ขนาด 1 นิ้ว)"
  },
  {
    "id": 119,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP461",
    "name": "กรรไกร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกร"
  },
  {
    "id": 120,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP462, VSP609, VSP665, VSP697, VSP1177, VSP1741",
    "name": "คัตเตอร์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คัตเตอร์"
  },
  {
    "id": 121,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP463",
    "name": "ปากกาไวท์บอร์ด (สีน้ำเงิน)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาไวท์บอร์ด (สีน้ำเงิน)"
  },
  {
    "id": 122,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP464",
    "name": "แผนที่ทวีปเอเซีย (กายภาพ)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผนที่ทวีปเอเซีย (กายภาพ)"
  },
  {
    "id": 123,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP465",
    "name": "แผนที่ทวีปเอเซีย (ภูมิประเทศ)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผนที่ทวีปเอเซีย (ภูมิประเทศ)"
  },
  {
    "id": 124,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP466",
    "name": "แผนที่ทวีปออสเตรเลีย (กายภาพ)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผนที่ทวีปออสเตรเลีย (กายภาพ)"
  },
  {
    "id": 125,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP467",
    "name": "แผนที่ทวีปออสเตรเลีย (ภูมิประเทศ)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผนที่ทวีปออสเตรเลีย (ภูมิประเทศ)"
  },
  {
    "id": 126,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP468",
    "name": "แผนที่ทวีปยุโรป (กายภาพ)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผนที่ทวีปยุโรป (กายภาพ)"
  },
  {
    "id": 127,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP469",
    "name": "แผนที่ทวีปยุโรป (ภูมิประเทศ)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผนที่ทวีปยุโรป (ภูมิประเทศ)"
  },
  {
    "id": 128,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP470",
    "name": "แผนที่ทวีปแอฟริกา (กายภาพ)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผนที่ทวีปแอฟริกา (กายภาพ)"
  },
  {
    "id": 129,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP471",
    "name": "แผนที่ทวีปแอฟริกา (ภูมิประเทศ)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผนที่ทวีปแอฟริกา (ภูมิประเทศ)"
  },
  {
    "id": 130,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP472",
    "name": "หมึกปริ้นเตอร์ Epson (1 ชุด)",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ Epson (1 ชุด)"
  },
  {
    "id": 131,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP473",
    "name": "หมึกปริ้นเตอร์ Canon (1 ชุด)",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ Canon (1 ชุด)"
  },
  {
    "id": 132,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP474",
    "name": "แผนที่จังหวัดหนองบัวลำภู (ภูมิประเทศ)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผนที่จังหวัดหนองบัวลำภู (ภูมิประเทศ)"
  },
  {
    "id": 133,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP475",
    "name": "แผนที่ภาคตะวันออกเฉียงเหนือ (กายภาพ)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผนที่ภาคตะวันออกเฉียงเหนือ (กายภาพ)"
  },
  {
    "id": 134,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP476",
    "name": "กระเบื้องลอนคู่ ตราเพชร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กระเบื้องลอนคู่ ตราเพชร"
  },
  {
    "id": 135,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP477, VSP480",
    "name": "กระดาษการ์ดขาว A4 180 แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษการ์ดขาว A4 180 แกรม"
  },
  {
    "id": 136,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP478",
    "name": "ชุดตัวสปริงเกอร์ขนาด 4-6 หุน แบบ PVC",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ชุดตัวสปริงเกอร์ขนาด 4-6 หุน แบบ PVC"
  },
  {
    "id": 137,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP479",
    "name": "สายยางรดน้ำต้นไม้ 5 หุน (50 เมตร)",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: สายยางรดน้ำต้นไม้ 5 หุน (50 เมตร)"
  },
  {
    "id": 138,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP481",
    "name": "ถ่านขนาด 2A",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านขนาด 2A"
  },
  {
    "id": 139,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP482",
    "name": "แล็กซีนขนาด 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีนขนาด 2 นิ้ว"
  },
  {
    "id": 140,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP483",
    "name": "ลูกบาสสีส้ม B7G3200-2",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกบาสสีส้ม B7G3200-2"
  },
  {
    "id": 141,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP484",
    "name": "เสาอากาศวอลเล่ย์บอล",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เสาอากาศวอลเล่ย์บอล"
  },
  {
    "id": 142,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP485",
    "name": "ยางยืดออกกำลังกาย",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ยางยืดออกกำลังกาย"
  },
  {
    "id": 143,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP486",
    "name": "ลวดเสียบกระดาษ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเสียบกระดาษ"
  },
  {
    "id": 144,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP487, VSP675, VSP854, VSP1258, VSP1362, VSP1515, VSP1706",
    "name": "เชือกฟาง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เชือกฟาง"
  },
  {
    "id": 145,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP488",
    "name": "ลวดเย็บกระดาษเบอร์ 3",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บกระดาษเบอร์ 3"
  },
  {
    "id": 146,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP489",
    "name": "ลวดเย็บเบอร์ 10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บเบอร์ 10"
  },
  {
    "id": 147,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP490",
    "name": "กระดาษกาวย่น 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษกาวย่น 2 นิ้ว"
  },
  {
    "id": 148,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP491",
    "name": "กรวยจราจร PVC 70 ซม",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กรวยจราจร PVC 70 ซม"
  },
  {
    "id": 149,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP492",
    "name": "แผงกั้นจราจร 2 ม.",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: แผงกั้นจราจร 2 ม."
  },
  {
    "id": 150,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP493",
    "name": "โซ่กั้นจราจร 25 ม.",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: โซ่กั้นจราจร 25 ม."
  },
  {
    "id": 151,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP494",
    "name": "แท่งกระบองไฟจราจร 54 ซม",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: แท่งกระบองไฟจราจร 54 ซม"
  },
  {
    "id": 152,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP495",
    "name": "กระบอง รปภ 50 ซม",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กระบอง รปภ 50 ซม"
  },
  {
    "id": 153,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP496",
    "name": "ตู้เก็บกุญแจติดผนัง 20 ดอก",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: ตู้เก็บกุญแจติดผนัง 20 ดอก"
  },
  {
    "id": 154,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP497",
    "name": "แผ่นเคลือบขนาด A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นเคลือบขนาด A4"
  },
  {
    "id": 155,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP498",
    "name": "ปากกา",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกา"
  },
  {
    "id": 156,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP499",
    "name": "กระดาษการ์ดสี ขนาด A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษการ์ดสี ขนาด A4"
  },
  {
    "id": 157,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP500",
    "name": "ไม้บรรทัด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ไม้บรรทัด"
  },
  {
    "id": 158,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP501",
    "name": "แผ่นรองเขียนขนาด A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นรองเขียนขนาด A4"
  },
  {
    "id": 159,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP502",
    "name": "คลิปหนีบกระดาษ เบอร์ 108",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปหนีบกระดาษ เบอร์ 108"
  },
  {
    "id": 160,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP503",
    "name": "แฟ้มเอกสาร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มเอกสาร"
  },
  {
    "id": 161,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP504",
    "name": "ที่เจาะกระดาษ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ที่เจาะกระดาษ"
  },
  {
    "id": 162,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP505",
    "name": "กรรไกร ขนาดกลาง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกร ขนาดกลาง"
  },
  {
    "id": 163,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP506, VSP583, VSP1222",
    "name": "เครื่องเย็บกระดาษเบอร์ 10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเย็บกระดาษเบอร์ 10"
  },
  {
    "id": 164,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP507",
    "name": "ปากกาเคมี ตรา ม้า",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเคมี ตรา ม้า"
  },
  {
    "id": 165,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP508",
    "name": "สีเมจิก 12 สี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สีเมจิก 12 สี"
  },
  {
    "id": 166,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP509",
    "name": "กระดาษชาร์ท",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษชาร์ท"
  },
  {
    "id": 167,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP510",
    "name": "Post-It",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: Post-It"
  },
  {
    "id": 168,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP511",
    "name": "หมึกปริ้นเตอร์ Canon รุ่นG 2010",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ Canon รุ่นG 2010"
  },
  {
    "id": 169,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP512",
    "name": "สมุดเสนอเซ็น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สมุดเสนอเซ็น"
  },
  {
    "id": 170,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP513",
    "name": "แฟ้มรองเขียนเปิดได้",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มรองเขียนเปิดได้"
  },
  {
    "id": 171,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP514, VSP765",
    "name": "คลิปบอร์ดพลาสติก",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปบอร์ดพลาสติก"
  },
  {
    "id": 172,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP515",
    "name": "ที่เย็บกระดาษเบอร์8 พร้อมที่แซะ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ที่เย็บกระดาษเบอร์8 พร้อมที่แซะ"
  },
  {
    "id": 173,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP516",
    "name": "ที่เย็บกระดาษเบอร์10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ที่เย็บกระดาษเบอร์10"
  },
  {
    "id": 174,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP517",
    "name": "ลวดเย็บกระดาษ เบอร์10-1m",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บกระดาษ เบอร์10-1m"
  },
  {
    "id": 175,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP518",
    "name": "ลวดเย็บกระดาษ เบอร์8-1m",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บกระดาษ เบอร์8-1m"
  },
  {
    "id": 176,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP519",
    "name": "ลวดเสียบกระดาษ เบอร์1",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเสียบกระดาษ เบอร์1"
  },
  {
    "id": 177,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP520",
    "name": "แผ่นรองตัดกระดาษ ขนาดA3",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นรองตัดกระดาษ ขนาดA3"
  },
  {
    "id": 178,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP521",
    "name": "กรรไกร ขนาด 6 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกร ขนาด 6 นิ้ว"
  },
  {
    "id": 179,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP522",
    "name": "กรรไกร ขนาด 9 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกร ขนาด 9 นิ้ว"
  },
  {
    "id": 180,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP523",
    "name": "คัตเตอร์ ขนาดเล็ก(1/8ซม.)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คัตเตอร์ ขนาดเล็ก(1/8ซม.)"
  },
  {
    "id": 181,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP524",
    "name": "คัตเตอร์ ขนาดใหญ่(2/10ซม.)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คัตเตอร์ ขนาดใหญ่(2/10ซม.)"
  },
  {
    "id": 182,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP525",
    "name": "กาวลาเท็กซ์ ขนาดกลาง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวลาเท็กซ์ ขนาดกลาง"
  },
  {
    "id": 183,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP526",
    "name": "ที่เย็บกระดาษ (แบบยิงบอร์ด)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ที่เย็บกระดาษ (แบบยิงบอร์ด)"
  },
  {
    "id": 184,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP527",
    "name": "ลวดเย็บกระดาษ เบอร์T-13",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บกระดาษ เบอร์T-13"
  },
  {
    "id": 185,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP528",
    "name": "กาวแท่ง ขนาด 40 กรัม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวแท่ง ขนาด 40 กรัม"
  },
  {
    "id": 186,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP529",
    "name": "ใบมีดคัทเตอร์ ขนาดใหญ่(2*10 ซม.)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ใบมีดคัทเตอร์ ขนาดใหญ่(2*10 ซม.)"
  },
  {
    "id": 187,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP530",
    "name": "ใบมีดคัทเตอร์ ขนาดเล็ก(1*8 ซม.)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ใบมีดคัทเตอร์ ขนาดเล็ก(1*8 ซม.)"
  },
  {
    "id": 188,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP531",
    "name": "กระดาษพิมพ์ภาพถ่าย แบบมันวาว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษพิมพ์ภาพถ่าย แบบมันวาว"
  },
  {
    "id": 189,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP532, VSP574, VSP648",
    "name": "กระดาษการ์ดขาว 180 แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษการ์ดขาว 180 แกรม"
  },
  {
    "id": 190,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP533",
    "name": "ซองครุฑมาตรฐานสีน้ำตาลขยายข้าง ซี4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองครุฑมาตรฐานสีน้ำตาลขยายข้าง ซี4"
  },
  {
    "id": 191,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP534",
    "name": "ซองครุฑมาตรฐานสีน้ำตาลไม่ขยายข้าง ซี4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองครุฑมาตรฐานสีน้ำตาลไม่ขยายข้าง ซี4"
  },
  {
    "id": 192,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP535",
    "name": "แท่นตัดเทปใส(ใหญ่)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แท่นตัดเทปใส(ใหญ่)"
  },
  {
    "id": 193,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP536",
    "name": "เทปใสขนาด3/4 นิ้ว 36 หลา",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใสขนาด3/4 นิ้ว 36 หลา"
  },
  {
    "id": 194,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP537",
    "name": "ลวดเย็บกระดาษ เบอร์ 3-1m",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บกระดาษ เบอร์ 3-1m"
  },
  {
    "id": 195,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP538",
    "name": "เทปกาว 2 หน้าบาง ขนาด1/4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2 หน้าบาง ขนาด1/4"
  },
  {
    "id": 196,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP539",
    "name": "เทปกาว 2 หน้าบาง ขนาด1/2",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2 หน้าบาง ขนาด1/2"
  },
  {
    "id": 197,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "books-learning",
    "code": "VSP540",
    "name": "เทปติดสันหนังสือ ขนาด 1 1/2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปติดสันหนังสือ ขนาด 1 1/2 นิ้ว"
  },
  {
    "id": 198,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP541",
    "name": "พานทองอลูมีเนียม ขนาด 22 ซม.",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: พานทองอลูมีเนียม ขนาด 22 ซม."
  },
  {
    "id": 199,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP542",
    "name": "ผ้ารองพานสีตาดทอง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ผ้ารองพานสีตาดทอง"
  },
  {
    "id": 200,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP543",
    "name": "สันรูดพลาสติก ขนาด 5 มม.",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สันรูดพลาสติก ขนาด 5 มม."
  },
  {
    "id": 201,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP544",
    "name": "สันรูดพลาสติก ขนาด 7 มม.",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สันรูดพลาสติก ขนาด 7 มม."
  },
  {
    "id": 202,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP545",
    "name": "ไม้อัดอิตาลีลายตรง 4 มม.",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ไม้อัดอิตาลีลายตรง 4 มม."
  },
  {
    "id": 203,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP546",
    "name": "เครื่องปั่น Sharp ขนาด 2 ลิตร รุ่นEmc-15",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: เครื่องปั่น Sharp ขนาด 2 ลิตร รุ่นEmc-15"
  },
  {
    "id": 204,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP547",
    "name": "ปุ๋ยน้ำ A ไฮโดรโปนิกส์ 5 ลิตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ปุ๋ยน้ำ A ไฮโดรโปนิกส์ 5 ลิตร"
  },
  {
    "id": 205,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP548",
    "name": "ปุ๋ยน้ำ B ไฮโดรโปนิกส์ 5 ลิตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ปุ๋ยน้ำ B ไฮโดรโปนิกส์ 5 ลิตร"
  },
  {
    "id": 206,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "site-materials",
    "code": "VSP549",
    "name": "จอบ ตราจระเข้ ด้ามเหล็กยาว ขนาด 3 ปอนด์",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: จอบ ตราจระเข้ ด้ามเหล็กยาว ขนาด 3 ปอนด์"
  },
  {
    "id": 207,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP550",
    "name": "กระดาษโฟโต้ผิวมัน 120 แกรม 100 แผ่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ผิวมัน 120 แกรม 100 แผ่น"
  },
  {
    "id": 208,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP551",
    "name": "กระดาษปกสีครีม 120 แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษปกสีครีม 120 แกรม"
  },
  {
    "id": 209,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP552",
    "name": "ปากกาเคมี สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเคมี สีน้ำเงิน"
  },
  {
    "id": 210,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP553",
    "name": "สายปริ้นเตอร์ 5 เมตร",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: สายปริ้นเตอร์ 5 เมตร"
  },
  {
    "id": 211,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP554",
    "name": "กาวแท่ง 35 กรัม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวแท่ง 35 กรัม"
  },
  {
    "id": 212,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP555, VSP605",
    "name": "เทปใสขนาด 1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใสขนาด 1 นิ้ว"
  },
  {
    "id": 213,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP556",
    "name": "กาว 2 หน้าบาง 1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาว 2 หน้าบาง 1 นิ้ว"
  },
  {
    "id": 214,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP557, VSP832",
    "name": "ปากกาไฮไลท์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาไฮไลท์"
  },
  {
    "id": 215,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP558, VSP594, VSP991",
    "name": "ถ่านขนาด AA",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านขนาด AA"
  },
  {
    "id": 216,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP559, VSP992",
    "name": "ถ่านขนาด AAA",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านขนาด AAA"
  },
  {
    "id": 217,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP560",
    "name": "ซองน้ำตาลขนาด A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองน้ำตาลขนาด A4"
  },
  {
    "id": 218,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP561",
    "name": "ซองน้ำตาลขนาด A4 ขยายข้าง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองน้ำตาลขนาด A4 ขยายข้าง"
  },
  {
    "id": 219,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP562",
    "name": "สมุดเซ็นเยี่ยม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สมุดเซ็นเยี่ยม"
  },
  {
    "id": 220,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP563",
    "name": "สมุุดเบอร์ 2",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สมุุดเบอร์ 2"
  },
  {
    "id": 221,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP564",
    "name": "กระดาษโฟโต้ 180 แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ 180 แกรม"
  },
  {
    "id": 222,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP565",
    "name": "ซองจดหมายขาวไม่มีครุฑ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองจดหมายขาวไม่มีครุฑ"
  },
  {
    "id": 223,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP566",
    "name": "แฟ้มขนาด 3 นิ้ว 2 ห่วง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มขนาด 3 นิ้ว 2 ห่วง"
  },
  {
    "id": 224,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP567",
    "name": "เทปโฟม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปโฟม"
  },
  {
    "id": 225,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP568",
    "name": "ลวดเสียบกระดาษ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเสียบกระดาษ"
  },
  {
    "id": 226,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP569",
    "name": "โพสอิท ขนาด3*3นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: โพสอิท ขนาด3*3นิ้ว"
  },
  {
    "id": 227,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP570",
    "name": "โพสอิท ขนาดเส้น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: โพสอิท ขนาดเส้น"
  },
  {
    "id": 228,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP571",
    "name": "หมึกปริ้นเตอร์Canon สีดำ",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์Canon สีดำ"
  },
  {
    "id": 229,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP572",
    "name": "หมึกปริ้นเตอร์Canon เหลือง แดง ฟ้า",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์Canon เหลือง แดง ฟ้า"
  },
  {
    "id": 230,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP573",
    "name": "หมึกปริ้นเตอร์Epson h380 สีดำ",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์Epson h380 สีดำ"
  },
  {
    "id": 231,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP575, VSP581, VSP607, VSP641, VSP680",
    "name": "กระดาษโฟโต้ 180 แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ 180 แกรม"
  },
  {
    "id": 232,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP576",
    "name": "หมึกปริ้นเตอร์ Canon G3010",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ Canon G3010"
  },
  {
    "id": 233,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP577, VSP634, VSP654",
    "name": "ชุดไมค์ช่วยสอน",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ชุดไมค์ช่วยสอน"
  },
  {
    "id": 234,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP578",
    "name": "ปลั๊กไฟขนาด 3 เมตร",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟขนาด 3 เมตร"
  },
  {
    "id": 235,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP579, VSP669",
    "name": "ปลั๊กไฟขนาด 5 เมตร",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟขนาด 5 เมตร"
  },
  {
    "id": 236,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP580",
    "name": "กระดาษ 100 ปอนด์A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ 100 ปอนด์A4"
  },
  {
    "id": 237,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP582",
    "name": "แผ่นเคลือบบัตร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นเคลือบบัตร"
  },
  {
    "id": 238,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP584",
    "name": "เครื่องเย็บกระดาษเบอร์ 35",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเย็บกระดาษเบอร์ 35"
  },
  {
    "id": 239,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP585",
    "name": "ลวดเย็บเบอร์ 10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บเบอร์ 10"
  },
  {
    "id": 240,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP586",
    "name": "ลวดเย็บเบอร์ 35",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บเบอร์ 35"
  },
  {
    "id": 241,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP587",
    "name": "แผ่นรองตัด45*10ซม.",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นรองตัด45*10ซม."
  },
  {
    "id": 242,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP588",
    "name": "กระดาษโน้ต3*3 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโน้ต3*3 นิ้ว"
  },
  {
    "id": 243,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP589",
    "name": "กระดาษโน๊ตเส้น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโน๊ตเส้น"
  },
  {
    "id": 244,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP590",
    "name": "ชุดลำโพง AIWA",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ชุดลำโพง AIWA"
  },
  {
    "id": 245,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP591",
    "name": "เครื่องชงกาแฟ simplus แบบแคปซูล",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: เครื่องชงกาแฟ simplus แบบแคปซูล"
  },
  {
    "id": 246,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP592",
    "name": "ไมค์ลอยคู่",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ไมค์ลอยคู่"
  },
  {
    "id": 247,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP593",
    "name": "ไมค์พร้อมสาย",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ไมค์พร้อมสาย"
  },
  {
    "id": 248,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP598",
    "name": "กล่องใส่เอกสาร ORCA TCB-5 5ชั้น",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: กล่องใส่เอกสาร ORCA TCB-5 5ชั้น"
  },
  {
    "id": 249,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP599, VSP916",
    "name": "แฟ้มเสนอเซ็นต์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มเสนอเซ็นต์"
  },
  {
    "id": 250,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP600",
    "name": "แฟ้มพร้อมไส้ ปกอ่อน A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มพร้อมไส้ ปกอ่อน A4"
  },
  {
    "id": 251,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP601, VSP617, VSP1524",
    "name": "ปากกาลูกลื่น สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่น สีน้ำเงิน"
  },
  {
    "id": 252,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP602",
    "name": "แผ่นรองตัดขนาด A2",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นรองตัดขนาด A2"
  },
  {
    "id": 253,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP603",
    "name": "สติ๊กเกอร์ใส PVC ขนาด A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สติ๊กเกอร์ใส PVC ขนาด A4"
  },
  {
    "id": 254,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP604",
    "name": "ซองน้ำตาล A4 ขยายข้าง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองน้ำตาล A4 ขยายข้าง"
  },
  {
    "id": 255,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP606",
    "name": "กาวสองหน้าบางขนาด 1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้าบางขนาด 1 นิ้ว"
  },
  {
    "id": 256,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP608, VSP645, VSP691",
    "name": "กรรไกร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกร"
  },
  {
    "id": 257,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP610",
    "name": "เทปกาว 3M",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 3M"
  },
  {
    "id": 258,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP611",
    "name": "แล็กซีน คละสี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีน คละสี"
  },
  {
    "id": 259,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP612, VSP1254",
    "name": "เทปกาวย่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาวย่น"
  },
  {
    "id": 260,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP613",
    "name": "เทปกาวสองหน้าบาง 1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาวสองหน้าบาง 1 นิ้ว"
  },
  {
    "id": 261,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP614",
    "name": "เทปใสขนาด 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใสขนาด 2 นิ้ว"
  },
  {
    "id": 262,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP615",
    "name": "แม็กยิงบอร์ด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แม็กยิงบอร์ด"
  },
  {
    "id": 263,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP616",
    "name": "ลูกแม็กซ์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกแม็กซ์"
  },
  {
    "id": 264,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP618",
    "name": "ถ่านอัลคาไลน์ขนาด AA",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านอัลคาไลน์ขนาด AA"
  },
  {
    "id": 265,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP619",
    "name": "ถ่านอัลคาไลน์วิทยุขนาดใหญ่",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านอัลคาไลน์วิทยุขนาดใหญ่"
  },
  {
    "id": 266,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP620",
    "name": "ผ้าต่วน (สีฟ้า และ สีเหลือง อย่างละม้วน)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ผ้าต่วน (สีฟ้า และ สีเหลือง อย่างละม้วน)"
  },
  {
    "id": 267,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP621",
    "name": "แฟ้มเอกสารพร้อมไส้",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มเอกสารพร้อมไส้"
  },
  {
    "id": 268,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP622",
    "name": "กรอบรูปขนาด A4",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กรอบรูปขนาด A4"
  },
  {
    "id": 269,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP623",
    "name": "สติ๊กเกอร์ใสเคลือบปก (50 แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สติ๊กเกอร์ใสเคลือบปก (50 แผ่น)"
  },
  {
    "id": 270,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP624",
    "name": "แล็กซีน 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีน 2 นิ้ว"
  },
  {
    "id": 271,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP625",
    "name": "กระดาษ A4 (Double A)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A4 (Double A)"
  },
  {
    "id": 272,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP626",
    "name": "แผ่นเคลือบ A4 ลามิเนต ยี่ห้อ Elephant",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นเคลือบ A4 ลามิเนต ยี่ห้อ Elephant"
  },
  {
    "id": 273,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP627",
    "name": "กระดาษ A3 (Double A)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A3 (Double A)"
  },
  {
    "id": 274,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP628, VSP636",
    "name": "กระดาษพิมพ์เกียรติบัตร (กรอบทอง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษพิมพ์เกียรติบัตร (กรอบทอง)"
  },
  {
    "id": 275,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP629",
    "name": "กรอบเกียรติบัตร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กรอบเกียรติบัตร"
  },
  {
    "id": 276,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP630, VSP846",
    "name": "ปากกาเน้นคำ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเน้นคำ"
  },
  {
    "id": 277,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP631",
    "name": "ปากกาเขียนกระจก (ฟ้า,ขาว)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเขียนกระจก (ฟ้า,ขาว)"
  },
  {
    "id": 278,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP632, VSP1792",
    "name": "น้ำยาลบคำผิด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: น้ำยาลบคำผิด"
  },
  {
    "id": 279,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP633",
    "name": "สติกเกอร์โน้ต",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สติกเกอร์โน้ต"
  },
  {
    "id": 280,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP635",
    "name": "กระดานคำคม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดานคำคม"
  },
  {
    "id": 281,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP637",
    "name": "ที่เย็บกระดาษ (แบบยิงบอร์ด)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ที่เย็บกระดาษ (แบบยิงบอร์ด)"
  },
  {
    "id": 282,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP638",
    "name": "ลวดยิงบอร์ด เบอร์ T-13",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ลวดยิงบอร์ด เบอร์ T-13"
  },
  {
    "id": 283,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP639",
    "name": "เครื่องเคลือบ ขนาด A4 Deli 3893",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเคลือบ ขนาด A4 Deli 3893"
  },
  {
    "id": 284,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP640",
    "name": "กระดาษเคลือบ A4 Elfen",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษเคลือบ A4 Elfen"
  },
  {
    "id": 285,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP642",
    "name": "กระดาษสติ๊กเกอร์เคลือบใส",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษสติ๊กเกอร์เคลือบใส"
  },
  {
    "id": 286,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP643",
    "name": "แม็กซ์เบอร์ 10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แม็กซ์เบอร์ 10"
  },
  {
    "id": 287,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP644",
    "name": "ลูกแม็กซ์เบอร์ 10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกแม็กซ์เบอร์ 10"
  },
  {
    "id": 288,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP646",
    "name": "กาวสองหน้าบาง 1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้าบาง 1 นิ้ว"
  },
  {
    "id": 289,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP647",
    "name": "กาวสองหน้าหนา ยาว 5 เมตร 3M",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้าหนา ยาว 5 เมตร 3M"
  },
  {
    "id": 290,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP649",
    "name": "บล็อกไม้ลูกบาศก์ 2.5cm X 2.5 cm",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: บล็อกไม้ลูกบาศก์ 2.5cm X 2.5 cm"
  },
  {
    "id": 291,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP650",
    "name": "ชุดเรขาคณิต (ครู)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ชุดเรขาคณิต (ครู)"
  },
  {
    "id": 292,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP651",
    "name": "ชุดวงเวียนสำหรับนักเรียน (วงเวียนดินสอไม้)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ชุดวงเวียนสำหรับนักเรียน (วงเวียนดินสอไม้)"
  },
  {
    "id": 293,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP652",
    "name": "กาวดินน้ำมัน ยี่ห้อ Elephant",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวดินน้ำมัน ยี่ห้อ Elephant"
  },
  {
    "id": 294,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP653",
    "name": "เครื่องตัดกระดาษขนาด A4 (มีไม้บรรทัด)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องตัดกระดาษขนาด A4 (มีไม้บรรทัด)"
  },
  {
    "id": 295,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP655",
    "name": "ชุดเรขาคณิต (รูปทรง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ชุดเรขาคณิต (รูปทรง)"
  },
  {
    "id": 296,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP656",
    "name": "พานธูปเทียนขอขมา (เปิดกรวย)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: พานธูปเทียนขอขมา (เปิดกรวย)"
  },
  {
    "id": 297,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP657, VSP673",
    "name": "ผ้าต่วนสีขาว",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ผ้าต่วนสีขาว"
  },
  {
    "id": 298,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP658",
    "name": "หมึกปริ้นเตอร์ EPSON L3150",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ EPSON L3150"
  },
  {
    "id": 299,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP659",
    "name": "หมึกปริ้นเตอร์ CANON G2010",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ CANON G2010"
  },
  {
    "id": 300,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP660",
    "name": "เสื่อน้ำมันขนาดกว้าง 2 เมตร ยาว 5 เมตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: เสื่อน้ำมันขนาดกว้าง 2 เมตร ยาว 5 เมตร"
  },
  {
    "id": 301,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP661",
    "name": "เครื่องชงกาแฟ Electrolux รุ่น E2CM1-200W",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: เครื่องชงกาแฟ Electrolux รุ่น E2CM1-200W"
  },
  {
    "id": 302,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP662",
    "name": "กระดาษเคลือบ PVC ติดปกสีใส",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษเคลือบ PVC ติดปกสีใส"
  },
  {
    "id": 303,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP663",
    "name": "กระดาษสติ๊กเกอร์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษสติ๊กเกอร์"
  },
  {
    "id": 304,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP664, VSP720, VSP1178, VSP1371, VSP1546, VSP1774, VSP1798",
    "name": "กรรไกร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกร"
  },
  {
    "id": 305,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP666",
    "name": "รีโมตทีวี TLC",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: รีโมตทีวี TLC"
  },
  {
    "id": 306,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP667",
    "name": "ถ่าน AA",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่าน AA"
  },
  {
    "id": 307,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP668",
    "name": "ถ่าน AAA",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่าน AAA"
  },
  {
    "id": 308,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP670",
    "name": "หมึกเครื่องพิมพ์เอกสาร Canon G3010",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกเครื่องพิมพ์เอกสาร Canon G3010"
  },
  {
    "id": 309,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP671",
    "name": "กาวแท่งติดเอกสาร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวแท่งติดเอกสาร"
  },
  {
    "id": 310,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP672",
    "name": "กล่องเอกสารแบบกระดาษ 2 ช่อง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กล่องเอกสารแบบกระดาษ 2 ช่อง"
  },
  {
    "id": 311,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP674",
    "name": "ผ้าต่วนสีแดง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ผ้าต่วนสีแดง"
  },
  {
    "id": 312,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP676",
    "name": "เข็มหมุด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เข็มหมุด"
  },
  {
    "id": 313,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP677",
    "name": "กระดาษกาว 2 หน้า 3M อย่างหนา",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษกาว 2 หน้า 3M อย่างหนา"
  },
  {
    "id": 314,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP678",
    "name": "กระดาษกาว 2 หน้า อย่างบาง ขนาด 1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษกาว 2 หน้า อย่างบาง ขนาด 1 นิ้ว"
  },
  {
    "id": 315,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP679",
    "name": "แล็กซีน ขนาด 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีน ขนาด 2 นิ้ว"
  },
  {
    "id": 316,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP681, VSP1605",
    "name": "หมึก Epson L3150",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก Epson L3150"
  },
  {
    "id": 317,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP682",
    "name": "กาวสองหน้าแบบบาง ขนาด 1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้าแบบบาง ขนาด 1 นิ้ว"
  },
  {
    "id": 318,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP683",
    "name": "กาวสองหน้าแบบบาง ขนาด 1/2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้าแบบบาง ขนาด 1/2 นิ้ว"
  },
  {
    "id": 319,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP684",
    "name": "หมึก Canon G2010",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก Canon G2010"
  },
  {
    "id": 320,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP685",
    "name": "แปรงขัดหัวส้วม แบบด้ามสั้น",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: แปรงขัดหัวส้วม แบบด้ามสั้น"
  },
  {
    "id": 321,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP686",
    "name": "ไม้ถูพื้นดันฝุ่นแบบแห้ง",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ไม้ถูพื้นดันฝุ่นแบบแห้ง"
  },
  {
    "id": 322,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP687",
    "name": "ไม้กวาดน้ำแบบซับน้ำ",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ไม้กวาดน้ำแบบซับน้ำ"
  },
  {
    "id": 323,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP688",
    "name": "ไม้ถูพื้นแบบเปียก",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ไม้ถูพื้นแบบเปียก"
  },
  {
    "id": 324,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP689",
    "name": "ไม้กวาดน้ำแบบพลาสติกด้ามยาว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ไม้กวาดน้ำแบบพลาสติกด้ามยาว"
  },
  {
    "id": 325,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP690",
    "name": "ตะกร้าพลาสติกกลมขนาด 10-15 ลิตร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ตะกร้าพลาสติกกลมขนาด 10-15 ลิตร"
  },
  {
    "id": 326,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP692",
    "name": "ไม้บรรทัดฟุตเหล็ก",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ไม้บรรทัดฟุตเหล็ก"
  },
  {
    "id": 327,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP693",
    "name": "ซองขาว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองขาว"
  },
  {
    "id": 328,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP694",
    "name": "ซองน้ำตาล",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองน้ำตาล"
  },
  {
    "id": 329,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP695",
    "name": "คลิปบอร์ด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปบอร์ด"
  },
  {
    "id": 330,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP696, VSP1022, VSP1292, VSP1585, VSP1622",
    "name": "ปากกาน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาน้ำเงิน"
  },
  {
    "id": 331,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP698",
    "name": "กระดาษโฟโต้",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้"
  },
  {
    "id": 332,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP699",
    "name": "ปากกาไฮไลท์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาไฮไลท์"
  },
  {
    "id": 333,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP700",
    "name": "แม็คเย็บกระดาษ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แม็คเย็บกระดาษ"
  },
  {
    "id": 334,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP701",
    "name": "เทปใสขนาด 1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใสขนาด 1 นิ้ว"
  },
  {
    "id": 335,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP702",
    "name": "สติกโน้ต (แบบ 3X3 - 5 แพ็ค และ แบบยาว - 5 แพ็ค)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สติกโน้ต (แบบ 3X3 - 5 แพ็ค และ แบบยาว - 5 แพ็ค)"
  },
  {
    "id": 336,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP703",
    "name": "ซองน้ำตาล A4 (ขยายข้าง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองน้ำตาล A4 (ขยายข้าง)"
  },
  {
    "id": 337,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP704",
    "name": "กาวแท่งยู้ฮู",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวแท่งยู้ฮู"
  },
  {
    "id": 338,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP705",
    "name": "สมุดเสนอเซ็นต์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สมุดเสนอเซ็นต์"
  },
  {
    "id": 339,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP706",
    "name": "สาย HDMI 2.0 4K ยาว 5 เมตร",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: สาย HDMI 2.0 4K ยาว 5 เมตร"
  },
  {
    "id": 340,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP707",
    "name": "หมึก HP Smart Tank 515 สีดำ",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก HP Smart Tank 515 สีดำ"
  },
  {
    "id": 341,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP708",
    "name": "หมึก HP Smart Tank 515 สีฟ้า และ สีแดง",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก HP Smart Tank 515 สีฟ้า และ สีแดง"
  },
  {
    "id": 342,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP709",
    "name": "หมึก Canon G3010 สีดำ",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก Canon G3010 สีดำ"
  },
  {
    "id": 343,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP710",
    "name": "หมึก Canon G3010 สีฟ้า",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก Canon G3010 สีฟ้า"
  },
  {
    "id": 344,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP711",
    "name": "หมึก Epson L3210 สีดำ",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก Epson L3210 สีดำ"
  },
  {
    "id": 345,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP712",
    "name": "หมึก Epson L3210 สีฟ้า",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก Epson L3210 สีฟ้า"
  },
  {
    "id": 346,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP713",
    "name": "คลิปดำ 2 ขา (50mm) 108",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ 2 ขา (50mm) 108"
  },
  {
    "id": 347,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP714",
    "name": "คลิปดำ 2 ขา (50mm) 110",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ 2 ขา (50mm) 110"
  },
  {
    "id": 348,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP715",
    "name": "แฟ้มสันกว้าง Elephant 120F 3 นิ้ว 2 ห่วง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มสันกว้าง Elephant 120F 3 นิ้ว 2 ห่วง"
  },
  {
    "id": 349,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP716",
    "name": "แฟ้ม Elephant 120F 3 นิ้ว 2 ห่วง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้ม Elephant 120F 3 นิ้ว 2 ห่วง"
  },
  {
    "id": 350,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP717",
    "name": "ลวดเสียบกระดาษ 1kg",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเสียบกระดาษ 1kg"
  },
  {
    "id": 351,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP718",
    "name": "แฟ้ม Elephant 125F 2 นิ้ว 2 ห่วง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้ม Elephant 125F 2 นิ้ว 2 ห่วง"
  },
  {
    "id": 352,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP719",
    "name": "กระดาษการ์ดขาว 150g",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษการ์ดขาว 150g"
  },
  {
    "id": 353,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP721",
    "name": "สติ๊กเกอร์ใสเคลือบปก A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สติ๊กเกอร์ใสเคลือบปก A4"
  },
  {
    "id": 354,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP722",
    "name": "แล็กซีน 1.5นิ้ว สีแดง, สีฟ้า, สีชมภู, สีเหลือง สีละ 2 ม้วน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีน 1.5นิ้ว สีแดง, สีฟ้า, สีชมภู, สีเหลือง สีละ 2 ม้วน"
  },
  {
    "id": 355,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP723",
    "name": "Post-it 3X3",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: Post-it 3X3"
  },
  {
    "id": 356,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP724",
    "name": "คลิปดำ ขนาด 10mm 111",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ ขนาด 10mm 111"
  },
  {
    "id": 357,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP725",
    "name": "ลูกแม็กขนาด (23/15)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกแม็กขนาด (23/15)"
  },
  {
    "id": 358,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP726",
    "name": "หมึกพิมพ์ HP Laser 107A",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกพิมพ์ HP Laser 107A"
  },
  {
    "id": 359,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP727",
    "name": "กาว 2 หน้า บาง 18mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาว 2 หน้า บาง 18mm"
  },
  {
    "id": 360,
    "categorySlug": "office-supplies",
    "subcategorySlug": "personal-care",
    "code": "VSP728",
    "name": "สเปรย์ปรับอากาศ",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: สเปรย์ปรับอากาศ"
  },
  {
    "id": 361,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP729",
    "name": "สติ๊กเกอร์ใส 53X70ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: สติ๊กเกอร์ใส 53X70ซม"
  },
  {
    "id": 362,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP730",
    "name": "ปากกาลูกลื่นสีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่นสีน้ำเงิน"
  },
  {
    "id": 363,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP731",
    "name": "ปากกาลูกลื่นสีแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่นสีแดง"
  },
  {
    "id": 364,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP732",
    "name": "หมึกพิมพ์ HP Laser Jet P1102",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกพิมพ์ HP Laser Jet P1102"
  },
  {
    "id": 365,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP733",
    "name": "เทปลบคำผิด ลิควิดเปเปอร์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปลบคำผิด ลิควิดเปเปอร์"
  },
  {
    "id": 366,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP734",
    "name": "ตะกร้าใส่เอกสารลวดเคลือบพลาสติกแบบมีฝาปิด",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ตะกร้าใส่เอกสารลวดเคลือบพลาสติกแบบมีฝาปิด"
  },
  {
    "id": 367,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP735",
    "name": "ตะกร้าเอกสาร 2 ชั้น",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: ตะกร้าเอกสาร 2 ชั้น"
  },
  {
    "id": 368,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP736",
    "name": "ลวดเสียบกระดาษ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเสียบกระดาษ"
  },
  {
    "id": 369,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP737",
    "name": "ลวดเย็บกระดาษ NO.10 (1แพ็ค-10กล่อง) และ NO.3 (1แพ็ค-3กล่อง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บกระดาษ NO.10 (1แพ็ค-10กล่อง) และ NO.3 (1แพ็ค-3กล่อง)"
  },
  {
    "id": 370,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP738",
    "name": "เทปใสใหม่ขนาด 3/4นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใสใหม่ขนาด 3/4นิ้ว"
  },
  {
    "id": 371,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP739",
    "name": "หมึกเติมแท่นประทับสีน้ำเงิน (แพ็คละ 9 ขวด)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: หมึกเติมแท่นประทับสีน้ำเงิน (แพ็คละ 9 ขวด)"
  },
  {
    "id": 372,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP740",
    "name": "หมึกเติมแท่นประทับสีแดง (แพ็คละ 9 ขวด)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: หมึกเติมแท่นประทับสีแดง (แพ็คละ 9 ขวด)"
  },
  {
    "id": 373,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP741",
    "name": "กระดาษสติ๊กเกอร์สีขาว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษสติ๊กเกอร์สีขาว"
  },
  {
    "id": 374,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP742",
    "name": "กระดาษโฟโต้ A4 180g",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ A4 180g"
  },
  {
    "id": 375,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP743",
    "name": "พลาสติกเคลือบบัตร A4 Laminate",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: พลาสติกเคลือบบัตร A4 Laminate"
  },
  {
    "id": 376,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP744",
    "name": "หมึกพิมพ์ Canon สีดำ G3019",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกพิมพ์ Canon สีดำ G3019"
  },
  {
    "id": 377,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP745",
    "name": "หมึกพิมพ์ Canon สีแดง, สีเหลือง, สีฟ้า G3010",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกพิมพ์ Canon สีแดง, สีเหลือง, สีฟ้า G3010"
  },
  {
    "id": 378,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP746",
    "name": "กระติกน้ำร้อน SHARP ขนาด 2.5 ลิตร",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: กระติกน้ำร้อน SHARP ขนาด 2.5 ลิตร"
  },
  {
    "id": 379,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP747",
    "name": "แฟ้มเสนอเซ็นต์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มเสนอเซ็นต์"
  },
  {
    "id": 380,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP748",
    "name": "ปากกาไวท์บอร์ดหัวกลม moami สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาไวท์บอร์ดหัวกลม moami สีน้ำเงิน"
  },
  {
    "id": 381,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP749",
    "name": "ปากกาไวท์บอร์ดหัวตัด pilot สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาไวท์บอร์ดหัวตัด pilot สีน้ำเงิน"
  },
  {
    "id": 382,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP750",
    "name": "หมึกเติมปากกาไวท์บอร์ด pilot สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: หมึกเติมปากกาไวท์บอร์ด pilot สีน้ำเงิน"
  },
  {
    "id": 383,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP751",
    "name": "ปากกาเน้นข้อความ (ไฮไลท์)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเน้นข้อความ (ไฮไลท์)"
  },
  {
    "id": 384,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP752, VSP840",
    "name": "กรรไกร 7 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกร 7 นิ้ว"
  },
  {
    "id": 385,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP753",
    "name": "คลิปดำ ขนาด 15 mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ ขนาด 15 mm"
  },
  {
    "id": 386,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP754",
    "name": "คลิปดำ ขนาด 19 mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ ขนาด 19 mm"
  },
  {
    "id": 387,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP755",
    "name": "คลิปดำ ขนาด 25 mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ ขนาด 25 mm"
  },
  {
    "id": 388,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "books-learning",
    "code": "VSP756",
    "name": "ทะเบียนหนังสือรับ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ทะเบียนหนังสือรับ"
  },
  {
    "id": 389,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP757",
    "name": "ลูกวอลเลย์บอล Mikasa V300W",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกวอลเลย์บอล Mikasa V300W"
  },
  {
    "id": 390,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP758",
    "name": "ลูกฟุตบอล Molten F5N3400-G",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกฟุตบอล Molten F5N3400-G"
  },
  {
    "id": 391,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP759",
    "name": "ลูกฟุตบอล Molten F9N1510",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกฟุตบอล Molten F9N1510"
  },
  {
    "id": 392,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP760",
    "name": "กระดาษปกขาว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษปกขาว"
  },
  {
    "id": 393,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP761",
    "name": "กระดาษปกสี (ชมพู และ ฟ้า)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษปกสี (ชมพู และ ฟ้า)"
  },
  {
    "id": 394,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP762",
    "name": "เครื่องปั่น Philips HR2221/00",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: เครื่องปั่น Philips HR2221/00"
  },
  {
    "id": 395,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP763",
    "name": "หมึก Brother MFC-L2700D",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก Brother MFC-L2700D"
  },
  {
    "id": 396,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP764",
    "name": "หมึก Brother DCP-T420W (4 สี)",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก Brother DCP-T420W (4 สี)"
  },
  {
    "id": 397,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP766",
    "name": "หมึก Canon 3010 (4 สี)",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก Canon 3010 (4 สี)"
  },
  {
    "id": 398,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP767",
    "name": "โต๊ะปิงปอง GrandSport หนา 15 มล",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: โต๊ะปิงปอง GrandSport หนา 15 มล"
  },
  {
    "id": 399,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP768",
    "name": "ไมโครโฟนมีสายยี่ห้อ Shure SV100",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ไมโครโฟนมีสายยี่ห้อ Shure SV100"
  },
  {
    "id": 400,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP769",
    "name": "ขาตั้งไมค์แบบตั้งสูง 30 ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ขาตั้งไมค์แบบตั้งสูง 30 ซม"
  },
  {
    "id": 401,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP770",
    "name": "สาย HDMI ยาว 20 เมตร",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: สาย HDMI ยาว 20 เมตร"
  },
  {
    "id": 402,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP771",
    "name": "ถ่าน AAA (2ก้อน ต่อแพ็ค)",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่าน AAA (2ก้อน ต่อแพ็ค)"
  },
  {
    "id": 403,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP772",
    "name": "แม่กุญแจใส่รหัส SOLEX TSA 30 mm",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แม่กุญแจใส่รหัส SOLEX TSA 30 mm"
  },
  {
    "id": 404,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP773",
    "name": "แป้งมันสำปะหลัง ขนาด 500 กรัม",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: แป้งมันสำปะหลัง ขนาด 500 กรัม"
  },
  {
    "id": 405,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP774",
    "name": "เชือกฟางม้วนใหญ่",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เชือกฟางม้วนใหญ่"
  },
  {
    "id": 406,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP775",
    "name": "กระดาษชาร์ทขาวเทาแข็ง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษชาร์ทขาวเทาแข็ง"
  },
  {
    "id": 407,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP776",
    "name": "กระดาษโปสเตอร์แข็งสีเหลือง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์แข็งสีเหลือง"
  },
  {
    "id": 408,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP777",
    "name": "ถุงดำใส่ขยะ",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถุงดำใส่ขยะ"
  },
  {
    "id": 409,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP778",
    "name": "กระดาษโปสเตอร์แข็งสีชมพู",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์แข็งสีชมพู"
  },
  {
    "id": 410,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP779",
    "name": "กระดาษโปสเตอร์แข็งสีฟ้า",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์แข็งสีฟ้า"
  },
  {
    "id": 411,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP780",
    "name": "กระดาษโปสเตอร์แข็งสีเขียวเข้ม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์แข็งสีเขียวเข้ม"
  },
  {
    "id": 412,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP781",
    "name": "กระดาษโปสเตอร์แข็งสีแสด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์แข็งสีแสด"
  },
  {
    "id": 413,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP782",
    "name": "กระดาษโปสเตอร์แข็งสีแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์แข็งสีแดง"
  },
  {
    "id": 414,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP783",
    "name": "เชือกขาวแดงทำป้ายห้อยคอ ขนาด 100 เมตร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เชือกขาวแดงทำป้ายห้อยคอ ขนาด 100 เมตร"
  },
  {
    "id": 415,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP784",
    "name": "สีโปสเตอร์รวมสี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สีโปสเตอร์รวมสี"
  },
  {
    "id": 416,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP785",
    "name": "ผ้าขาวบาง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ผ้าขาวบาง"
  },
  {
    "id": 417,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP786",
    "name": "ปากกาเมจิกรวมสี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเมจิกรวมสี"
  },
  {
    "id": 418,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP787",
    "name": "ลูกโป่งสี",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ลูกโป่งสี"
  },
  {
    "id": 419,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP788",
    "name": "ยางวงแดง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ยางวงแดง"
  },
  {
    "id": 420,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP789",
    "name": "จานกระดาษกลม 9 นิ้ว (50 ใบ)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: จานกระดาษกลม 9 นิ้ว (50 ใบ)"
  },
  {
    "id": 421,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP790",
    "name": "แป้งเด็กกระป๋องใหญ่",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แป้งเด็กกระป๋องใหญ่"
  },
  {
    "id": 422,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP791",
    "name": "แผ่นฟิวเจอร์บอร์ด สีดำ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นฟิวเจอร์บอร์ด สีดำ"
  },
  {
    "id": 423,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP792",
    "name": "แผ่นฟิวเจอร์บอร์ด สีแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นฟิวเจอร์บอร์ด สีแดง"
  },
  {
    "id": 424,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP793",
    "name": "ยางรัดผมหลากสี",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ยางรัดผมหลากสี"
  },
  {
    "id": 425,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP794",
    "name": "สีผสมอาหาร สีชมพู",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: สีผสมอาหาร สีชมพู"
  },
  {
    "id": 426,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP795",
    "name": "สีผสมอาหาร สีแดง",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: สีผสมอาหาร สีแดง"
  },
  {
    "id": 427,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP796",
    "name": "สีผสมอาหาร สีเขียว",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: สีผสมอาหาร สีเขียว"
  },
  {
    "id": 428,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP797",
    "name": "สีผสมอาหาร สีเหลือง",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: สีผสมอาหาร สีเหลือง"
  },
  {
    "id": 429,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP798",
    "name": "สีผสมอาหาร สีฟ้า",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: สีผสมอาหาร สีฟ้า"
  },
  {
    "id": 430,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP799",
    "name": "เทปแลคซีนสีเหลืองขนาด 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปแลคซีนสีเหลืองขนาด 2 นิ้ว"
  },
  {
    "id": 431,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP800",
    "name": "เทปแลคซีนสีน้ำเงินขนาด 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปแลคซีนสีน้ำเงินขนาด 2 นิ้ว"
  },
  {
    "id": 432,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP801",
    "name": "เทปแลคซีนสีแดงขนาด 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปแลคซีนสีแดงขนาด 2 นิ้ว"
  },
  {
    "id": 433,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP802",
    "name": "กรอบรูป A4",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กรอบรูป A4"
  },
  {
    "id": 434,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP803",
    "name": "ถ่านอัลคาไลน์ AA",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านอัลคาไลน์ AA"
  },
  {
    "id": 435,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP804",
    "name": "แชมพูล้างรถ 3M ผสมแว็กซ์",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: แชมพูล้างรถ 3M ผสมแว็กซ์"
  },
  {
    "id": 436,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP805",
    "name": "ฟองน้ำล้างรถ",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ฟองน้ำล้างรถ"
  },
  {
    "id": 437,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP806",
    "name": "ผ้าไมโครไฟเบอร์",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ผ้าไมโครไฟเบอร์"
  },
  {
    "id": 438,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP807",
    "name": "น้ำยาล้างกระจก",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: น้ำยาล้างกระจก"
  },
  {
    "id": 439,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP808",
    "name": "น้ำหอมปรับอากาศ Ambipur Car",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: น้ำหอมปรับอากาศ Ambipur Car"
  },
  {
    "id": 440,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP809",
    "name": "น้ำมันเครื่องรถกระบะดีเซล Shell Helix HX8",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: น้ำมันเครื่องรถกระบะดีเซล Shell Helix HX8"
  },
  {
    "id": 441,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP810",
    "name": "หมึกพิมพ์ Brother TN-2380",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกพิมพ์ Brother TN-2380"
  },
  {
    "id": 442,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP811",
    "name": "ขันตักน้ำพลาสติกมีที่จับ",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ขันตักน้ำพลาสติกมีที่จับ"
  },
  {
    "id": 443,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP812",
    "name": "ผ้าเช็ดมือแบบแขวน",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ผ้าเช็ดมือแบบแขวน"
  },
  {
    "id": 444,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP813",
    "name": "สเปรย์ฉีดกำจัดแมลง 600 มล.",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: สเปรย์ฉีดกำจัดแมลง 600 มล."
  },
  {
    "id": 445,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP941, VSP748C",
    "name": "ปากกาไวท์บอร์ดหัวกลม Pilot สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาไวท์บอร์ดหัวกลม Pilot สีน้ำเงิน"
  },
  {
    "id": 446,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP942, VSP750C",
    "name": "หมึกเติมปากกาไวท์บอร์ด pilot สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: หมึกเติมปากกาไวท์บอร์ด pilot สีน้ำเงิน"
  },
  {
    "id": 447,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP814, VSP1498",
    "name": "ไม้รีดน้ำ 24 นิ้ว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ไม้รีดน้ำ 24 นิ้ว"
  },
  {
    "id": 448,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP815",
    "name": "ไม้ม็อบดันฝุ่น 24 นิ้ว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ไม้ม็อบดันฝุ่น 24 นิ้ว"
  },
  {
    "id": 449,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP816",
    "name": "น้ำยาเช็ดกระจกขวดสเปรย์",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: น้ำยาเช็ดกระจกขวดสเปรย์"
  },
  {
    "id": 450,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP817",
    "name": "น้ำยาดันฝุ่น 3800 มล.",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: น้ำยาดันฝุ่น 3800 มล."
  },
  {
    "id": 451,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP818",
    "name": "ฟ้อกกี้ฉีดน้ำ",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ฟ้อกกี้ฉีดน้ำ"
  },
  {
    "id": 452,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP819",
    "name": "แล็กซีนสีแดง 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีนสีแดง 2 นิ้ว"
  },
  {
    "id": 453,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP820",
    "name": "แล็กซีนสีเหลือง 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีนสีเหลือง 2 นิ้ว"
  },
  {
    "id": 454,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP821",
    "name": "แล็กซีนสีฟ้า 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีนสีฟ้า 2 นิ้ว"
  },
  {
    "id": 455,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP822",
    "name": "แล็กซีนสีเขียว 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีนสีเขียว 2 นิ้ว"
  },
  {
    "id": 456,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP823",
    "name": "ลำโพง Sherman 12 นิ้ว สีดำ APS-125",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ลำโพง Sherman 12 นิ้ว สีดำ APS-125"
  },
  {
    "id": 457,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP824",
    "name": "โทรโข่ง TOA Megaphone ER-3215",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: โทรโข่ง TOA Megaphone ER-3215"
  },
  {
    "id": 458,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP825",
    "name": "สายสะพายรางวัลชนะเลิศอันดับหนึ่ง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: สายสะพายรางวัลชนะเลิศอันดับหนึ่ง"
  },
  {
    "id": 459,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP826",
    "name": "สายสะพายรางวัลชนะเลิศรองอันดับหนึ่ง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: สายสะพายรางวัลชนะเลิศรองอันดับหนึ่ง"
  },
  {
    "id": 460,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP827",
    "name": "สายสะพายรางวัลชนะเลิศรองอันดับสอง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: สายสะพายรางวัลชนะเลิศรองอันดับสอง"
  },
  {
    "id": 461,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP828",
    "name": "มงกุฏ",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: มงกุฏ"
  },
  {
    "id": 462,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP829",
    "name": "ป้ายติดเสื้อขนาดเล็ก",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ป้ายติดเสื้อขนาดเล็ก"
  },
  {
    "id": 463,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP830, VSP858",
    "name": "ถ่าน Panasonic AA",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่าน Panasonic AA"
  },
  {
    "id": 464,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP831, VSP1514",
    "name": "ลวดเสียบกระดาษ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเสียบกระดาษ"
  },
  {
    "id": 465,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP833",
    "name": "ที่เจาะรูกระดาษ Aroma",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ที่เจาะรูกระดาษ Aroma"
  },
  {
    "id": 466,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP834, VSP847",
    "name": "ลิ้นแฟ้ม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลิ้นแฟ้ม"
  },
  {
    "id": 467,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP835",
    "name": "หมึก Canon G3010 4สี",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก Canon G3010 4สี"
  },
  {
    "id": 468,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP836",
    "name": "ปากกาเขียนครุภัณฑ์ สีดำ, สีขาว, สีทอง (สีละ 4 แท่ง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเขียนครุภัณฑ์ สีดำ, สีขาว, สีทอง (สีละ 4 แท่ง)"
  },
  {
    "id": 469,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP837, VSP893, VSP1301",
    "name": "ปากกาลูกลื่นสีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่นสีน้ำเงิน"
  },
  {
    "id": 470,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP838",
    "name": "ปลั๊กไฟ 5 เมตร",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟ 5 เมตร"
  },
  {
    "id": 471,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP839",
    "name": "คัตเตอร์เหล็ก",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คัตเตอร์เหล็ก"
  },
  {
    "id": 472,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP841",
    "name": "แฟ้ม 2 ห่วง 3 นิ้วสีดำ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้ม 2 ห่วง 3 นิ้วสีดำ"
  },
  {
    "id": 473,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP842, VSP940",
    "name": "น้ำยาลบความผิด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: น้ำยาลบความผิด"
  },
  {
    "id": 474,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP843",
    "name": "ตะแกรงเหล็ก 3 ชั้น",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: ตะแกรงเหล็ก 3 ชั้น"
  },
  {
    "id": 475,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP844",
    "name": "ซองน้ำตาลไม่ขยายข้าง (ห่อละ 25 ซอง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองน้ำตาลไม่ขยายข้าง (ห่อละ 25 ซอง)"
  },
  {
    "id": 476,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP845",
    "name": "ซองน้ำตาลขยายข้าง (ห่อละ 25 ซอง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองน้ำตาลขยายข้าง (ห่อละ 25 ซอง)"
  },
  {
    "id": 477,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP848",
    "name": "โพสอิทแบบ 3X3",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: โพสอิทแบบ 3X3"
  },
  {
    "id": 478,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP849, VSP1598, VSP1610",
    "name": "โพสอิทแบบเส้น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: โพสอิทแบบเส้น"
  },
  {
    "id": 479,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP850",
    "name": "คลิปดำเบอร์ 112",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำเบอร์ 112"
  },
  {
    "id": 480,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP851",
    "name": "คลิปดำเบอร์ 111",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำเบอร์ 111"
  },
  {
    "id": 481,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP852",
    "name": "คลิปดำเบอร์ 110",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำเบอร์ 110"
  },
  {
    "id": 482,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP853",
    "name": "คลิปดำเบอร์ 109",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำเบอร์ 109"
  },
  {
    "id": 483,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP855",
    "name": "เครื่องเย็บเบอร์ 10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเย็บเบอร์ 10"
  },
  {
    "id": 484,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP856",
    "name": "เครื่องเย็บเบอร์ 3 หรือ HD-50 หลังเต่า",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเย็บเบอร์ 3 หรือ HD-50 หลังเต่า"
  },
  {
    "id": 485,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP857",
    "name": "เครื่องเหลาดินสอ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเหลาดินสอ"
  },
  {
    "id": 486,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP859",
    "name": "ถ่าน Panasonic AAA",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่าน Panasonic AAA"
  },
  {
    "id": 487,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP860",
    "name": "เทปลบคำผิด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปลบคำผิด"
  },
  {
    "id": 488,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP861",
    "name": "กระดาษฟลิปชาร์ท (แพ็คละ 25 แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษฟลิปชาร์ท (แพ็คละ 25 แผ่น)"
  },
  {
    "id": 489,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP862",
    "name": "กระดาษสีสองหน้า คละสี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษสีสองหน้า คละสี"
  },
  {
    "id": 490,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP863",
    "name": "กระดาษขาว 180 แกรม (แพ็คละ 50 แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษขาว 180 แกรม (แพ็คละ 50 แผ่น)"
  },
  {
    "id": 491,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP864",
    "name": "กระดาษกาวสองหน้าบาง 18 มม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษกาวสองหน้าบาง 18 มม"
  },
  {
    "id": 492,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP865",
    "name": "กระดาษชาร์ทแผ่นใหญ่คละสี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษชาร์ทแผ่นใหญ่คละสี"
  },
  {
    "id": 493,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP866",
    "name": "กระดาษกาวสองหน้าหนา 3 เมตร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษกาวสองหน้าหนา 3 เมตร"
  },
  {
    "id": 494,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP867",
    "name": "มือจับประตู PVC เกรด ABS",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: มือจับประตู PVC เกรด ABS"
  },
  {
    "id": 495,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP868",
    "name": "แฟลสไดรฟ์ USB 2.0 32 GB",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: แฟลสไดรฟ์ USB 2.0 32 GB"
  },
  {
    "id": 496,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP869",
    "name": "ปากกาลูกลื่นสีน้ำเงิน 0.7 mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่นสีน้ำเงิน 0.7 mm"
  },
  {
    "id": 497,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP870",
    "name": "ปากกาลูกลื่นสีแดง 0.7 mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่นสีแดง 0.7 mm"
  },
  {
    "id": 498,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP871",
    "name": "กระดาษ AA ขนาด A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ AA ขนาด A4"
  },
  {
    "id": 499,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP872",
    "name": "เครื่องเย็บกระดาษ เบอร์ 3",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเย็บกระดาษ เบอร์ 3"
  },
  {
    "id": 500,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP873",
    "name": "ลวดเย็บกระดาษ เบอร์ 3",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บกระดาษ เบอร์ 3"
  },
  {
    "id": 501,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP874",
    "name": "เครื่องเย็บกระดาษ เบอร์ 10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเย็บกระดาษ เบอร์ 10"
  },
  {
    "id": 502,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP875",
    "name": "กรรไกร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกร"
  },
  {
    "id": 503,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP876",
    "name": "คัตเตอร์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คัตเตอร์"
  },
  {
    "id": 504,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP877",
    "name": "กระดาษชาร์ทสีขาว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษชาร์ทสีขาว"
  },
  {
    "id": 505,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP881",
    "name": "กรอปรูป A4",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กรอปรูป A4"
  },
  {
    "id": 506,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP882",
    "name": "ปากกาลงนาม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลงนาม"
  },
  {
    "id": 507,
    "categorySlug": "office-supplies",
    "subcategorySlug": "personal-care",
    "code": "VSP883",
    "name": "สเปรย์ดับกลิ่นห้อง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: สเปรย์ดับกลิ่นห้อง"
  },
  {
    "id": 508,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP884",
    "name": "กระจกเงาขนาด 40x130 cm",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กระจกเงาขนาด 40x130 cm"
  },
  {
    "id": 509,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP885",
    "name": "น้ำยาลบคำผิด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: น้ำยาลบคำผิด"
  },
  {
    "id": 510,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP886",
    "name": "ชั้นใส่เอกสาร 5 ช่อง",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: ชั้นใส่เอกสาร 5 ช่อง"
  },
  {
    "id": 511,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP887",
    "name": "แผ่นเคลือบ A4 (100 แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นเคลือบ A4 (100 แผ่น)"
  },
  {
    "id": 512,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP888",
    "name": "กระดาษ Photo 180 แกรม (100 แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ Photo 180 แกรม (100 แผ่น)"
  },
  {
    "id": 513,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP889",
    "name": "หมึกพิมพ์ Epson L3150",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกพิมพ์ Epson L3150"
  },
  {
    "id": 514,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP890, VSP911",
    "name": "กรอบรูปอะคริลิคใส",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กรอบรูปอะคริลิคใส"
  },
  {
    "id": 515,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP891",
    "name": "กระดาษโฟโต้ A4 150g",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ A4 150g"
  },
  {
    "id": 516,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP892",
    "name": "แฟ้มเสนองานสีเขียว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มเสนองานสีเขียว"
  },
  {
    "id": 517,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP894",
    "name": "เทปกาว 2 หน้าแบบบาง 1ซม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2 หน้าแบบบาง 1ซม"
  },
  {
    "id": 518,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP895",
    "name": "เทปกาว 2 หน้าแบบหนา (3M)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2 หน้าแบบหนา (3M)"
  },
  {
    "id": 519,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP896",
    "name": "ถุงดำหนา ขนาด 26x34",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถุงดำหนา ขนาด 26x34"
  },
  {
    "id": 520,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP897",
    "name": "กรรไกรตราช้างเบอร์ 7",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกรตราช้างเบอร์ 7"
  },
  {
    "id": 521,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP898",
    "name": "แม็กเย็บกระดาษ No.3",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แม็กเย็บกระดาษ No.3"
  },
  {
    "id": 522,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP899",
    "name": "แม็กเย็บกระดาษ No.10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แม็กเย็บกระดาษ No.10"
  },
  {
    "id": 523,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP900",
    "name": "ถ่านอัลคาไลน์ 2A",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านอัลคาไลน์ 2A"
  },
  {
    "id": 524,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP901",
    "name": "ปลั๊กไฟพ่วง 3 ตา 5 เมตร",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟพ่วง 3 ตา 5 เมตร"
  },
  {
    "id": 525,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP902",
    "name": "กาวลาเท็กซ์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวลาเท็กซ์"
  },
  {
    "id": 526,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP903",
    "name": "ถ่านอัลคาไลน์ 3A",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านอัลคาไลน์ 3A"
  },
  {
    "id": 527,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP904",
    "name": "ถ่านอัลคาไลน์ LR141/2BC",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านอัลคาไลน์ LR141/2BC"
  },
  {
    "id": 528,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP905",
    "name": "ถ่านอัลคาไลน์ LR20(D)",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านอัลคาไลน์ LR20(D)"
  },
  {
    "id": 529,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP906",
    "name": "เทปกาว 2หน้าแบบบาง 1.5ซม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2หน้าแบบบาง 1.5ซม"
  },
  {
    "id": 530,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP907",
    "name": "หมึกพิมพ์ Toner Canon LBP3300",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกพิมพ์ Toner Canon LBP3300"
  },
  {
    "id": 531,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP908",
    "name": "ปากกาสำหรับเซ็นต์ชื่อ สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาสำหรับเซ็นต์ชื่อ สีน้ำเงิน"
  },
  {
    "id": 532,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP909",
    "name": "ชุดบล็อกแม่เหล็กใส 80ชิ้น",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ชุดบล็อกแม่เหล็กใส 80ชิ้น"
  },
  {
    "id": 533,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP910",
    "name": "กราฟสีแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กราฟสีแดง"
  },
  {
    "id": 534,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP912",
    "name": "เครื่องพิมพ์ Canon G2010",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: เครื่องพิมพ์ Canon G2010"
  },
  {
    "id": 535,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP913",
    "name": "ปกใส A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปกใส A4"
  },
  {
    "id": 536,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP914",
    "name": "กระดาษโฟโต้ 180g (100แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ 180g (100แผ่น)"
  },
  {
    "id": 537,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP915",
    "name": "หมึกเติมเครื่องพิมพ์ Canon G2010 (4สี)",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกเติมเครื่องพิมพ์ Canon G2010 (4สี)"
  },
  {
    "id": 538,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP917",
    "name": "สันรูด 5mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สันรูด 5mm"
  },
  {
    "id": 539,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP918",
    "name": "สันรูด 7mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สันรูด 7mm"
  },
  {
    "id": 540,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP919",
    "name": "ปืนยิงบอร์ด Elephant TS-13H",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ปืนยิงบอร์ด Elephant TS-13H"
  },
  {
    "id": 541,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP920",
    "name": "ลูกเย็บปืนยิงบอร์ด",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ลูกเย็บปืนยิงบอร์ด"
  },
  {
    "id": 542,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP921",
    "name": "ปลั๊กไฟ 10 เมตร",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟ 10 เมตร"
  },
  {
    "id": 543,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP922",
    "name": "ปากกาไวท์บอร์ด Pilot คละสี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาไวท์บอร์ด Pilot คละสี"
  },
  {
    "id": 544,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP923",
    "name": "กระดาษเกียรติบัตร A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษเกียรติบัตร A4"
  },
  {
    "id": 545,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP924",
    "name": "แผ่นเคลือบร้อน A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นเคลือบร้อน A4"
  },
  {
    "id": 546,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP925",
    "name": "เครื่องเย็บเบอร์ 10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเย็บเบอร์ 10"
  },
  {
    "id": 547,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP926",
    "name": "กระดาษสติกเกอร์ขาว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษสติกเกอร์ขาว"
  },
  {
    "id": 548,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP927",
    "name": "เครื่องเคลือบร้อน-เย็น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเคลือบร้อน-เย็น"
  },
  {
    "id": 549,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP928",
    "name": "เทปผ้า 2นิ้ว สีขาว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปผ้า 2นิ้ว สีขาว"
  },
  {
    "id": 550,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP929",
    "name": "น้ำมัน 2T 1ลิตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: น้ำมัน 2T 1ลิตร"
  },
  {
    "id": 551,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP930",
    "name": "น้ำมันเครื่องยนต์ดีเซล 1ลิตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: น้ำมันเครื่องยนต์ดีเซล 1ลิตร"
  },
  {
    "id": 552,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP931",
    "name": "น้ำมันเครื่อง Honda 4T 1ลิตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: น้ำมันเครื่อง Honda 4T 1ลิตร"
  },
  {
    "id": 553,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP932, VSP957, VSP990, VSP1024, VSP1290, VSP1300, VSP1791",
    "name": "ดินสอ 2B",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ดินสอ 2B"
  },
  {
    "id": 554,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP933",
    "name": "ปากกาน้ำเงิน 0.7mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาน้ำเงิน 0.7mm"
  },
  {
    "id": 555,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP934",
    "name": "กระดาษโน้ตเล็ก",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโน้ตเล็ก"
  },
  {
    "id": 556,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP935",
    "name": "ลวดเย็บกระดาษ No.10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บกระดาษ No.10"
  },
  {
    "id": 557,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP936, VSP1512",
    "name": "ปากกาเน้นข้อความ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเน้นข้อความ"
  },
  {
    "id": 558,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "repair-tools",
    "code": "VSP937",
    "name": "คีมถอนลวดเย็บกระดาษ",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: คีมถอนลวดเย็บกระดาษ"
  },
  {
    "id": 559,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP938",
    "name": "เครื่องยิงแม็กซ์ยิงบอร์ด",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เครื่องยิงแม็กซ์ยิงบอร์ด"
  },
  {
    "id": 560,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP939",
    "name": "เทปลบความผิด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปลบความผิด"
  },
  {
    "id": 561,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP941, VSP1804",
    "name": "ผ้าต่วน สีดำ",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ผ้าต่วน สีดำ"
  },
  {
    "id": 562,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP942, VSP1724, VSP1805",
    "name": "ผ้าต่วน สีขาว",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ผ้าต่วน สีขาว"
  },
  {
    "id": 563,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP943",
    "name": "กระสอบป่านขนาด 25x40 นิ้ว",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กระสอบป่านขนาด 25x40 นิ้ว"
  },
  {
    "id": 564,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP944",
    "name": "ลูกแบดมินตัน Yonex as-05",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกแบดมินตัน Yonex as-05"
  },
  {
    "id": 565,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "site-materials",
    "code": "VSP945",
    "name": "ปูนขาว 25 กก",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ปูนขาว 25 กก"
  },
  {
    "id": 566,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP946",
    "name": "ตาข่ายวอลเล่ห์บอลมาราธอน MV111",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ตาข่ายวอลเล่ห์บอลมาราธอน MV111"
  },
  {
    "id": 567,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP947",
    "name": "กระดาษกุดจี่ สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษกุดจี่ สีน้ำเงิน"
  },
  {
    "id": 568,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP948",
    "name": "ผ้าแพร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ผ้าแพร"
  },
  {
    "id": 569,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP949",
    "name": "เชือกโพลี",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เชือกโพลี"
  },
  {
    "id": 570,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP950",
    "name": "ตาข่ายตะกร้อมาราธอน MN702",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ตาข่ายตะกร้อมาราธอน MN702"
  },
  {
    "id": 571,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP951",
    "name": "ลูกตะกร้อมาราธอน MT909",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกตะกร้อมาราธอน MT909"
  },
  {
    "id": 572,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP952",
    "name": "ลูกตะกร้อมาราธอน MT908",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกตะกร้อมาราธอน MT908"
  },
  {
    "id": 573,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP953",
    "name": "เทปใส 3/4 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใส 3/4 นิ้ว"
  },
  {
    "id": 574,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP954",
    "name": "กระดาษโน้ต Post-It 3X#",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโน้ต Post-It 3X#"
  },
  {
    "id": 575,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP955",
    "name": "ปากกาดำ LANCER",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาดำ LANCER"
  },
  {
    "id": 576,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP956",
    "name": "กาวสองหน้า แบบบาง 18 มม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้า แบบบาง 18 มม"
  },
  {
    "id": 577,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP958",
    "name": "ซองขาว (500 ซอง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองขาว (500 ซอง)"
  },
  {
    "id": 578,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP959",
    "name": "ชั้นเอกสาร 5 ชั้น สีฟ้าอ่อน",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: ชั้นเอกสาร 5 ชั้น สีฟ้าอ่อน"
  },
  {
    "id": 579,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP960",
    "name": "ช่องใส่แฟ้ม 2 ช่อง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ช่องใส่แฟ้ม 2 ช่อง"
  },
  {
    "id": 580,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP961",
    "name": "คลิปบอร์ด (แผ่นรองเขียน) A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปบอร์ด (แผ่นรองเขียน) A4"
  },
  {
    "id": 581,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP962",
    "name": "กระดาษโฟโต้ A4 150g (50แผ่น/แพ็ค)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ A4 150g (50แผ่น/แพ็ค)"
  },
  {
    "id": 582,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP963",
    "name": "แผ่นพลาสติกเคลือบบัตร A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นพลาสติกเคลือบบัตร A4"
  },
  {
    "id": 583,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP964",
    "name": "ลวดเย็บ No.10 MAX",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บ No.10 MAX"
  },
  {
    "id": 584,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP965",
    "name": "เทปกาวสองหน้า 3/4 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาวสองหน้า 3/4 นิ้ว"
  },
  {
    "id": 585,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP966",
    "name": "ลวดเสียบกระดาษ 1,000 กรัม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเสียบกระดาษ 1,000 กรัม"
  },
  {
    "id": 586,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP967",
    "name": "แฟ้มกระดุมขนาด 32X23 ซม สีเหลือง-5 โหล สีแดง, สีเขียว, สีม่วง, สีส้ม, สีชมพู, สีใส, สีฟ้า และ สีน้ำเงิน-อย่างละ 2 โหล",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มกระดุมขนาด 32X23 ซม สีเหลือง-5 โหล สีแดง, สีเขียว, สีม่วง, สีส้ม, สีชมพู, สีใส, สีฟ้า และ สีน้ำเงิน-อย่างละ 2 โหล"
  },
  {
    "id": 587,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP968",
    "name": "สก๊อตเทปใสขนาด 3/4 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สก๊อตเทปใสขนาด 3/4 นิ้ว"
  },
  {
    "id": 588,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP969",
    "name": "กระดาษสติกเกอร์ขาวด้าน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษสติกเกอร์ขาวด้าน"
  },
  {
    "id": 589,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP970",
    "name": "ปากกาเคมี 2 หัว ตราม้า สีแดง, สีน้ำเงิน และสีดำ อย่างละ 2 กล่อง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเคมี 2 หัว ตราม้า สีแดง, สีน้ำเงิน และสีดำ อย่างละ 2 กล่อง"
  },
  {
    "id": 590,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP971",
    "name": "แล็กซีน สีขาวและสีดำ 2 นิ้ว อย่างละ 6 ม้วน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีน สีขาวและสีดำ 2 นิ้ว อย่างละ 6 ม้วน"
  },
  {
    "id": 591,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP972",
    "name": "แล็กซีน สีเขียว, สีชมพู และสีน้ำเงิน 2 นิ้ว อย่างละ 4 ม้วน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีน สีเขียว, สีชมพู และสีน้ำเงิน 2 นิ้ว อย่างละ 4 ม้วน"
  },
  {
    "id": 592,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP973",
    "name": "กาวแท่งใสขนาด 11 มม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวแท่งใสขนาด 11 มม"
  },
  {
    "id": 593,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP974",
    "name": "กาวแท่งใสขนาด 7 มม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวแท่งใสขนาด 7 มม"
  },
  {
    "id": 594,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP975",
    "name": "ริบบิ้นสำเร็จรูป (โบว์รูด) ติดของขวัญ ขนาดกว้าง 5 ซม (10ชิ้นต่อแพ็ค)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ริบบิ้นสำเร็จรูป (โบว์รูด) ติดของขวัญ ขนาดกว้าง 5 ซม (10ชิ้นต่อแพ็ค)"
  },
  {
    "id": 595,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP976",
    "name": "ริบบิ้นสำเร็จรูป (โบว์รูด) ติดของขวัญ ขนาดกว้าง 7 ซม (10ชิ้นต่อแพ็ค)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ริบบิ้นสำเร็จรูป (โบว์รูด) ติดของขวัญ ขนาดกว้าง 7 ซม (10ชิ้นต่อแพ็ค)"
  },
  {
    "id": 596,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP977",
    "name": "กล่องพลาสติดขนาด 100 ลิตร สีดำ",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กล่องพลาสติดขนาด 100 ลิตร สีดำ"
  },
  {
    "id": 597,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP978",
    "name": "กล่องพลาสติดขนาด 300 ลิตร สีกากี",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กล่องพลาสติดขนาด 300 ลิตร สีกากี"
  },
  {
    "id": 598,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP979",
    "name": "แฟ้มเอกสารขนาด 3นิ้ว ตราช้าง สีดำ A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มเอกสารขนาด 3นิ้ว ตราช้าง สีดำ A4"
  },
  {
    "id": 599,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP980",
    "name": "ผงซักฟอก ขนาด 8,000 กรัม",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ผงซักฟอก ขนาด 8,000 กรัม"
  },
  {
    "id": 600,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP981",
    "name": "ปอกแขนสารวัตรนักเรียน",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ปอกแขนสารวัตรนักเรียน"
  },
  {
    "id": 601,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP982",
    "name": "ออดกระดิ่งประตูไร้สายกันน้ำ แบบ 1 ปุ่ม 2 ตัวรับสัญญาณ Type B",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ออดกระดิ่งประตูไร้สายกันน้ำ แบบ 1 ปุ่ม 2 ตัวรับสัญญาณ Type B"
  },
  {
    "id": 602,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP983",
    "name": "หมึกเครื่องพิมพ์เอกสาร Epson L13150",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกเครื่องพิมพ์เอกสาร Epson L13150"
  },
  {
    "id": 603,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP984",
    "name": "ชั้นวางเอกสาร ขนาด 3 ช่อง",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: ชั้นวางเอกสาร ขนาด 3 ช่อง"
  },
  {
    "id": 604,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP985",
    "name": "แท่นประทับหมึก แดง/น้ำเงิน อย่างละ 2 อัน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แท่นประทับหมึก แดง/น้ำเงิน อย่างละ 2 อัน"
  },
  {
    "id": 605,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP986",
    "name": "ปากกาลูกลื่นน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่นน้ำเงิน"
  },
  {
    "id": 606,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP987",
    "name": "ปากกาลูกลื่นแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่นแดง"
  },
  {
    "id": 607,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP988",
    "name": "หมึกเครื่องพิมพ์เอกสาร HP Laser MFP 137fnw",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกเครื่องพิมพ์เอกสาร HP Laser MFP 137fnw"
  },
  {
    "id": 608,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP989",
    "name": "เทปใส ขนาด 1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใส ขนาด 1 นิ้ว"
  },
  {
    "id": 609,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP993",
    "name": "ป้ายสามเหลี่ยมอะคริลิกขนาด 30X10 CM",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ป้ายสามเหลี่ยมอะคริลิกขนาด 30X10 CM"
  },
  {
    "id": 610,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP994",
    "name": "ลูกบาสเกตบอล Molten B7G3850",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกบาสเกตบอล Molten B7G3850"
  },
  {
    "id": 611,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP995",
    "name": "ทีมเทรนเนอร์ดีสโตน FBT",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ทีมเทรนเนอร์ดีสโตน FBT"
  },
  {
    "id": 612,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP996",
    "name": "ตาข่ายแบดมินตัน FBT BT002",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ตาข่ายแบดมินตัน FBT BT002"
  },
  {
    "id": 613,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP997",
    "name": "ลูกแบดมินตัน Yonex Mavis 350",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกแบดมินตัน Yonex Mavis 350"
  },
  {
    "id": 614,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP998",
    "name": "กระดาษโฟโต้ 150g",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ 150g"
  },
  {
    "id": 615,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP999",
    "name": "ดินสอกด 0.3",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ดินสอกด 0.3"
  },
  {
    "id": 616,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1000",
    "name": "ไส้ดินสอกด 0.3",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ไส้ดินสอกด 0.3"
  },
  {
    "id": 617,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1001",
    "name": "โพสอิท ขนาด 3X1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: โพสอิท ขนาด 3X1 นิ้ว"
  },
  {
    "id": 618,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1002",
    "name": "ถุงมือแบบยางสีดำ",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถุงมือแบบยางสีดำ"
  },
  {
    "id": 619,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1003",
    "name": "สก็อตไบร์ท 3M",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: สก็อตไบร์ท 3M"
  },
  {
    "id": 620,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1004",
    "name": "หน้ากากอนามัย",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: หน้ากากอนามัย"
  },
  {
    "id": 621,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1005",
    "name": "รองเท้าบูท No. 9.5, 10, 10.5 เบอร์ละ 2 คู่",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: รองเท้าบูท No. 9.5, 10, 10.5 เบอร์ละ 2 คู่"
  },
  {
    "id": 622,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1006",
    "name": "พานลาวสีทอง ขนาด 14 ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: พานลาวสีทอง ขนาด 14 ซม"
  },
  {
    "id": 623,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1007",
    "name": "แท่งโฟมปักดอกไม้ ขนาด10.5X100X8.5ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แท่งโฟมปักดอกไม้ ขนาด10.5X100X8.5ซม"
  },
  {
    "id": 624,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1008",
    "name": "ธงชาติขนาด 60X90 ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงชาติขนาด 60X90 ซม"
  },
  {
    "id": 625,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1009",
    "name": "ดอกมะลิปลอมสี (ถุงละ 100 ดอก)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ดอกมะลิปลอมสี (ถุงละ 100 ดอก)"
  },
  {
    "id": 626,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1010",
    "name": "โฟมพุ่มดอกบัว ขนาด 7 นิ้ว",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: โฟมพุ่มดอกบัว ขนาด 7 นิ้ว"
  },
  {
    "id": 627,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1011",
    "name": "ลูกแม็กเบอร์ 3",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกแม็กเบอร์ 3"
  },
  {
    "id": 628,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1012",
    "name": "ลูกแม็กเบอร์ 10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกแม็กเบอร์ 10"
  },
  {
    "id": 629,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1013",
    "name": "แม็กเย็บกระดาษเบอร์ 10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แม็กเย็บกระดาษเบอร์ 10"
  },
  {
    "id": 630,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1014",
    "name": "เข็มหมุด (กล่องละ 400 ชิ้น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เข็มหมุด (กล่องละ 400 ชิ้น)"
  },
  {
    "id": 631,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1015",
    "name": "กระดาษ A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A4"
  },
  {
    "id": 632,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1016",
    "name": "กระดาษปกคละสี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษปกคละสี"
  },
  {
    "id": 633,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1017",
    "name": "แล็กซีนขนาด 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีนขนาด 2 นิ้ว"
  },
  {
    "id": 634,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1018",
    "name": "แผ่นรองตัดกระดาษ A3",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นรองตัดกระดาษ A3"
  },
  {
    "id": 635,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1019",
    "name": "เทปโฟมกาวสองหน้า 3M ยาว 5 เมตร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปโฟมกาวสองหน้า 3M ยาว 5 เมตร"
  },
  {
    "id": 636,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1020",
    "name": "ลวดขาวเบอร์ 24",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดขาวเบอร์ 24"
  },
  {
    "id": 637,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1021",
    "name": "หมึกเติมแท่นประทับสีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: หมึกเติมแท่นประทับสีน้ำเงิน"
  },
  {
    "id": 638,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1023",
    "name": "ปากกาแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาแดง"
  },
  {
    "id": 639,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1025",
    "name": "กระดาษ A3",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A3"
  },
  {
    "id": 640,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1026",
    "name": "ซอง A3 ขยายข้าง (แพ็คละ 50ซอง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซอง A3 ขยายข้าง (แพ็คละ 50ซอง)"
  },
  {
    "id": 641,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1027",
    "name": "กรวยจราจร PVC ขนาด 70 ซม มีแถบสะท้อนแสง",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กรวยจราจร PVC ขนาด 70 ซม มีแถบสะท้อนแสง"
  },
  {
    "id": 642,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1028",
    "name": "โซ่พลาสติกกั้นจราจร ขนาด 6mm ยาว 25 ม. สีแดง-ขาว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: โซ่พลาสติกกั้นจราจร ขนาด 6mm ยาว 25 ม. สีแดง-ขาว"
  },
  {
    "id": 643,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1029",
    "name": "ซองใส่แฟ้ม 3 ช่อง (สีน้ำเงิน)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองใส่แฟ้ม 3 ช่อง (สีน้ำเงิน)"
  },
  {
    "id": 644,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1030, VSP1520",
    "name": "เทปใสขนาด 1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใสขนาด 1 นิ้ว"
  },
  {
    "id": 645,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1031",
    "name": "ปากกาครุภัณฑ์ สีดำ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาครุภัณฑ์ สีดำ"
  },
  {
    "id": 646,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1032",
    "name": "ปากกาครุภัณฑ์ สีขาว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาครุภัณฑ์ สีขาว"
  },
  {
    "id": 647,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1033",
    "name": "ปากกาครุภัณฑ์ สีทอง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาครุภัณฑ์ สีทอง"
  },
  {
    "id": 648,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1034",
    "name": "เครื่องคิดเลข CASIO DX-12B สีดำ",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: เครื่องคิดเลข CASIO DX-12B สีดำ"
  },
  {
    "id": 649,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1035",
    "name": "แท่นประทับสีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แท่นประทับสีน้ำเงิน"
  },
  {
    "id": 650,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1036",
    "name": "สาย HDMI ขนาดยาว 5 ม.",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: สาย HDMI ขนาดยาว 5 ม."
  },
  {
    "id": 651,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1087",
    "name": "Roll up สีขาว ขนาด 80X200",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: Roll up สีขาว ขนาด 80X200"
  },
  {
    "id": 652,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1088",
    "name": "แฟ้มเอกสาร Elephant 3 ห่วง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มเอกสาร Elephant 3 ห่วง"
  },
  {
    "id": 653,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP1089",
    "name": "ผ้าต่วนสีฟ้า",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ผ้าต่วนสีฟ้า"
  },
  {
    "id": 654,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1090, VSP1363",
    "name": "เข็มหมุด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เข็มหมุด"
  },
  {
    "id": 655,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1091",
    "name": "แล็กซีน 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีน 2 นิ้ว"
  },
  {
    "id": 656,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP1092",
    "name": "ตะกร้าเก็บเอกสารไม่มีฝาปิด",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ตะกร้าเก็บเอกสารไม่มีฝาปิด"
  },
  {
    "id": 657,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1093",
    "name": "หมึกปริ้นต์ Canon 2010 สีแดง",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นต์ Canon 2010 สีแดง"
  },
  {
    "id": 658,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1094",
    "name": "หมึกปริ้นต์ Canon 2010 สีเหลือง",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นต์ Canon 2010 สีเหลือง"
  },
  {
    "id": 659,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1095",
    "name": "หมึกปริ้นต์ Canon 2010 สีน้ำเงิน",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นต์ Canon 2010 สีน้ำเงิน"
  },
  {
    "id": 660,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1096",
    "name": "หมึกปริ้นต์ Canon 2010 สีดำ",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นต์ Canon 2010 สีดำ"
  },
  {
    "id": 661,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP1097",
    "name": "ชุดกุญแจ 4 ชุด",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ชุดกุญแจ 4 ชุด"
  },
  {
    "id": 662,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1140",
    "name": "ถุงเท้าขาวแบบยาว ผู้หญิง (ขาวล้วน)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ถุงเท้าขาวแบบยาว ผู้หญิง (ขาวล้วน)"
  },
  {
    "id": 663,
    "categorySlug": "office-supplies",
    "subcategorySlug": "personal-care",
    "code": "VSP1141",
    "name": "กิ๊บดำติดผม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กิ๊บดำติดผม"
  },
  {
    "id": 664,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1142",
    "name": "กระดาษโฟโต้ 220 แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ 220 แกรม"
  },
  {
    "id": 665,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1143",
    "name": "ปืนกาวขนาด 11 มิลลิเมตร 100 วัตต์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปืนกาวขนาด 11 มิลลิเมตร 100 วัตต์"
  },
  {
    "id": 666,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1144",
    "name": "สีอะคริลิคสีขาว ,เหลือง, แดง, น้ำเงิน, เขียวและดำขนาด 20 มิลลิลิตร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สีอะคริลิคสีขาว ,เหลือง, แดง, น้ำเงิน, เขียวและดำขนาด 20 มิลลิลิตร"
  },
  {
    "id": 667,
    "categorySlug": "office-supplies",
    "subcategorySlug": "personal-care",
    "code": "VSP1145",
    "name": "ครีมหนีบห่วงตะขอ 5 นิ้ว",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ครีมหนีบห่วงตะขอ 5 นิ้ว"
  },
  {
    "id": 668,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1146",
    "name": "เครื่องเป่าลมร้อนขนาด 2000 วัตต์",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: เครื่องเป่าลมร้อนขนาด 2000 วัตต์"
  },
  {
    "id": 669,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1147",
    "name": "พวงกุญแจเปล่ามีโซ่พร้อมแหวน",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: พวงกุญแจเปล่ามีโซ่พร้อมแหวน"
  },
  {
    "id": 670,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1148",
    "name": "พวงกุญแจตะขอก้ามปูพร้อมโซ่",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: พวงกุญแจตะขอก้ามปูพร้อมโซ่"
  },
  {
    "id": 671,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1149",
    "name": "ที่แขวนพวงกุญแจไม้สองชั้น",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ที่แขวนพวงกุญแจไม้สองชั้น"
  },
  {
    "id": 672,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1150",
    "name": "ถุงแก้วใส OPP ขนาด 10×14 เซนติเมตร จำนวนแพ็คละ 100 ถุง",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ถุงแก้วใส OPP ขนาด 10×14 เซนติเมตร จำนวนแพ็คละ 100 ถุง"
  },
  {
    "id": 673,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1151",
    "name": "ขาตั้งพวงกุญแจสีขาวสูง 30 เซนติเมตร",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขาตั้งพวงกุญแจสีขาวสูง 30 เซนติเมตร"
  },
  {
    "id": 674,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1152",
    "name": "เชือกป่านขนาด 2 มิลลิเมตรม้วนละ100เมตร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เชือกป่านขนาด 2 มิลลิเมตรม้วนละ100เมตร"
  },
  {
    "id": 675,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1153",
    "name": "เส้นเอ็นใสเบอร์ 7 ขนาด 0.7 มิลลิเมตร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เส้นเอ็นใสเบอร์ 7 ขนาด 0.7 มิลลิเมตร"
  },
  {
    "id": 676,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1154",
    "name": "กระดาษ A4 สีน้ำตาลขนาด 100 แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A4 สีน้ำตาลขนาด 100 แกรม"
  },
  {
    "id": 677,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1155",
    "name": "กระดาษการ์ดขาว A4 ขนาด 120 แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษการ์ดขาว A4 ขนาด 120 แกรม"
  },
  {
    "id": 678,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1156",
    "name": "กระดาษโฟโต้ A4 ขนาด 150แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ A4 ขนาด 150แกรม"
  },
  {
    "id": 679,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1157",
    "name": "กระดาษ A4 สีขาว 80 แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A4 สีขาว 80 แกรม"
  },
  {
    "id": 680,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1158",
    "name": "กาวสองหน้าแบบบางขนาด 18 มิลลิเมตร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้าแบบบางขนาด 18 มิลลิเมตร"
  },
  {
    "id": 681,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1159",
    "name": "กาวสองหน้าแบบหนาขนาด 21 มิลลิเมตร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้าแบบหนาขนาด 21 มิลลิเมตร"
  },
  {
    "id": 682,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1160",
    "name": "ฟิวเจอร์บอร์ดขนาด 80×65 เซนติเมตร สีน้ำเงิน ชุดละ 5 แผ่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ฟิวเจอร์บอร์ดขนาด 80×65 เซนติเมตร สีน้ำเงิน ชุดละ 5 แผ่น"
  },
  {
    "id": 683,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP1161",
    "name": "ฟิวเจอร์บอร์ดขนาด 80×65 เซนติเมตร สีขาว ชุดละ 5 แผ่น",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ฟิวเจอร์บอร์ดขนาด 80×65 เซนติเมตร สีขาว ชุดละ 5 แผ่น"
  },
  {
    "id": 684,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1162",
    "name": "กรรไกรขนาด 7 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกรขนาด 7 นิ้ว"
  },
  {
    "id": 685,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1163",
    "name": "กาวแท่งขนาด 11 มิลลิเมตร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวแท่งขนาด 11 มิลลิเมตร"
  },
  {
    "id": 686,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1164",
    "name": "เมล็ดพันธุ์ผักสลัดเรดโอ๊ค",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: เมล็ดพันธุ์ผักสลัดเรดโอ๊ค"
  },
  {
    "id": 687,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1165",
    "name": "เมล็ดพันธุ์ผักสลัดกรีนโอ๊ค",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: เมล็ดพันธุ์ผักสลัดกรีนโอ๊ค"
  },
  {
    "id": 688,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1166",
    "name": "เมล็ดพันธุ์ขึ้นช่าย",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: เมล็ดพันธุ์ขึ้นช่าย"
  },
  {
    "id": 689,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1167",
    "name": "ฟองน้ำปลูกผักไฮโดรโปนิกส์",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ฟองน้ำปลูกผักไฮโดรโปนิกส์"
  },
  {
    "id": 690,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1168",
    "name": "ปุ๋ยน้ำ AB ไฮโดรโปนิกส์ 10 ลิตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ปุ๋ยน้ำ AB ไฮโดรโปนิกส์ 10 ลิตร"
  },
  {
    "id": 691,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1169",
    "name": "ตะกร้าไม้สานมีหูหิ้ว",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ตะกร้าไม้สานมีหูหิ้ว"
  },
  {
    "id": 692,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1170",
    "name": "ตะกร้าไม้สานขนาด 30×20×7 เซนติเมตร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ตะกร้าไม้สานขนาด 30×20×7 เซนติเมตร"
  },
  {
    "id": 693,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1171",
    "name": "ฉากฟิวเจอร์บอร์ดสีขาว 1 แผ่น ขนาด 60×180 เซนติเมตร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ฉากฟิวเจอร์บอร์ดสีขาว 1 แผ่น ขนาด 60×180 เซนติเมตร"
  },
  {
    "id": 694,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1172",
    "name": "ฉากฟิวเจอร์บอร์ดสีเขียว 1 แผ่น ขนาด 60×180 เซนติเมตร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ฉากฟิวเจอร์บอร์ดสีเขียว 1 แผ่น ขนาด 60×180 เซนติเมตร"
  },
  {
    "id": 695,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1173",
    "name": "ริบบิ้นผ้าแก้วสีฟ้า กว้าง 4 ซม ยาว 10 หลา",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ริบบิ้นผ้าแก้วสีฟ้า กว้าง 4 ซม ยาว 10 หลา"
  },
  {
    "id": 696,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1174",
    "name": "ริบบิ้นผ้าแก้วสีขาว กว้าง 4 ซม ยาว 10 หลา",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ริบบิ้นผ้าแก้วสีขาว กว้าง 4 ซม ยาว 10 หลา"
  },
  {
    "id": 697,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1175",
    "name": "ผังโครงงานแบบสติกเกอร์บอร์ดสามพับ ขนาด 60×120×60",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ผังโครงงานแบบสติกเกอร์บอร์ดสามพับ ขนาด 60×120×60"
  },
  {
    "id": 698,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1176",
    "name": "กระดาษโฟโต้กึ่งมันกึ่งด้าน หนา 260 แกรม A4 (20 แผ่นต่อแพ็ค)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้กึ่งมันกึ่งด้าน หนา 260 แกรม A4 (20 แผ่นต่อแพ็ค)"
  },
  {
    "id": 699,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1179",
    "name": "กาวสองหน้าแบบบางกว้าง 18 มม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้าแบบบางกว้าง 18 มม"
  },
  {
    "id": 700,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1180",
    "name": "แผ่นเคลือบขนาด A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นเคลือบขนาด A4"
  },
  {
    "id": 701,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1181",
    "name": "ไก่ยางของเล่น 19เซนติเมตร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ไก่ยางของเล่น 19เซนติเมตร"
  },
  {
    "id": 702,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1182",
    "name": "ขนนก/ไก่สีดำ 100 ชิ้น",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ขนนก/ไก่สีดำ 100 ชิ้น"
  },
  {
    "id": 703,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1183",
    "name": "กระดานเกมคำคม ชุดไม้หมุน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดานเกมคำคม ชุดไม้หมุน"
  },
  {
    "id": 704,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "books-learning",
    "code": "VSP1184",
    "name": "หนังสือคนคนคำ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: หนังสือคนคนคำ"
  },
  {
    "id": 705,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1185",
    "name": "ปากกาดำ ขนาด 0.5 มิลลิเมตร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาดำ ขนาด 0.5 มิลลิเมตร"
  },
  {
    "id": 706,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1186",
    "name": "เบี้ย A-Math",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เบี้ย A-Math"
  },
  {
    "id": 707,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1187",
    "name": "นาฬิกาจับเวลา",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: นาฬิกาจับเวลา"
  },
  {
    "id": 708,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1188, VSP1289, VSP1426",
    "name": "กระดาษโฟโต้ 150 แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ 150 แกรม"
  },
  {
    "id": 709,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1189",
    "name": "กล่องพลาสติกใสมีฝาปิดขนาด 22.5×30×17 เซนติเมตร",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: กล่องพลาสติกใสมีฝาปิดขนาด 22.5×30×17 เซนติเมตร"
  },
  {
    "id": 710,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1190",
    "name": "ขุยมะพร้าว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ขุยมะพร้าว"
  },
  {
    "id": 711,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1191",
    "name": "กะละมังพลาสติกขนาด 25×40×10 เซนติเมตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กะละมังพลาสติกขนาด 25×40×10 เซนติเมตร"
  },
  {
    "id": 712,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1192",
    "name": "กระถางปลูกต้นไม้พลาสติกขนาด 15 เซนติเมตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กระถางปลูกต้นไม้พลาสติกขนาด 15 เซนติเมตร"
  },
  {
    "id": 713,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1193",
    "name": "เทปใสขนาด 1/2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใสขนาด 1/2 นิ้ว"
  },
  {
    "id": 714,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1194",
    "name": "สำลี",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: สำลี"
  },
  {
    "id": 715,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1195",
    "name": "คัตเตอร์ใหญ่พร้อมใบมีด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คัตเตอร์ใหญ่พร้อมใบมีด"
  },
  {
    "id": 716,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1196",
    "name": "โฟมอัดขนาด 3 มิลลิเมตร",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: โฟมอัดขนาด 3 มิลลิเมตร"
  },
  {
    "id": 717,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1197",
    "name": "กาวสเปรย์ 3M 20 ออนซ์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสเปรย์ 3M 20 ออนซ์"
  },
  {
    "id": 718,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1198",
    "name": "กาวร้อน 105",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวร้อน 105"
  },
  {
    "id": 719,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1199",
    "name": "กระดาษทรายละเอียดเบอร์ 0",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษทรายละเอียดเบอร์ 0"
  },
  {
    "id": 720,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1200",
    "name": "ไม้เสียบลูกชิ้น 1 มิลลิเมตร",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ไม้เสียบลูกชิ้น 1 มิลลิเมตร"
  },
  {
    "id": 721,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1201",
    "name": "ไม้เสียบลูกชิ้น 1.8 มิลลิเมตร",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ไม้เสียบลูกชิ้น 1.8 มิลลิเมตร"
  },
  {
    "id": 722,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1202",
    "name": "แผ่นพลาสติก (30x30CM) หนา 2 มม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แผ่นพลาสติก (30x30CM) หนา 2 มม"
  },
  {
    "id": 723,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1203",
    "name": "แผ่นพลาสติก (30x30CM) หนา 3 มม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แผ่นพลาสติก (30x30CM) หนา 3 มม"
  },
  {
    "id": 724,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1204",
    "name": "ชุด DC Motor พร้อมระบบเกียร์ทดกำลัง มีกำลังอัตราทด 3 ระดับ",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ชุด DC Motor พร้อมระบบเกียร์ทดกำลัง มีกำลังอัตราทด 3 ระดับ"
  },
  {
    "id": 725,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1205",
    "name": "ชุดแขนเหวี่ยงใช้กับเกียร์บ๊อกซ์ Tamiya (คู่)",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ชุดแขนเหวี่ยงใช้กับเกียร์บ๊อกซ์ Tamiya (คู่)"
  },
  {
    "id": 726,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1206",
    "name": "ถ่านอัลคาไลน์ รุ่น LR6T/2B สีทองขนาด AA (แพ็คละ 2 ก้อน)",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านอัลคาไลน์ รุ่น LR6T/2B สีทองขนาด AA (แพ็คละ 2 ก้อน)"
  },
  {
    "id": 727,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1207",
    "name": "กระดาษชาร์ทแข็งสีขาว (31x21 นิ้ว)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษชาร์ทแข็งสีขาว (31x21 นิ้ว)"
  },
  {
    "id": 728,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1208",
    "name": "กระดาษโฟโต้ A4 180 แกรม (50 แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ A4 180 แกรม (50 แผ่น)"
  },
  {
    "id": 729,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1209",
    "name": "กระดาษ A4 80 แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A4 80 แกรม"
  },
  {
    "id": 730,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1210",
    "name": "ปากกาไวท์บอร์ด สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาไวท์บอร์ด สีน้ำเงิน"
  },
  {
    "id": 731,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1211",
    "name": "ปากกาไวท์บอร์ด สีแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาไวท์บอร์ด สีแดง"
  },
  {
    "id": 732,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1212",
    "name": "กระดาษโปสเตอร์คละสี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์คละสี"
  },
  {
    "id": 733,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1213",
    "name": "เทปผ้าสีแดง 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปผ้าสีแดง 2 นิ้ว"
  },
  {
    "id": 734,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1214",
    "name": "เทปผ้าสีน้ำเงิน 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปผ้าสีน้ำเงิน 2 นิ้ว"
  },
  {
    "id": 735,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1215",
    "name": "เทปผ้าสีเขียว 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปผ้าสีเขียว 2 นิ้ว"
  },
  {
    "id": 736,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1216",
    "name": "เทปผ้าสีเหลือง 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปผ้าสีเหลือง 2 นิ้ว"
  },
  {
    "id": 737,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1217",
    "name": "เทปผ้าสีขาว 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปผ้าสีขาว 2 นิ้ว"
  },
  {
    "id": 738,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1218",
    "name": "ลวดเย็บกระดาษ เบอร์ 10 MAX",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บกระดาษ เบอร์ 10 MAX"
  },
  {
    "id": 739,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1219, VSP1253",
    "name": "เทปกาว 2 หน้าแบบบาง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2 หน้าแบบบาง"
  },
  {
    "id": 740,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1220",
    "name": "เทปกาว 2 หน้าแบบหนา",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2 หน้าแบบหนา"
  },
  {
    "id": 741,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP1221",
    "name": "ป้ายตั้งโต๊ะอะคริลิกใส 2 หน้า A5 แนวตั้ง",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: ป้ายตั้งโต๊ะอะคริลิกใส 2 หน้า A5 แนวตั้ง"
  },
  {
    "id": 742,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1223",
    "name": "ลวดเสียบกระดาษเบอร์ 1",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเสียบกระดาษเบอร์ 1"
  },
  {
    "id": 743,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1224",
    "name": "ลวดเสียบกระดาษเบอร์ 5",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเสียบกระดาษเบอร์ 5"
  },
  {
    "id": 744,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1225",
    "name": "เข็มทิศ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เข็มทิศ"
  },
  {
    "id": 745,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1226",
    "name": "แท่นตัดกระดาษ A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แท่นตัดกระดาษ A4"
  },
  {
    "id": 746,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1227",
    "name": "เครื่องเคลือบบัตร A4 Deli E3893",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเคลือบบัตร A4 Deli E3893"
  },
  {
    "id": 747,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1228, VSP1416",
    "name": "ปากกาเมจิก 12 สี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเมจิก 12 สี"
  },
  {
    "id": 748,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1229",
    "name": "หมึกปริ้นเตอร์ HPGT52 น้ำเงิน",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ HPGT52 น้ำเงิน"
  },
  {
    "id": 749,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1230",
    "name": "หมึกปริ้นเตอร์ HPGT53 ดำ",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ HPGT53 ดำ"
  },
  {
    "id": 750,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1231",
    "name": "หมึกปริ้นเตอร์ HPGT52 แดง",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ HPGT52 แดง"
  },
  {
    "id": 751,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1232",
    "name": "หมึกปริ้นเตอร์ HPGT52 เหลือง",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ HPGT52 เหลือง"
  },
  {
    "id": 752,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1233",
    "name": "หมึกปริ้นเตอร์ Canon790 เหลือง",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ Canon790 เหลือง"
  },
  {
    "id": 753,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1234",
    "name": "หมึกปริ้นเตอร์ Canon790 แดง",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ Canon790 แดง"
  },
  {
    "id": 754,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1235",
    "name": "ธงชาติไทย (80x120 ซม)",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ธงชาติไทย (80x120 ซม)"
  },
  {
    "id": 755,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1236, VSP1281, VSP1562",
    "name": "แผ่นรองเมาส์",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: แผ่นรองเมาส์"
  },
  {
    "id": 756,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1237",
    "name": "เทปกั้นเขต (สีดำเหลือง) 500 ม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกั้นเขต (สีดำเหลือง) 500 ม"
  },
  {
    "id": 757,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1238",
    "name": "ปากกาลูกลื่น สีน้ำเงิน 50 ด้าม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่น สีน้ำเงิน 50 ด้าม"
  },
  {
    "id": 758,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1239",
    "name": "ปากกาลูกลื่น สีแดง 50 ด้าม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่น สีแดง 50 ด้าม"
  },
  {
    "id": 759,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1240",
    "name": "ปากกาเคมี 2 หัว สีดำ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเคมี 2 หัว สีดำ"
  },
  {
    "id": 760,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1241",
    "name": "ปากกาเคมี 2 หัว สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเคมี 2 หัว สีน้ำเงิน"
  },
  {
    "id": 761,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1242",
    "name": "ปากกาเคมี 2 หัว สีแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเคมี 2 หัว สีแดง"
  },
  {
    "id": 762,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1243",
    "name": "ตะกร้ากลม ทรงสูง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ตะกร้ากลม ทรงสูง"
  },
  {
    "id": 763,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1244",
    "name": "กระดาษชาร์จ สีฟ้า (80x110 ซม)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษชาร์จ สีฟ้า (80x110 ซม)"
  },
  {
    "id": 764,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1245",
    "name": "กระดาษชาร์จ สีชมพู (80x110 ซม)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษชาร์จ สีชมพู (80x110 ซม)"
  },
  {
    "id": 765,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1246",
    "name": "กระดาษชาร์จ สีเขียว (80x110 ซม)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษชาร์จ สีเขียว (80x110 ซม)"
  },
  {
    "id": 766,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1247",
    "name": "กระดาษ A4 80 แกรม สีขาว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A4 80 แกรม สีขาว"
  },
  {
    "id": 767,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1248",
    "name": "กระดาษ A4 120 แกรม สีฟ้า (50 แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A4 120 แกรม สีฟ้า (50 แผ่น)"
  },
  {
    "id": 768,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1249",
    "name": "กระดาษ A4 120 แกรม สีชมพู (50 แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A4 120 แกรม สีชมพู (50 แผ่น)"
  },
  {
    "id": 769,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1250",
    "name": "ถุงพลาสติกใส (28x40 นิ้ว)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ถุงพลาสติกใส (28x40 นิ้ว)"
  },
  {
    "id": 770,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1251",
    "name": "ไม้บรรทัดพลาสติก 12 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ไม้บรรทัดพลาสติก 12 นิ้ว"
  },
  {
    "id": 771,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1252",
    "name": "เทปผ้า สีฟ้า",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปผ้า สีฟ้า"
  },
  {
    "id": 772,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1255",
    "name": "ปืนยิงแม็ก ลูกแมก 4-8 mm Deli",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ปืนยิงแม็ก ลูกแมก 4-8 mm Deli"
  },
  {
    "id": 773,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1256",
    "name": "ลวดเย็บกระดาษ เบอร์ 3-1M",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บกระดาษ เบอร์ 3-1M"
  },
  {
    "id": 774,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1257",
    "name": "เทปกาว 2 หน้าแบบหนาใหญ่ 5 ม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2 หน้าแบบหนาใหญ่ 5 ม"
  },
  {
    "id": 775,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1259",
    "name": "ลวดเส้นเล็ก",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ลวดเส้นเล็ก"
  },
  {
    "id": 776,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1260",
    "name": "กระดาษการ์ดขาว 50 แผ่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษการ์ดขาว 50 แผ่น"
  },
  {
    "id": 777,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1261",
    "name": "กระดาษเกียรติบัตรขอบทอง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษเกียรติบัตรขอบทอง"
  },
  {
    "id": 778,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1262",
    "name": "ปกใส",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปกใส"
  },
  {
    "id": 779,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1263",
    "name": "สันกระดูกงู (12 มม) สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สันกระดูกงู (12 มม) สีน้ำเงิน"
  },
  {
    "id": 780,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1264",
    "name": "สันกระดูกงู (20 มม) สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สันกระดูกงู (20 มม) สีน้ำเงิน"
  },
  {
    "id": 781,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1265, VSP1411",
    "name": "กระดาษโฟโต้ A4 180 แกรม (100 แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ A4 180 แกรม (100 แผ่น)"
  },
  {
    "id": 782,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1266",
    "name": "ถ่าน Panasonic D",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่าน Panasonic D"
  },
  {
    "id": 783,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1267",
    "name": "หมึกปริ้นเตอร์ Canon 790 สีดำ",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ Canon 790 สีดำ"
  },
  {
    "id": 784,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1268",
    "name": "หมึกปริ้นเตอร์ Canon 790 สีน้ำเงิน",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ Canon 790 สีน้ำเงิน"
  },
  {
    "id": 785,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1269",
    "name": "ที่ตักขยะพลาสติก",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ที่ตักขยะพลาสติก"
  },
  {
    "id": 786,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1270",
    "name": "ถังพลาสติกสีดำ 40 ลิตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถังพลาสติกสีดำ 40 ลิตร"
  },
  {
    "id": 787,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP1271, VSP1500, VSP1502",
    "name": "ตู้เก็บเอกสาร",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: ตู้เก็บเอกสาร"
  },
  {
    "id": 788,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP1272, VSP1503",
    "name": "กล่องเก็บเอกสาร 3 ช่อง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กล่องเก็บเอกสาร 3 ช่อง"
  },
  {
    "id": 789,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP1273",
    "name": "ลิ้นชักเก็บเอกสานพลาสติก 5 ชั้น",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: ลิ้นชักเก็บเอกสานพลาสติก 5 ชั้น"
  },
  {
    "id": 790,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP1274",
    "name": "เก้าอี้ทรงสูง",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: เก้าอี้ทรงสูง"
  },
  {
    "id": 791,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1275",
    "name": "แผ่นพลาสติกสำหรับเคลือบ A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นพลาสติกสำหรับเคลือบ A4"
  },
  {
    "id": 792,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1276",
    "name": "กระดาษสติกเกอร์สีขาว A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษสติกเกอร์สีขาว A4"
  },
  {
    "id": 793,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1277",
    "name": "เครื่องปรินเตอร์ Canon G2010",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: เครื่องปรินเตอร์ Canon G2010"
  },
  {
    "id": 794,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1278",
    "name": "กาวสองหน้า 3M",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้า 3M"
  },
  {
    "id": 795,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1279",
    "name": "ถ่าน AA",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่าน AA"
  },
  {
    "id": 796,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1280",
    "name": "ถ่าน AAA",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่าน AAA"
  },
  {
    "id": 797,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1282",
    "name": "พรมเช็ดเท้ากันลื่น",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: พรมเช็ดเท้ากันลื่น"
  },
  {
    "id": 798,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1283",
    "name": "กระดาษการ์ดขาว 180 แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษการ์ดขาว 180 แกรม"
  },
  {
    "id": 799,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1284",
    "name": "แผ่นปกใส A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นปกใส A4"
  },
  {
    "id": 800,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1285",
    "name": "แล็กซีน สีเทา ชมพู และฟ้า อย่างละม้วน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีน สีเทา ชมพู และฟ้า อย่างละม้วน"
  },
  {
    "id": 801,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1286",
    "name": "ปากกาไวท์บอร์ด แดง/น้ำเงิน ปลายกลม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาไวท์บอร์ด แดง/น้ำเงิน ปลายกลม"
  },
  {
    "id": 802,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1287",
    "name": "ลวดเสียบกระดาษ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเสียบกระดาษ"
  },
  {
    "id": 803,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1288",
    "name": "กาวแท่ง UHU",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวแท่ง UHU"
  },
  {
    "id": 804,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1291",
    "name": "เทปกาวนาโนสองหน้า 5 เมตร กว้าง 2 ซม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาวนาโนสองหน้า 5 เมตร กว้าง 2 ซม"
  },
  {
    "id": 805,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1293",
    "name": "เทปโฟม 5 เมตร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปโฟม 5 เมตร"
  },
  {
    "id": 806,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1294",
    "name": "ไม้บรรทัดเหล็ก",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ไม้บรรทัดเหล็ก"
  },
  {
    "id": 807,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1295",
    "name": "กระจกเงา ขนาด 30x120 cm",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กระจกเงา ขนาด 30x120 cm"
  },
  {
    "id": 808,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1296",
    "name": "ฟิวเจอร์บอร์ด 80X65 cm สีดำ",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ฟิวเจอร์บอร์ด 80X65 cm สีดำ"
  },
  {
    "id": 809,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1297",
    "name": "ผลไม้พลาสติกรวมชนิด",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ผลไม้พลาสติกรวมชนิด"
  },
  {
    "id": 810,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1298",
    "name": "เทปกาวย่นสี (ดำ, ม่วง, แดง, เหลือง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาวย่นสี (ดำ, ม่วง, แดง, เหลือง)"
  },
  {
    "id": 811,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1299",
    "name": "ปลั๊กไฟยาว 10 เมตร",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟยาว 10 เมตร"
  },
  {
    "id": 812,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1302",
    "name": "ปากกาลูกลื่นสีแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่นสีแดง"
  },
  {
    "id": 813,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1303",
    "name": "ดินสอสี 12 สี colleen",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ดินสอสี 12 สี colleen"
  },
  {
    "id": 814,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1304",
    "name": "กระเป๋าใส่ดินสอ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระเป๋าใส่ดินสอ"
  },
  {
    "id": 815,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1305",
    "name": "กรรไกรสำนักงาน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกรสำนักงาน"
  },
  {
    "id": 816,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1306",
    "name": "สมุดจดเล่มบาง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สมุดจดเล่มบาง"
  },
  {
    "id": 817,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1307",
    "name": "แบตเตอรี่ AA (12แพ็ค/กล่อง)",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: แบตเตอรี่ AA (12แพ็ค/กล่อง)"
  },
  {
    "id": 818,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1308",
    "name": "ธงชาติไทย ขนาด 2x3 เมตร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงชาติไทย ขนาด 2x3 เมตร"
  },
  {
    "id": 819,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1309",
    "name": "ธงชาติไทย ขนาด 60x90 ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงชาติไทย ขนาด 60x90 ซม"
  },
  {
    "id": 820,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1310",
    "name": "ธงสัญลักษณ์ รัชกาลที่ 10 ขนาด 60x90 ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงสัญลักษณ์ รัชกาลที่ 10 ขนาด 60x90 ซม"
  },
  {
    "id": 821,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1311",
    "name": "ดินสอ 2B (50 แท่ง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ดินสอ 2B (50 แท่ง)"
  },
  {
    "id": 822,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1312",
    "name": "ปากกาสีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาสีน้ำเงิน"
  },
  {
    "id": 823,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1313",
    "name": "ปากกาสีแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาสีแดง"
  },
  {
    "id": 824,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1314",
    "name": "ประธานสภา",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ประธานสภา"
  },
  {
    "id": 825,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1315",
    "name": "รองประธานสภา",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: รองประธานสภา"
  },
  {
    "id": 826,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1316",
    "name": "คณะกรรมการสภา",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: คณะกรรมการสภา"
  },
  {
    "id": 827,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1317",
    "name": "ขนมขบเคี้ยว (คละชนิด)",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนมขบเคี้ยว (คละชนิด)"
  },
  {
    "id": 828,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1318",
    "name": "ลูกอม (คละรสชาติ) แพ็ค 100 เม็ด",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ลูกอม (คละรสชาติ) แพ็ค 100 เม็ด"
  },
  {
    "id": 829,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1319",
    "name": "น้ำหวาน (คละรสชาติ)",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: น้ำหวาน (คละรสชาติ)"
  },
  {
    "id": 830,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1320",
    "name": "ปากกาสองหัว (สีน้ำเงินและสีแดง) ควอนตัม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาสองหัว (สีน้ำเงินและสีแดง) ควอนตัม"
  },
  {
    "id": 831,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1321",
    "name": "สีไม้ตรา elfen",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สีไม้ตรา elfen"
  },
  {
    "id": 832,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1322",
    "name": "กำไลโยนห่วง (24 ห่วง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กำไลโยนห่วง (24 ห่วง)"
  },
  {
    "id": 833,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1323, VSP1453",
    "name": "ขนมเลย์",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนมเลย์"
  },
  {
    "id": 834,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1324",
    "name": "ขนมคอนเน่",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนมคอนเน่"
  },
  {
    "id": 835,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1325",
    "name": "ขนมปาร์ตี้",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนมปาร์ตี้"
  },
  {
    "id": 836,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1326",
    "name": "ขนมสแน็กแจ็ค",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนมสแน็กแจ็ค"
  },
  {
    "id": 837,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1327",
    "name": "ขนมฮานามิ",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนมฮานามิ"
  },
  {
    "id": 838,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1328",
    "name": "ขนมทวิสโก้",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนมทวิสโก้"
  },
  {
    "id": 839,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1329",
    "name": "สาหร่ายเถ้าแก่น้อย",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: สาหร่ายเถ้าแก่น้อย"
  },
  {
    "id": 840,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1330",
    "name": "น้ำอัดลม",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: น้ำอัดลม"
  },
  {
    "id": 841,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1331",
    "name": "น้ำโออิชิ",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: น้ำโออิชิ"
  },
  {
    "id": 842,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1332",
    "name": "ลูกอมจูปาจุ๊ปมินิ",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ลูกอมจูปาจุ๊ปมินิ"
  },
  {
    "id": 843,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1333",
    "name": "ขนมเบงเบง",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนมเบงเบง"
  },
  {
    "id": 844,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1334",
    "name": "กล่องข้าวพลาสติกเล็ก",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: กล่องข้าวพลาสติกเล็ก"
  },
  {
    "id": 845,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1335",
    "name": "แก้วน้ำพลาสติกลายน่ารัก",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: แก้วน้ำพลาสติกลายน่ารัก"
  },
  {
    "id": 846,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1336",
    "name": "กิ๊ปปากเป็ด ขนาด 4 ซม (100ชิ้น)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กิ๊ปปากเป็ด ขนาด 4 ซม (100ชิ้น)"
  },
  {
    "id": 847,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1337",
    "name": "เชือกไนล่อนขาว เบอร์ 210",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เชือกไนล่อนขาว เบอร์ 210"
  },
  {
    "id": 848,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1338",
    "name": "กระดาษแก้วคละสี แพ็คละ 100 แผ่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษแก้วคละสี แพ็คละ 100 แผ่น"
  },
  {
    "id": 849,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1339, VSP1505",
    "name": "กาวลาเท็กซ์ 16 ออนซ์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวลาเท็กซ์ 16 ออนซ์"
  },
  {
    "id": 850,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP1340",
    "name": "ชั้นวางของอเนกประสงค์ 50x34x28 ซม",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: ชั้นวางของอเนกประสงค์ 50x34x28 ซม"
  },
  {
    "id": 851,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1341",
    "name": "กระดาษย่นสายรุ้ง 7 สี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษย่นสายรุ้ง 7 สี"
  },
  {
    "id": 852,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1342",
    "name": "กรรไกรตราช้าง ขนาด 6 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกรตราช้าง ขนาด 6 นิ้ว"
  },
  {
    "id": 853,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1343",
    "name": "ปากกาลูกลื่น ขนาด 0.5 มม 50 ด้าม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่น ขนาด 0.5 มม 50 ด้าม"
  },
  {
    "id": 854,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1344",
    "name": "ตุ๊กตาการ์ตูน คละแบบ",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ตุ๊กตาการ์ตูน คละแบบ"
  },
  {
    "id": 855,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1345",
    "name": "ลูกโป่ง คละสี",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ลูกโป่ง คละสี"
  },
  {
    "id": 856,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP1346, VSP1361",
    "name": "กล่องสุ่มพวงกุญแจ (24ชั้น)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กล่องสุ่มพวงกุญแจ (24ชั้น)"
  },
  {
    "id": 857,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1347",
    "name": "ลูกอม my chewy รสแตงโม",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ลูกอม my chewy รสแตงโม"
  },
  {
    "id": 858,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1348",
    "name": "ลูกอม my chewy รสสตรอเบอรี่",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ลูกอม my chewy รสสตรอเบอรี่"
  },
  {
    "id": 859,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1349",
    "name": "จอลลี่แบร์",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: จอลลี่แบร์"
  },
  {
    "id": 860,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1350",
    "name": "นมแท่งข้าวโพด",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: นมแท่งข้าวโพด"
  },
  {
    "id": 861,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1351",
    "name": "นมแท่งข้าวโพดรสช็อคโกแลต",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: นมแท่งข้าวโพดรสช็อคโกแลต"
  },
  {
    "id": 862,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1352",
    "name": "สีไม้ยาว MasterArt 12 สี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สีไม้ยาว MasterArt 12 สี"
  },
  {
    "id": 863,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1353",
    "name": "ไม้บรรทัดพลาสติกลายการ์ตูน 30 ซม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ไม้บรรทัดพลาสติกลายการ์ตูน 30 ซม"
  },
  {
    "id": 864,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1354",
    "name": "Elfen ปากกาลบคำผิด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: Elfen ปากกาลบคำผิด"
  },
  {
    "id": 865,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1355",
    "name": "ปากกาเมจิก MasterArt 12 สี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเมจิก MasterArt 12 สี"
  },
  {
    "id": 866,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1356",
    "name": "เทียนถ้วย (Tealight Candle) แบบสวิตซ์",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เทียนถ้วย (Tealight Candle) แบบสวิตซ์"
  },
  {
    "id": 867,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1357",
    "name": "กระดาษแข็งสีขาว (เทา-ขาว)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษแข็งสีขาว (เทา-ขาว)"
  },
  {
    "id": 868,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1358",
    "name": "ปากกาเมจิกสีดำ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเมจิกสีดำ"
  },
  {
    "id": 869,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1359",
    "name": "ขนม คละรส",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนม คละรส"
  },
  {
    "id": 870,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1360",
    "name": "ตุ๊กตาการ์ตูน คละแบบ",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ตุ๊กตาการ์ตูน คละแบบ"
  },
  {
    "id": 871,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1364",
    "name": "กระดาษโฟโต้ 130 แกรม (100 แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ 130 แกรม (100 แผ่น)"
  },
  {
    "id": 872,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1365",
    "name": "พลุกระดาษ 50 ซม (1ชุดมี 12 แท่ง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: พลุกระดาษ 50 ซม (1ชุดมี 12 แท่ง)"
  },
  {
    "id": 873,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1366",
    "name": "เครื่องตัดอเนกประสงค์",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: เครื่องตัดอเนกประสงค์"
  },
  {
    "id": 874,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1367",
    "name": "โฟมหนา 1 นิ้ว",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: โฟมหนา 1 นิ้ว"
  },
  {
    "id": 875,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1368",
    "name": "โฟมหนา 1/2 นิ้ว",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: โฟมหนา 1/2 นิ้ว"
  },
  {
    "id": 876,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1369",
    "name": "สีโปสเตอร์ สีทอง 300 ml",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สีโปสเตอร์ สีทอง 300 ml"
  },
  {
    "id": 877,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1370",
    "name": "สีโปสเตอร์ สีน้ำเงิน เหลือง แดง ขาว ดำ อย่างละ 1 ลิตร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สีโปสเตอร์ สีน้ำเงิน เหลือง แดง ขาว ดำ อย่างละ 1 ลิตร"
  },
  {
    "id": 878,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1372",
    "name": "คัตเตอร์ใหญ่พร้อมใบมีด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คัตเตอร์ใหญ่พร้อมใบมีด"
  },
  {
    "id": 879,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1373",
    "name": "กาวลาเท็กซ์ (ขวดกลาง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวลาเท็กซ์ (ขวดกลาง)"
  },
  {
    "id": 880,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1374",
    "name": "กากเพชร (ขวดใหญ่)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กากเพชร (ขวดใหญ่)"
  },
  {
    "id": 881,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1375",
    "name": "เข็มหมุด (สีขาว)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เข็มหมุด (สีขาว)"
  },
  {
    "id": 882,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1376",
    "name": "ถุงคลุมกล่องปลูกผักไฮโตรโปนิกส์สีดำ10ใบ",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถุงคลุมกล่องปลูกผักไฮโตรโปนิกส์สีดำ10ใบ"
  },
  {
    "id": 883,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1377",
    "name": "เทปกาวใส ม้วนใหญ่ 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาวใส ม้วนใหญ่ 2 นิ้ว"
  },
  {
    "id": 884,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1378",
    "name": "แผ่นเคลือบ A4 100 แผ่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นเคลือบ A4 100 แผ่น"
  },
  {
    "id": 885,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1379",
    "name": "กระดาษโฟโต้ 130 แกรม - 100 แผ่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ 130 แกรม - 100 แผ่น"
  },
  {
    "id": 886,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1380",
    "name": "เทปผ้าแล็คซีน 2 นิ้ว - 6 ม้วน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปผ้าแล็คซีน 2 นิ้ว - 6 ม้วน"
  },
  {
    "id": 887,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1381",
    "name": "ปากกาเมจิก 2 หัว (สีดำและน้ำเงิน) ตราม้า",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเมจิก 2 หัว (สีดำและน้ำเงิน) ตราม้า"
  },
  {
    "id": 888,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1382",
    "name": "เชือกปอสีน้ำตาล",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เชือกปอสีน้ำตาล"
  },
  {
    "id": 889,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1383",
    "name": "ถุงหูหิ้วสีขาว 14x18 นิ้ว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถุงหูหิ้วสีขาว 14x18 นิ้ว"
  },
  {
    "id": 890,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1384",
    "name": "ไม้จิ้มฟันสองปลาย ตราเอโร่ (12 ห่อ)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ไม้จิ้มฟันสองปลาย ตราเอโร่ (12 ห่อ)"
  },
  {
    "id": 891,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP1385",
    "name": "กล่องเบเกอรี่",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กล่องเบเกอรี่"
  },
  {
    "id": 892,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1386",
    "name": "ถั่วเขียวเลาะเปลือก ตราไร่ทิพย์",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ถั่วเขียวเลาะเปลือก ตราไร่ทิพย์"
  },
  {
    "id": 893,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1387",
    "name": "กี๋พลาสติกทรงสูง เส้นผ่าศูนย์กลาง 29 ซม",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กี๋พลาสติกทรงสูง เส้นผ่าศูนย์กลาง 29 ซม"
  },
  {
    "id": 894,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1388",
    "name": "กี๋พลาสติกทรงต่ำ เส้นผ่าศูนย์กลาง 10 ซม",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กี๋พลาสติกทรงต่ำ เส้นผ่าศูนย์กลาง 10 ซม"
  },
  {
    "id": 895,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1389",
    "name": "กี๋พลาสติกทรงต่ำ เส้นผ่าศูนย์กลาง 18 ซม",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กี๋พลาสติกทรงต่ำ เส้นผ่าศูนย์กลาง 18 ซม"
  },
  {
    "id": 896,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1390",
    "name": "สีผสมอาหารแบบขวด ยี่ห้อวินเนอร์ (ชมพู, เขียว, แสด, แดง, เหลืองอย่างละ2 ขวด)",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: สีผสมอาหารแบบขวด ยี่ห้อวินเนอร์ (ชมพู, เขียว, แสด, แดง, เหลืองอย่างละ2 ขวด)"
  },
  {
    "id": 897,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1391",
    "name": "พู่กันหัวกลม เบอร์ 6",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: พู่กันหัวกลม เบอร์ 6"
  },
  {
    "id": 898,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1392",
    "name": "หมึกเขียนพู่กันจีน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: หมึกเขียนพู่กันจีน"
  },
  {
    "id": 899,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1393",
    "name": "ตะเกียบไม้ 22 ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ตะเกียบไม้ 22 ซม"
  },
  {
    "id": 900,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1394",
    "name": "ถั่วเขียว 500 กรัม",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ถั่วเขียว 500 กรัม"
  },
  {
    "id": 901,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1395",
    "name": "จานกระดาษ 7 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: จานกระดาษ 7 นิ้ว"
  },
  {
    "id": 902,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1396",
    "name": "โคมไฟกระดาษญี่ปุ่น",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: โคมไฟกระดาษญี่ปุ่น"
  },
  {
    "id": 903,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1397",
    "name": "ธงปลาคาร์ฟญี่ปุ่น 100 ซม สีดำ",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงปลาคาร์ฟญี่ปุ่น 100 ซม สีดำ"
  },
  {
    "id": 904,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1398",
    "name": "ธงปลาคาร์ฟญี่ปุ่น 70 ซม สีแดง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงปลาคาร์ฟญี่ปุ่น 70 ซม สีแดง"
  },
  {
    "id": 905,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1399",
    "name": "ธงปลาคาร์ฟญี่ปุ่น 40 ซม สีน้ำเงิน",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงปลาคาร์ฟญี่ปุ่น 40 ซม สีน้ำเงิน"
  },
  {
    "id": 906,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1400",
    "name": "ธงปลาคาร์ฟญี่ปุ่น 40 ซม สีชมพู",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงปลาคาร์ฟญี่ปุ่น 40 ซม สีชมพู"
  },
  {
    "id": 907,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1401",
    "name": "เทปกาวใส 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาวใส 2 นิ้ว"
  },
  {
    "id": 908,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1402",
    "name": "เทปกาว 2 หน้า 18 มม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2 หน้า 18 มม"
  },
  {
    "id": 909,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1403",
    "name": "เชือกฝ้าย 3 มม สีขาว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เชือกฝ้าย 3 มม สีขาว"
  },
  {
    "id": 910,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1404",
    "name": "สีเทียน แท่งเล็ก 12 สี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สีเทียน แท่งเล็ก 12 สี"
  },
  {
    "id": 911,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1405",
    "name": "แผ่นฟิวเจอร์บอร์ด 3 มม 65x120 สีชมพู",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แผ่นฟิวเจอร์บอร์ด 3 มม 65x120 สีชมพู"
  },
  {
    "id": 912,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1406",
    "name": "แผ่นฟิวเจอร์บอร์ด 3 มม 65x120 สีฟ้า",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แผ่นฟิวเจอร์บอร์ด 3 มม 65x120 สีฟ้า"
  },
  {
    "id": 913,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1407",
    "name": "แผ่นฟิวเจอร์บอร์ด 3 มม 65x120 สีแดง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แผ่นฟิวเจอร์บอร์ด 3 มม 65x120 สีแดง"
  },
  {
    "id": 914,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1408",
    "name": "แผ่นฟิวเจอร์บอร์ด 3 มม 65x120 สีขาว",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แผ่นฟิวเจอร์บอร์ด 3 มม 65x120 สีขาว"
  },
  {
    "id": 915,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1409",
    "name": "แผ่นโฟมหนา 1 นิ้ว 60x120 ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แผ่นโฟมหนา 1 นิ้ว 60x120 ซม"
  },
  {
    "id": 916,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP1410",
    "name": "กรอบรูปกระจกคริสตัล A4",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กรอบรูปกระจกคริสตัล A4"
  },
  {
    "id": 917,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1412",
    "name": "ชุดหมึกเติม Canon G2010",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: ชุดหมึกเติม Canon G2010"
  },
  {
    "id": 918,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1413",
    "name": "พลาสติกเคลือบบัตร A4",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: พลาสติกเคลือบบัตร A4"
  },
  {
    "id": 919,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1414",
    "name": "กระดาษโปสเตอร์สี 2 หน้า (คละสี)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์สี 2 หน้า (คละสี)"
  },
  {
    "id": 920,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1415",
    "name": "เชือกป่านยาว 100 เมตร สีน้ำตาล",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เชือกป่านยาว 100 เมตร สีน้ำตาล"
  },
  {
    "id": 921,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1417",
    "name": "ปากกาเคมี 2 หัว (คละสี)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเคมี 2 หัว (คละสี)"
  },
  {
    "id": 922,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1418, VSP1438, VSP1727",
    "name": "กาวลาเท็กซ์ 32 ออนซ์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวลาเท็กซ์ 32 ออนซ์"
  },
  {
    "id": 923,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1419",
    "name": "กาวแท่งสติกซ์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวแท่งสติกซ์"
  },
  {
    "id": 924,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1420",
    "name": "ขนม (คละรส)",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนม (คละรส)"
  },
  {
    "id": 925,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1421",
    "name": "เบงเบงเวเฟอร์ (คละรส)",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: เบงเบงเวเฟอร์ (คละรส)"
  },
  {
    "id": 926,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1422",
    "name": "ลูกอม",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ลูกอม"
  },
  {
    "id": 927,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1423",
    "name": "ปากกาน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาน้ำเงิน"
  },
  {
    "id": 928,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1424",
    "name": "กระดาษสี A4 คละสี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษสี A4 คละสี"
  },
  {
    "id": 929,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1425",
    "name": "กระดาษ 100 ปอนด์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ 100 ปอนด์"
  },
  {
    "id": 930,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1427",
    "name": "ปากกาลูกลื่นรุ่น 10 สีใน 1 ด้าม 0.5 mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่นรุ่น 10 สีใน 1 ด้าม 0.5 mm"
  },
  {
    "id": 931,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1428",
    "name": "สีชอล์กน้ำมันแบบ 12 สี Pentel Oil Pastel",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สีชอล์กน้ำมันแบบ 12 สี Pentel Oil Pastel"
  },
  {
    "id": 932,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1429",
    "name": "ปากกาลูกลื่น Quantum 007",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่น Quantum 007"
  },
  {
    "id": 933,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1430",
    "name": "ขนมปิ๊ปสติ๊กช็อคโกแลต",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนมปิ๊ปสติ๊กช็อคโกแลต"
  },
  {
    "id": 934,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1431",
    "name": "ลูกปิงปองสีขาว 70 ลูก",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกปิงปองสีขาว 70 ลูก"
  },
  {
    "id": 935,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1432",
    "name": "ปากกาลูกลื่นสีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่นสีน้ำเงิน"
  },
  {
    "id": 936,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1433",
    "name": "ปากกาลูกลื่นสีแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่นสีแดง"
  },
  {
    "id": 937,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1434",
    "name": "ขนมขบเคี้ยวคละแบบ",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนมขบเคี้ยวคละแบบ"
  },
  {
    "id": 938,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1435",
    "name": "มาม่า/ไวไว (อย่างละลัง)",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: มาม่า/ไวไว (อย่างละลัง)"
  },
  {
    "id": 939,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1436",
    "name": "กระดาษทิชชู่สีชมพู",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษทิชชู่สีชมพู"
  },
  {
    "id": 940,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1437",
    "name": "กรรไกรขนาด 8 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกรขนาด 8 นิ้ว"
  },
  {
    "id": 941,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1439",
    "name": "กระดาษโปสเตอร์ สีแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์ สีแดง"
  },
  {
    "id": 942,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1440",
    "name": "กระดาษโปสเตอร์ สีขาว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์ สีขาว"
  },
  {
    "id": 943,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1441",
    "name": "กระดาษโปสเตอร์ สีชมพู",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์ สีชมพู"
  },
  {
    "id": 944,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1442",
    "name": "กระดาษโปสเตอร์ สีฟ้า",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์ สีฟ้า"
  },
  {
    "id": 945,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1443",
    "name": "กระดาษโปสเตอร์ สีส้ม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโปสเตอร์ สีส้ม"
  },
  {
    "id": 946,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1444",
    "name": "ลูกโป่ง ขนาด 9 นิ้ว 100 ใบ",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ลูกโป่ง ขนาด 9 นิ้ว 100 ใบ"
  },
  {
    "id": 947,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1445",
    "name": "หนังยางวงเล็กสีแดง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: หนังยางวงเล็กสีแดง"
  },
  {
    "id": 948,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1446",
    "name": "สีไม้ 12 สี ยี่ห้อ Elfen",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สีไม้ 12 สี ยี่ห้อ Elfen"
  },
  {
    "id": 949,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1447",
    "name": "ปากกาเคมี สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเคมี สีน้ำเงิน"
  },
  {
    "id": 950,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1448",
    "name": "กระดาษ A4 80 แกรม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A4 80 แกรม"
  },
  {
    "id": 951,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1449",
    "name": "ลูกอม mentos",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ลูกอม mentos"
  },
  {
    "id": 952,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1450",
    "name": "ลูกอม ฮาร์ทบีท",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ลูกอม ฮาร์ทบีท"
  },
  {
    "id": 953,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1451",
    "name": "เยลลี่ จอลลี่แบร์",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: เยลลี่ จอลลี่แบร์"
  },
  {
    "id": 954,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1452",
    "name": "ขนมแจ็กซ์",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนมแจ็กซ์"
  },
  {
    "id": 955,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1454",
    "name": "ขนมเบนโตะ",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนมเบนโตะ"
  },
  {
    "id": 956,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1455",
    "name": "ขนมโปเต้",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนมโปเต้"
  },
  {
    "id": 957,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1456",
    "name": "ปีโป้",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ปีโป้"
  },
  {
    "id": 958,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1457",
    "name": "ลูกอม Chupa Chups",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ลูกอม Chupa Chups"
  },
  {
    "id": 959,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1458",
    "name": "กาวสองหน้าแบบบาง 1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้าแบบบาง 1 นิ้ว"
  },
  {
    "id": 960,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1459",
    "name": "กาวสองหน้าแบบหนา 3M 5 เมตร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้าแบบหนา 3M 5 เมตร"
  },
  {
    "id": 961,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1460",
    "name": "แล็คซีนสีแดง 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็คซีนสีแดง 2 นิ้ว"
  },
  {
    "id": 962,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "site-materials",
    "code": "VSP1463",
    "name": "ฟองน้ำฉาบปูนหนา 1 นิ้ว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ฟองน้ำฉาบปูนหนา 1 นิ้ว"
  },
  {
    "id": 963,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1464",
    "name": "เชือกฟางสีแดง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เชือกฟางสีแดง"
  },
  {
    "id": 964,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1465",
    "name": "ตะเกียบไม้ใช้แล้วทิ้ง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ตะเกียบไม้ใช้แล้วทิ้ง"
  },
  {
    "id": 965,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1466",
    "name": "ถุงขยะขนาด 24x28 นิ้ว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถุงขยะขนาด 24x28 นิ้ว"
  },
  {
    "id": 966,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1467",
    "name": "ถังน้ำสีดำ มีฝาปิด ขนาด 40 ลิตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถังน้ำสีดำ มีฝาปิด ขนาด 40 ลิตร"
  },
  {
    "id": 967,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1468",
    "name": "แผ่นรองเขียนพลาสติก A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นรองเขียนพลาสติก A4"
  },
  {
    "id": 968,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1469",
    "name": "ลวดเย็บเสียบกระดาษ เบอร์ 1",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บเสียบกระดาษ เบอร์ 1"
  },
  {
    "id": 969,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1470",
    "name": "ซองเอกสารน้ำตาล ขนาด 9x12 3/4 (50ชอง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองเอกสารน้ำตาล ขนาด 9x12 3/4 (50ชอง)"
  },
  {
    "id": 970,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1471",
    "name": "เทปกระดาษกาวย่น 18 มม.",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกระดาษกาวย่น 18 มม."
  },
  {
    "id": 971,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1472",
    "name": "กาวสองหน้าแบบบาง 12 มม.",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้าแบบบาง 12 มม."
  },
  {
    "id": 972,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1473",
    "name": "หมึกสีดำ Canon 790",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกสีดำ Canon 790"
  },
  {
    "id": 973,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1474",
    "name": "หมึกสีฟ้า Canon 790",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกสีฟ้า Canon 790"
  },
  {
    "id": 974,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1475",
    "name": "หมึกสีเหลือง Canon 790",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกสีเหลือง Canon 790"
  },
  {
    "id": 975,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1476",
    "name": "หมึกสีแดง Canon 790",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกสีแดง Canon 790"
  },
  {
    "id": 976,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1477",
    "name": "ตะแกรงแขวนสีขาว 60x120 ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ตะแกรงแขวนสีขาว 60x120 ซม"
  },
  {
    "id": 977,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1478",
    "name": "ป้ายอะคริลิกสามเหลี่ยมสองหน้า (30x10ชม)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ป้ายอะคริลิกสามเหลี่ยมสองหน้า (30x10ชม)"
  },
  {
    "id": 978,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1479",
    "name": "เทปใสแกนเล็ก 1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใสแกนเล็ก 1 นิ้ว"
  },
  {
    "id": 979,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1480",
    "name": "เทปใสแกนใหญ่ 3 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใสแกนใหญ่ 3 นิ้ว"
  },
  {
    "id": 980,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1481",
    "name": "กรรไกร 9 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกร 9 นิ้ว"
  },
  {
    "id": 981,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1482",
    "name": "ไม้บรรทัด เหล็ก 12 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ไม้บรรทัด เหล็ก 12 นิ้ว"
  },
  {
    "id": 982,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1483",
    "name": "กระดาษปรู้ฟขาว 31x43 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษปรู้ฟขาว 31x43 นิ้ว"
  },
  {
    "id": 983,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1484, VSP1489",
    "name": "กระดาษการ์ดขาว 180g A4 (50แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษการ์ดขาว 180g A4 (50แผ่น)"
  },
  {
    "id": 984,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1485, VSP1488",
    "name": "กระดาษโฟโต้ 180g A4 (50แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ 180g A4 (50แผ่น)"
  },
  {
    "id": 985,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1486",
    "name": "เชือกด้ายขาวแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เชือกด้ายขาวแดง"
  },
  {
    "id": 986,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1487",
    "name": "กระดาษโฟโต้ 150g A4 (50แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ 150g A4 (50แผ่น)"
  },
  {
    "id": 987,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1490",
    "name": "ถุงตำขนาด 30x40 นิ้ว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถุงตำขนาด 30x40 นิ้ว"
  },
  {
    "id": 988,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1491",
    "name": "ผ้าเช็ดอเนกประสงค์",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ผ้าเช็ดอเนกประสงค์"
  },
  {
    "id": 989,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1492",
    "name": "ถังน้ำเบอร์ 16",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถังน้ำเบอร์ 16"
  },
  {
    "id": 990,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP1493",
    "name": "แปรงขัดห้องน้ำ",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: แปรงขัดห้องน้ำ"
  },
  {
    "id": 991,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP1494",
    "name": "น้ำยาล้างห้องน้ำเป็ดม่วง",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: น้ำยาล้างห้องน้ำเป็ดม่วง"
  },
  {
    "id": 992,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP1495",
    "name": "ไม้ถูพื้นแบบหนีบผ้า",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ไม้ถูพื้นแบบหนีบผ้า"
  },
  {
    "id": 993,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP1496",
    "name": "ไม้ขัดพื้น",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ไม้ขัดพื้น"
  },
  {
    "id": 994,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1497",
    "name": "ถุงมือยางทำความสะอาด",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถุงมือยางทำความสะอาด"
  },
  {
    "id": 995,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP1499",
    "name": "น้ำยาถูพื้น",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: น้ำยาถูพื้น"
  },
  {
    "id": 996,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP1501",
    "name": "กล่องเก็บเอกสาร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กล่องเก็บเอกสาร"
  },
  {
    "id": 997,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP1504",
    "name": "ลิ้นชักเก็บเอกสารพลาสติก",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ลิ้นชักเก็บเอกสารพลาสติก"
  },
  {
    "id": 998,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1506",
    "name": "เครื่องยิงบอร์ดตราช้าง TS-13H",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เครื่องยิงบอร์ดตราช้าง TS-13H"
  },
  {
    "id": 999,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1507",
    "name": "ลวดยิงบอร์ดตราช้าง T-13",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ลวดยิงบอร์ดตราช้าง T-13"
  },
  {
    "id": 1000,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1508",
    "name": "คลิปบอร์ด A4 พลาสติก",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปบอร์ด A4 พลาสติก"
  },
  {
    "id": 1001,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1509",
    "name": "คัตเตอร์พลาสติกใหญ่",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คัตเตอร์พลาสติกใหญ่"
  },
  {
    "id": 1002,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1510",
    "name": "น้ำยาลบความผิดแบบน้ำ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: น้ำยาลบความผิดแบบน้ำ"
  },
  {
    "id": 1003,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1511",
    "name": "ปากกาเคมีสีน้ำเงิน, สีดำ, สีแดง อย่างละ 4 แท่ง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเคมีสีน้ำเงิน, สีดำ, สีแดง อย่างละ 4 แท่ง"
  },
  {
    "id": 1004,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1513",
    "name": "เครื่องพิมพ์ Canon 3010",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: เครื่องพิมพ์ Canon 3010"
  },
  {
    "id": 1005,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1516",
    "name": "เครื่องเย็บกระดาษ เบอร์ 10 Elephant",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเย็บกระดาษ เบอร์ 10 Elephant"
  },
  {
    "id": 1006,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1517",
    "name": "ลวดเย็บกระดาษ เบอร์ 10 Elephant",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดเย็บกระดาษ เบอร์ 10 Elephant"
  },
  {
    "id": 1007,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1518",
    "name": "กระดาษโฟโต้ 150g (50แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ 150g (50แผ่น)"
  },
  {
    "id": 1008,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1519",
    "name": "เทปผ้า 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปผ้า 2 นิ้ว"
  },
  {
    "id": 1009,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1521",
    "name": "คัตเตอร์สแตนเลสใหญ่",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คัตเตอร์สแตนเลสใหญ่"
  },
  {
    "id": 1010,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1522",
    "name": "กระเป๋าเอกสารพลาสติก",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระเป๋าเอกสารพลาสติก"
  },
  {
    "id": 1011,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1523",
    "name": "หมึกปริ้นเตอร์ Canon สีดำ",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกปริ้นเตอร์ Canon สีดำ"
  },
  {
    "id": 1012,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1525",
    "name": "ถ่านอัลคาไลน์ 2A",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านอัลคาไลน์ 2A"
  },
  {
    "id": 1013,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1526",
    "name": "กระดาษโฟโต้ A4 150g (50แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ A4 150g (50แผ่น)"
  },
  {
    "id": 1014,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "cleaning-maintenance",
    "code": "VSP1527",
    "name": "ถุงดำหนา 28x36 ซม.",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ถุงดำหนา 28x36 ซม."
  },
  {
    "id": 1015,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1528",
    "name": "เทปกาว 2 หน้าบาง 1 ซม.",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2 หน้าบาง 1 ซม."
  },
  {
    "id": 1016,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1529",
    "name": "กระดาษการ์ดขาว A4 180g (50แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษการ์ดขาว A4 180g (50แผ่น)"
  },
  {
    "id": 1017,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1530",
    "name": "ถาดไม้ขนาด 30x23 ซม.",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ถาดไม้ขนาด 30x23 ซม."
  },
  {
    "id": 1018,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1531",
    "name": "ปากกาสีน้ำเงิน 0.7",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาสีน้ำเงิน 0.7"
  },
  {
    "id": 1019,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1532",
    "name": "ปากกาสีแดง 0.7",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาสีแดง 0.7"
  },
  {
    "id": 1020,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1533",
    "name": "แฟ้มใส่เอกสารสัน 3 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มใส่เอกสารสัน 3 นิ้ว"
  },
  {
    "id": 1021,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1534",
    "name": "เทปกาวย่น 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาวย่น 2 นิ้ว"
  },
  {
    "id": 1022,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1535",
    "name": "ตะกร้า (ใส่เอกสาร A4)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ตะกร้า (ใส่เอกสาร A4)"
  },
  {
    "id": 1023,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1536",
    "name": "คลิปดำ 110",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ 110"
  },
  {
    "id": 1024,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1537",
    "name": "คลิปดำ 109",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ 109"
  },
  {
    "id": 1025,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1538",
    "name": "คลิปดำ 111",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ 111"
  },
  {
    "id": 1026,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1539",
    "name": "กาวสองหน้าบาง 1 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวสองหน้าบาง 1 นิ้ว"
  },
  {
    "id": 1027,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1540",
    "name": "กาวลาเท็กซ์ขวดเล็ก",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวลาเท็กซ์ขวดเล็ก"
  },
  {
    "id": 1028,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1541",
    "name": "กระดาษปกสีเหลือง (100แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษปกสีเหลือง (100แผ่น)"
  },
  {
    "id": 1029,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1542",
    "name": "กระดาษวาดเขียนแบบหยาบ 100 ปอนด์ ขนาด A4 (50แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษวาดเขียนแบบหยาบ 100 ปอนด์ ขนาด A4 (50แผ่น)"
  },
  {
    "id": 1030,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1543",
    "name": "หมึกพิมพ์ HP85A Laserjet P1102",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกพิมพ์ HP85A Laserjet P1102"
  },
  {
    "id": 1031,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1544",
    "name": "แท่นใส่เทปใส - ม้วนใหญ่",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แท่นใส่เทปใส - ม้วนใหญ่"
  },
  {
    "id": 1032,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1545",
    "name": "สติกเกอร์ใสหลังเหลือง - ขนาดใหญ่",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สติกเกอร์ใสหลังเหลือง - ขนาดใหญ่"
  },
  {
    "id": 1033,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1547",
    "name": "กระดาษ Photo 150g - 50 แผ่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ Photo 150g - 50 แผ่น"
  },
  {
    "id": 1034,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1548",
    "name": "กระดาษปรู้ฟ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษปรู้ฟ"
  },
  {
    "id": 1035,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1549",
    "name": "ปากกาเมจิกสี - 12 สีต่อชุด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเมจิกสี - 12 สีต่อชุด"
  },
  {
    "id": 1036,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1550",
    "name": "เทปกาว 2 หน้าบาง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2 หน้าบาง"
  },
  {
    "id": 1037,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1551",
    "name": "เทปกาว 2 หน้าหนา",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2 หน้าหนา"
  },
  {
    "id": 1038,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1552",
    "name": "กระดาษการ์ดสี (ฟ้า, ชมพู, เขียว, เหลือง) สีละ 3 ห่อ - ห่อละ 100 แผ่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษการ์ดสี (ฟ้า, ชมพู, เขียว, เหลือง) สีละ 3 ห่อ - ห่อละ 100 แผ่น"
  },
  {
    "id": 1039,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1553",
    "name": "ใบมีดคัตเตอร์เล็ก",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ใบมีดคัตเตอร์เล็ก"
  },
  {
    "id": 1040,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1554",
    "name": "ใบมีดคัตเตอร์ใหญ่",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ใบมีดคัตเตอร์ใหญ่"
  },
  {
    "id": 1041,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1555",
    "name": "ปากกาน้ำเงิน Quantum รุ่น Gelo PlusXS",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาน้ำเงิน Quantum รุ่น Gelo PlusXS"
  },
  {
    "id": 1042,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1556",
    "name": "หมึกพิมพ์ Laser HP1079",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกพิมพ์ Laser HP1079"
  },
  {
    "id": 1043,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1557",
    "name": "แลกซีนสีดำ, สีน้ำเงิน, สีขาว สีละ 6 ม้วน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แลกซีนสีดำ, สีน้ำเงิน, สีขาว สีละ 6 ม้วน"
  },
  {
    "id": 1044,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1558",
    "name": "สติกเกอร์ใสแผ่นใหญ่ - เข้าเล่ม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สติกเกอร์ใสแผ่นใหญ่ - เข้าเล่ม"
  },
  {
    "id": 1045,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1559",
    "name": "กาวลาเท็กขวดใหญ่",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวลาเท็กขวดใหญ่"
  },
  {
    "id": 1046,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1560",
    "name": "เมาส์ สาย USB",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: เมาส์ สาย USB"
  },
  {
    "id": 1047,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1561",
    "name": "แป้นพิมพ์ สาย USB",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: แป้นพิมพ์ สาย USB"
  },
  {
    "id": 1048,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1563",
    "name": "แฟ้มพลาสติกกระดุมขาว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มพลาสติกกระดุมขาว"
  },
  {
    "id": 1049,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1564",
    "name": "คลิปดำขนาด 15 mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำขนาด 15 mm"
  },
  {
    "id": 1050,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1565",
    "name": "คลิปดำขนาด 25 mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำขนาด 25 mm"
  },
  {
    "id": 1051,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1566",
    "name": "คลิปดำขนาด 19 mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำขนาด 19 mm"
  },
  {
    "id": 1052,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1567",
    "name": "กาวแท่งสติก 8 กรัม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาวแท่งสติก 8 กรัม"
  },
  {
    "id": 1053,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1568",
    "name": "เครื่องเย็บเบอร์ 3 หลังเต่า",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเย็บเบอร์ 3 หลังเต่า"
  },
  {
    "id": 1054,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1569",
    "name": "กระดาษ A4 - Double A",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A4 - Double A"
  },
  {
    "id": 1055,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1570",
    "name": "แท่นประทับตราสีแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แท่นประทับตราสีแดง"
  },
  {
    "id": 1056,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1571",
    "name": "หมึกเติมแท่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: หมึกเติมแท่น"
  },
  {
    "id": 1057,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP1572",
    "name": "กล่องเก็บเอกสาร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กล่องเก็บเอกสาร"
  },
  {
    "id": 1058,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1573",
    "name": "กระดาษ A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A4"
  },
  {
    "id": 1059,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1574",
    "name": "กระดาษทราย เบอร์ (หยาบ)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษทราย เบอร์ (หยาบ)"
  },
  {
    "id": 1060,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1575",
    "name": "กระดาษทราย เบอร์ (ละเอียด)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษทราย เบอร์ (ละเอียด)"
  },
  {
    "id": 1061,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP1576",
    "name": "กรอบเกียรติบัตร ขนาด A4",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กรอบเกียรติบัตร ขนาด A4"
  },
  {
    "id": 1062,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1577",
    "name": "USB Wifi เสาอากาศ 2.4G + 5G",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: USB Wifi เสาอากาศ 2.4G + 5G"
  },
  {
    "id": 1063,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1578",
    "name": "กระดาษชาร์ทแข็งสีฟ้า",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษชาร์ทแข็งสีฟ้า"
  },
  {
    "id": 1064,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1579",
    "name": "กระดาษชาร์ทแข็งสีเขียว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษชาร์ทแข็งสีเขียว"
  },
  {
    "id": 1065,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1580",
    "name": "กระดาษชาร์ทแข็งสีแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษชาร์ทแข็งสีแดง"
  },
  {
    "id": 1066,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1581",
    "name": "กระดาษชาร์ทแข็งสีเหลือง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษชาร์ทแข็งสีเหลือง"
  },
  {
    "id": 1067,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1582",
    "name": "เชือกฝ้าย (ขาว-แดง)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เชือกฝ้าย (ขาว-แดง)"
  },
  {
    "id": 1068,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1583",
    "name": "ปากกาเมจิก 12 สี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเมจิก 12 สี"
  },
  {
    "id": 1069,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1584",
    "name": "ขนม",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ขนม"
  },
  {
    "id": 1070,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1586",
    "name": "ดินสอ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ดินสอ"
  },
  {
    "id": 1071,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1587",
    "name": "เชือกฟาง 4 สี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เชือกฟาง 4 สี"
  },
  {
    "id": 1072,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1588",
    "name": "แก้วพลาสติก PP",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: แก้วพลาสติก PP"
  },
  {
    "id": 1073,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP1589",
    "name": "ชุดโต๊ะ-เก้าอี้ นักเรียนมัธยม",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: ชุดโต๊ะ-เก้าอี้ นักเรียนมัธยม"
  },
  {
    "id": 1074,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1590",
    "name": "ที่ตักขยะ",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ที่ตักขยะ"
  },
  {
    "id": 1075,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1594",
    "name": "ปากกาน้ำเงิน Lancer",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาน้ำเงิน Lancer"
  },
  {
    "id": 1076,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1595",
    "name": "เทปกาว 2 หน้าแบบบาง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2 หน้าแบบบาง"
  },
  {
    "id": 1077,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1596",
    "name": "แท่นประทับตรา น้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แท่นประทับตรา น้ำเงิน"
  },
  {
    "id": 1078,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1597",
    "name": "หมึกเติมแท่น น้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: หมึกเติมแท่น น้ำเงิน"
  },
  {
    "id": 1079,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1599, VSP1756",
    "name": "เครื่องคิดเลข Casio DX-12B",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: เครื่องคิดเลข Casio DX-12B"
  },
  {
    "id": 1080,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1600",
    "name": "เทปกาว 2 หน้า แบบกว้าง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปกาว 2 หน้า แบบกว้าง"
  },
  {
    "id": 1081,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1601",
    "name": "ชุดแม่กุญแจกลาง 40mm",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ชุดแม่กุญแจกลาง 40mm"
  },
  {
    "id": 1082,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1602",
    "name": "ชุดแม่กุญแจเล็ก 30mm",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ชุดแม่กุญแจเล็ก 30mm"
  },
  {
    "id": 1083,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1603",
    "name": "ชุดแม่กุญแจใหญ่ 50mm",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ชุดแม่กุญแจใหญ่ 50mm"
  },
  {
    "id": 1084,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1604, VSP1743",
    "name": "ดินสอ 2B",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ดินสอ 2B"
  },
  {
    "id": 1085,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1606",
    "name": "ยางลบ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ยางลบ"
  },
  {
    "id": 1086,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1607",
    "name": "แปลงลบกระดาน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แปลงลบกระดาน"
  },
  {
    "id": 1087,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1608",
    "name": "เครื่องฉีดน้ำแรงดันสูง รุ่น SHI-90B 110บาร์ 1,200วัตต์ STARKE",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: เครื่องฉีดน้ำแรงดันสูง รุ่น SHI-90B 110บาร์ 1,200วัตต์ STARKE"
  },
  {
    "id": 1088,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1609",
    "name": "เทปโฟม 2 หน้าหนา 3M",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปโฟม 2 หน้าหนา 3M"
  },
  {
    "id": 1089,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP1611",
    "name": "กรอบเกียรติบัตรสีทอง A4",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กรอบเกียรติบัตรสีทอง A4"
  },
  {
    "id": 1090,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1612",
    "name": "กระดาษการ์ดใบเกียรติบัตรลายไทย",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษการ์ดใบเกียรติบัตรลายไทย"
  },
  {
    "id": 1091,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1613",
    "name": "ริบบิ้นผ้า 1 นิ้ว สีฟ้า",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ริบบิ้นผ้า 1 นิ้ว สีฟ้า"
  },
  {
    "id": 1092,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1614",
    "name": "ริบบิ้นผ้า 1 นิ้ว สีขาว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ริบบิ้นผ้า 1 นิ้ว สีขาว"
  },
  {
    "id": 1093,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1615",
    "name": "ลวดสีมัดปากถุง (แบน) สีฟ้า",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ลวดสีมัดปากถุง (แบน) สีฟ้า"
  },
  {
    "id": 1094,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1616",
    "name": "แจกันดอกไม้ปลอมกุหลาบแดง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แจกันดอกไม้ปลอมกุหลาบแดง"
  },
  {
    "id": 1095,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1617",
    "name": "ลูกโป่ง (50ใบ/แพ็ค) คละสี",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ลูกโป่ง (50ใบ/แพ็ค) คละสี"
  },
  {
    "id": 1096,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1618",
    "name": "กะละมัง",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กะละมัง"
  },
  {
    "id": 1097,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1619",
    "name": "แป้งแคร์ขวดใหญ่",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: แป้งแคร์ขวดใหญ่"
  },
  {
    "id": 1098,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1620",
    "name": "ลูกโป่งแดงล้วน (50ใบ/แพ็ค)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ลูกโป่งแดงล้วน (50ใบ/แพ็ค)"
  },
  {
    "id": 1099,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1621",
    "name": "ดินสอไม้",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ดินสอไม้"
  },
  {
    "id": 1100,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1623",
    "name": "ธงสีแดง 60x90 CM",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงสีแดง 60x90 CM"
  },
  {
    "id": 1101,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1624",
    "name": "ธงสีเหลือง 60x90 CM",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงสีเหลือง 60x90 CM"
  },
  {
    "id": 1102,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1625",
    "name": "ธงสีฟ้า 60x90 CM",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงสีฟ้า 60x90 CM"
  },
  {
    "id": 1103,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1626",
    "name": "ธงสีเขียว 60x90 CM",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงสีเขียว 60x90 CM"
  },
  {
    "id": 1104,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1627",
    "name": "ธงสีส้ม 60x90 CM",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงสีส้ม 60x90 CM"
  },
  {
    "id": 1105,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1628",
    "name": "ธงสีม่วง 60x90 CM",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงสีม่วง 60x90 CM"
  },
  {
    "id": 1106,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1629",
    "name": "ผ้าสแลนเขียว ขนาด 2X50 เมตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ผ้าสแลนเขียว ขนาด 2X50 เมตร"
  },
  {
    "id": 1107,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1630",
    "name": "ผ้าสแลนดำ ขนาด 2X50 เมตร",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ผ้าสแลนดำ ขนาด 2X50 เมตร"
  },
  {
    "id": 1108,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1686",
    "name": "โต๊ะปิงปอง MDF แกรนด์สปอร์ต 15มม",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: โต๊ะปิงปอง MDF แกรนด์สปอร์ต 15มม"
  },
  {
    "id": 1109,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1687",
    "name": "เสาและตาข่ายปิงปอง GS #Mach 378507",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เสาและตาข่ายปิงปอง GS #Mach 378507"
  },
  {
    "id": 1110,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1688",
    "name": "FBT ตะกร้าแชร์บอล พลาสติก 38402",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: FBT ตะกร้าแชร์บอล พลาสติก 38402"
  },
  {
    "id": 1111,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1689",
    "name": "MOLTEN ฟุตบอล F5N3400-TL เบอร์ 5",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: MOLTEN ฟุตบอล F5N3400-TL เบอร์ 5"
  },
  {
    "id": 1112,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1690",
    "name": "Mikasa วอลเล่ห์บอล V300W",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: Mikasa วอลเล่ห์บอล V300W"
  },
  {
    "id": 1113,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1691",
    "name": "ลูกวอลเล่ย์บอลชายหาด Mikasa BV550C",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกวอลเล่ย์บอลชายหาด Mikasa BV550C"
  },
  {
    "id": 1114,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1692",
    "name": "ลูกตะกร้อ Marathon MT201",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกตะกร้อ Marathon MT201"
  },
  {
    "id": 1115,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1693",
    "name": "ลูกตะกร้อ Marathon MT908",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกตะกร้อ Marathon MT908"
  },
  {
    "id": 1116,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1694",
    "name": "ตาข่ายตะกร้อ Marathon MN701",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ตาข่ายตะกร้อ Marathon MN701"
  },
  {
    "id": 1117,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1695",
    "name": "ลูกฟุตซอล F9N3100",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกฟุตซอล F9N3100"
  },
  {
    "id": 1118,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1696",
    "name": "ตาข่ายฟุตซอล",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ตาข่ายฟุตซอล"
  },
  {
    "id": 1119,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1697",
    "name": "ลูกเปตอง Marathon Tour/s72",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลูกเปตอง Marathon Tour/s72"
  },
  {
    "id": 1120,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1698",
    "name": "ตาข่ายกั้นลูกฟุตซอล ชนิดทนแรงดึงสูง ขนาด 7x20 เมตร",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ตาข่ายกั้นลูกฟุตซอล ชนิดทนแรงดึงสูง ขนาด 7x20 เมตร"
  },
  {
    "id": 1121,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1699",
    "name": "เกลียวเร่งงานหนัก TOHO ขนาด 7/8 นิ้ว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: เกลียวเร่งงานหนัก TOHO ขนาด 7/8 นิ้ว"
  },
  {
    "id": 1122,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1700",
    "name": "ลวดสลิง 6x12 ยาว 50 เมตร หนา 4มม",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ลวดสลิง 6x12 ยาว 50 เมตร หนา 4มม"
  },
  {
    "id": 1123,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1701",
    "name": "เครื่องเสียง JBL Partybox Encore Essential2",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: เครื่องเสียง JBL Partybox Encore Essential2"
  },
  {
    "id": 1124,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP1702",
    "name": "ผ้าพิมพ์ลายพื้นเมือง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ผ้าพิมพ์ลายพื้นเมือง"
  },
  {
    "id": 1125,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1703",
    "name": "เข็มหมุด ยี่ห้อ Crown Fox 1.5 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เข็มหมุด ยี่ห้อ Crown Fox 1.5 นิ้ว"
  },
  {
    "id": 1126,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1704",
    "name": "เทปใส 1/2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใส 1/2 นิ้ว"
  },
  {
    "id": 1127,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1705",
    "name": "ลวดขาวเบอร์ 18 (1 ม้วน/1 กก)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ลวดขาวเบอร์ 18 (1 ม้วน/1 กก)"
  },
  {
    "id": 1128,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1707",
    "name": "กรรไกรตัดผ้า หุ้มยาง 8 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กรรไกรตัดผ้า หุ้มยาง 8 นิ้ว"
  },
  {
    "id": 1129,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1708",
    "name": "โฟม 2 นิ้ว",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: โฟม 2 นิ้ว"
  },
  {
    "id": 1130,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1709",
    "name": "ไม้เสียบลูกชิ้น 10 นิ้ว",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ไม้เสียบลูกชิ้น 10 นิ้ว"
  },
  {
    "id": 1131,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1710",
    "name": "ตะปูดอกไม้ 1 นิ้ว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ตะปูดอกไม้ 1 นิ้ว"
  },
  {
    "id": 1132,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1711",
    "name": "ดอกไม้พลาสติก - ดอกไฮเดรนเยีย สีฟ้า",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ดอกไม้พลาสติก - ดอกไฮเดรนเยีย สีฟ้า"
  },
  {
    "id": 1133,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1712",
    "name": "ดอกไม้พลาสติก - ดอกไฮเดรนเยีย สีชมพู",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ดอกไม้พลาสติก - ดอกไฮเดรนเยีย สีชมพู"
  },
  {
    "id": 1134,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1713",
    "name": "ดอกไม้พลาสติก - ดอกกล้วยไม้แวนด้า",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ดอกไม้พลาสติก - ดอกกล้วยไม้แวนด้า"
  },
  {
    "id": 1135,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1714",
    "name": "ดอกไม้พลาสติก - ดอกลิลลี่เคลือบยางคละสี (ขาว, ชมพู, ส้ม)",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ดอกไม้พลาสติก - ดอกลิลลี่เคลือบยางคละสี (ขาว, ชมพู, ส้ม)"
  },
  {
    "id": 1136,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1715",
    "name": "ดอกไม้พลาสติก - ดอกกุหลาบพวง สีชมพูอ่อน",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ดอกไม้พลาสติก - ดอกกุหลาบพวง สีชมพูอ่อน"
  },
  {
    "id": 1137,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1716",
    "name": "ดอกไม้พลาสติก - ดอกกุหลาบพวง สีแดง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ดอกไม้พลาสติก - ดอกกุหลาบพวง สีแดง"
  },
  {
    "id": 1138,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1717",
    "name": "ดอกไม้พลาสติก - ดอกกุหลาบใหญ่",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ดอกไม้พลาสติก - ดอกกุหลาบใหญ่"
  },
  {
    "id": 1139,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1718",
    "name": "ดอกไม้พลาสติก - ดอกแซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ดอกไม้พลาสติก - ดอกแซม"
  },
  {
    "id": 1140,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1719",
    "name": "ดอกไม้พลาสติก - ดอกเดซี่กระดุม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ดอกไม้พลาสติก - ดอกเดซี่กระดุม"
  },
  {
    "id": 1141,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1720",
    "name": "ใบไม้ปลอม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ใบไม้ปลอม"
  },
  {
    "id": 1142,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1721",
    "name": "กุญแจทองเหลือง Solo 50mm",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กุญแจทองเหลือง Solo 50mm"
  },
  {
    "id": 1143,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1722",
    "name": "กระดาษปรู๊ฟ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษปรู๊ฟ"
  },
  {
    "id": 1144,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1723",
    "name": "ปากกาเคมี ชุด 12สี",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเคมี ชุด 12สี"
  },
  {
    "id": 1145,
    "categorySlug": "pantry-cleaning",
    "subcategorySlug": "",
    "code": "VSP1725",
    "name": "ผ้าต่วน สีแดง",
    "detail": "สินค้าอุปโภคบริโภคหรือของใช้ทั่วไป: ผ้าต่วน สีแดง"
  },
  {
    "id": 1146,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1726",
    "name": "สีสเปรย์ สีดำด้าน",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: สีสเปรย์ สีดำด้าน"
  },
  {
    "id": 1147,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1728",
    "name": "ตะปูเกลียว ยาว 1.5 นิ้ว",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: ตะปูเกลียว ยาว 1.5 นิ้ว"
  },
  {
    "id": 1148,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1729",
    "name": "แลกซีน 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แลกซีน 2 นิ้ว"
  },
  {
    "id": 1149,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1730",
    "name": "ปลั๊กไฟ 5 เมตร (มอก)",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟ 5 เมตร (มอก)"
  },
  {
    "id": 1150,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1731",
    "name": "ปลั๊กไฟ 10 เมตร (มอก)",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟ 10 เมตร (มอก)"
  },
  {
    "id": 1151,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1732",
    "name": "หมึกเติมปากกาไวท์บอร์ด PILOT สีน้ำเงิน",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: หมึกเติมปากกาไวท์บอร์ด PILOT สีน้ำเงิน"
  },
  {
    "id": 1152,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1733",
    "name": "ปากกาไวท์บอร์ด PILOT สีน้ำเงิน ปลายตัด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาไวท์บอร์ด PILOT สีน้ำเงิน ปลายตัด"
  },
  {
    "id": 1153,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1734",
    "name": "หมึก Brother TN2380",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก Brother TN2380"
  },
  {
    "id": 1154,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1735",
    "name": "หมึก Canon 2010 4สี",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก Canon 2010 4สี"
  },
  {
    "id": 1155,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1736",
    "name": "หมึก Brother DCPT420W",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึก Brother DCPT420W"
  },
  {
    "id": 1156,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1737",
    "name": "ที่หนีบกระดาษ Ocra (1000g)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ที่หนีบกระดาษ Ocra (1000g)"
  },
  {
    "id": 1157,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1738",
    "name": "กระดาษโฟโต้ 150g (100แผ่น)",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ 150g (100แผ่น)"
  },
  {
    "id": 1158,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1739",
    "name": "ปากกาเคมี สีน้ำเงินและแดง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเคมี สีน้ำเงินและแดง"
  },
  {
    "id": 1159,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1740",
    "name": "ปากกาเคมี สีดำ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเคมี สีดำ"
  },
  {
    "id": 1160,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1742",
    "name": "Post-it 3X3",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: Post-it 3X3"
  },
  {
    "id": 1161,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1744",
    "name": "แล็กซีนคละสี 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แล็กซีนคละสี 2 นิ้ว"
  },
  {
    "id": 1162,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1745",
    "name": "ปากกาน้ำเงิน Quantum 0.7mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาน้ำเงิน Quantum 0.7mm"
  },
  {
    "id": 1163,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1746",
    "name": "ปากกาแดง 0.7mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาแดง 0.7mm"
  },
  {
    "id": 1164,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1747",
    "name": "ปากกาดำ 0.7mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาดำ 0.7mm"
  },
  {
    "id": 1165,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1748",
    "name": "ตลับหมึกเครื่องพิมพ์เลเซอร์ HP107A",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: ตลับหมึกเครื่องพิมพ์เลเซอร์ HP107A"
  },
  {
    "id": 1166,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP1749",
    "name": "ตู้เหล็กเก็บเอกสารขนาด 90X90cm มีลิ้นชัก",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: ตู้เหล็กเก็บเอกสารขนาด 90X90cm มีลิ้นชัก"
  },
  {
    "id": 1167,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1750",
    "name": "EM (1กก)",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: EM (1กก)"
  },
  {
    "id": 1168,
    "categorySlug": "tools-equipment",
    "subcategorySlug": "other",
    "code": "VSP1751",
    "name": "กากน้ำตาล (1.5กก)",
    "detail": "อุปกรณ์หรือเครื่องมือสำหรับงานซ่อมบำรุง งานช่าง หรือดูแลพื้นที่: กากน้ำตาล (1.5กก)"
  },
  {
    "id": 1169,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1752",
    "name": "กระดาษโฟโต้ A4 150g 100 แผ่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษโฟโต้ A4 150g 100 แผ่น"
  },
  {
    "id": 1170,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1753",
    "name": "ปลั๊กไฟฟ้า 10 เมตร",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟฟ้า 10 เมตร"
  },
  {
    "id": 1171,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1754",
    "name": "เทปลบคำผิด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปลบคำผิด"
  },
  {
    "id": 1172,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1755, VSP1794",
    "name": "ยางลบ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ยางลบ"
  },
  {
    "id": 1173,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1757",
    "name": "เทปใสกว้าง 1 นิ้ว แกน 3 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใสกว้าง 1 นิ้ว แกน 3 นิ้ว"
  },
  {
    "id": 1174,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1758",
    "name": "หมึกเครื่องพิมพ์เอกสาร Canon G3010",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกเครื่องพิมพ์เอกสาร Canon G3010"
  },
  {
    "id": 1175,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1759",
    "name": "ซองน้ำตาลขนาด A4 ไม่ขยายข้าง 50 ซอง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ซองน้ำตาลขนาด A4 ไม่ขยายข้าง 50 ซอง"
  },
  {
    "id": 1176,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1760",
    "name": "คัตเตอร์ใหญ่",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คัตเตอร์ใหญ่"
  },
  {
    "id": 1177,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1761",
    "name": "คลิปหนีบกระดาษขนาด 10mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปหนีบกระดาษขนาด 10mm"
  },
  {
    "id": 1178,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1762",
    "name": "คลิปหนีบกระดาษขนาด 15mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปหนีบกระดาษขนาด 15mm"
  },
  {
    "id": 1179,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1763",
    "name": "สมุดนัมเบอร์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สมุดนัมเบอร์"
  },
  {
    "id": 1180,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1764",
    "name": "เครื่องเย็บกระดาษ เบอร์ 10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เครื่องเย็บกระดาษ เบอร์ 10"
  },
  {
    "id": 1181,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1765",
    "name": "แฟ้มเสนอเซ็นต์",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มเสนอเซ็นต์"
  },
  {
    "id": 1182,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1766",
    "name": "คลิปหนีบกระดาษ ขนาด 35mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปหนีบกระดาษ ขนาด 35mm"
  },
  {
    "id": 1183,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1767",
    "name": "คลิปหนีบกระดาษ ขนาด 50mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปหนีบกระดาษ ขนาด 50mm"
  },
  {
    "id": 1184,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1768",
    "name": "ชุดธูปไฟฟ้าแบบเสียบปลั๊ก",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ชุดธูปไฟฟ้าแบบเสียบปลั๊ก"
  },
  {
    "id": 1185,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1769",
    "name": "ไมโครโฟนแบบสาย Shure SV200",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ไมโครโฟนแบบสาย Shure SV200"
  },
  {
    "id": 1186,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1770",
    "name": "ถ่านขนาด AA แพ็คละ 2 ก้อน",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านขนาด AA แพ็คละ 2 ก้อน"
  },
  {
    "id": 1187,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1771",
    "name": "ถ่านขนาด AAA แพ็คละ 2 ก้อน",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ถ่านขนาด AAA แพ็คละ 2 ก้อน"
  },
  {
    "id": 1188,
    "categorySlug": "office-furniture",
    "subcategorySlug": "",
    "code": "VSP1772",
    "name": "กล่องเก็บเอกสาร 3 ชั้น ORCA",
    "detail": "เฟอร์นิเจอร์สำหรับจัดพื้นที่ทำงานและจัดเก็บ: กล่องเก็บเอกสาร 3 ชั้น ORCA"
  },
  {
    "id": 1189,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1773",
    "name": "กล่องใส่แฟ้ม 3 ช่อง",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กล่องใส่แฟ้ม 3 ช่อง"
  },
  {
    "id": 1190,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1775",
    "name": "กระดาษ Photo 150g 100แผ่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ Photo 150g 100แผ่น"
  },
  {
    "id": 1191,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1776",
    "name": "กระดาษ A4 สีฟ้าและสีชมพู",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ A4 สีฟ้าและสีชมพู"
  },
  {
    "id": 1192,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1777",
    "name": "แฟ้มเอกสารขนาด 3นิ้ว ตราช้างสีดำ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มเอกสารขนาด 3นิ้ว ตราช้างสีดำ"
  },
  {
    "id": 1193,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1778",
    "name": "หมึกเติม 4 สี Canon Pixma G3010",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกเติม 4 สี Canon Pixma G3010"
  },
  {
    "id": 1194,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1779",
    "name": "แฟ้มเสนอเซ็นต์ สีเขียว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มเสนอเซ็นต์ สีเขียว"
  },
  {
    "id": 1195,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1780",
    "name": "โพสอิท แบบเส้น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: โพสอิท แบบเส้น"
  },
  {
    "id": 1196,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1781",
    "name": "โพสอิท 3X3 สีเขียว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: โพสอิท 3X3 สีเขียว"
  },
  {
    "id": 1197,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1782",
    "name": "คลิปดำ 108",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ 108"
  },
  {
    "id": 1198,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1783",
    "name": "คลิปดำ 109",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ 109"
  },
  {
    "id": 1199,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1784",
    "name": "คลิปดำ 110",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ 110"
  },
  {
    "id": 1200,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1785",
    "name": "คลิปดำ 111",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ 111"
  },
  {
    "id": 1201,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1786",
    "name": "คลิปดำ 112",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: คลิปดำ 112"
  },
  {
    "id": 1202,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1787",
    "name": "สันรูด 5mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สันรูด 5mm"
  },
  {
    "id": 1203,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1788",
    "name": "สันรูด 7mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สันรูด 7mm"
  },
  {
    "id": 1204,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1789",
    "name": "สันรูด 10mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สันรูด 10mm"
  },
  {
    "id": 1205,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1790",
    "name": "ปากกาลูกลื่น 0.7mm",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลูกลื่น 0.7mm"
  },
  {
    "id": 1206,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1793",
    "name": "ปากกาเน้นคำสีเหลือง Softy",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาเน้นคำสีเหลือง Softy"
  },
  {
    "id": 1207,
    "categorySlug": "computer-it",
    "subcategorySlug": "",
    "code": "VSP1795",
    "name": "หมึกเติม Pixma Canon790 4สี",
    "detail": "อุปกรณ์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ: หมึกเติม Pixma Canon790 4สี"
  },
  {
    "id": 1208,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1796",
    "name": "กระดาษ Photo 150g 100 แผ่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษ Photo 150g 100 แผ่น"
  },
  {
    "id": 1209,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1797",
    "name": "แผ่นเคลือบ A4",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แผ่นเคลือบ A4"
  },
  {
    "id": 1210,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1799",
    "name": "แม็กเย็บกระดาษ เบอร์ 10",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แม็กเย็บกระดาษ เบอร์ 10"
  },
  {
    "id": 1211,
    "categorySlug": "office-electronics",
    "subcategorySlug": "",
    "code": "VSP1800",
    "name": "ปลั๊กไฟ 3รู 10เมตร",
    "detail": "อุปกรณ์อิเล็กทรอนิกส์สำหรับงานสำนักงานหรือกิจกรรม: ปลั๊กไฟ 3รู 10เมตร"
  },
  {
    "id": 1212,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1801",
    "name": "กาว 2 หน้า บาง 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาว 2 หน้า บาง 2 นิ้ว"
  },
  {
    "id": 1213,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1802",
    "name": "กาว 2 หน้า หนา 2 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กาว 2 หน้า หนา 2 นิ้ว"
  },
  {
    "id": 1214,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1803",
    "name": "เทปใสม้วนใหญ่",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เทปใสม้วนใหญ่"
  },
  {
    "id": 1215,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP1806",
    "name": "ธงชาติผ้าร่ม เบอร์ 4 40X60ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงชาติผ้าร่ม เบอร์ 4 40X60ซม"
  },
  {
    "id": 1216,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP1807",
    "name": "ธงชาติผ้าร่ม 80X120ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงชาติผ้าร่ม 80X120ซม"
  },
  {
    "id": 1217,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1808",
    "name": "ดอกไม้ปลอม ช่อกุหลาบขาว 3 หัว",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ดอกไม้ปลอม ช่อกุหลาบขาว 3 หัว"
  },
  {
    "id": 1218,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1809",
    "name": "พานลาว สีทอง 16ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: พานลาว สีทอง 16ซม"
  },
  {
    "id": 1219,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1810",
    "name": "สมุดลงนามถวายความอาลัย",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: สมุดลงนามถวายความอาลัย"
  },
  {
    "id": 1220,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1811",
    "name": "ปากกาลงนามตั้งโต๊ะ",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: ปากกาลงนามตั้งโต๊ะ"
  },
  {
    "id": 1221,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1812",
    "name": "เครื่องทองน้อย 16ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: เครื่องทองน้อย 16ซม"
  },
  {
    "id": 1222,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP1813",
    "name": "ธงประจำกองยุวกาชาด ผ้าร่ม 80X120ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงประจำกองยุวกาชาด ผ้าร่ม 80X120ซม"
  },
  {
    "id": 1223,
    "categorySlug": "office-supplies",
    "subcategorySlug": "uniform-event",
    "code": "VSP1814",
    "name": "ธงมาตรฐานยุวกาชาด ผ้าร่ม 80X120ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงมาตรฐานยุวกาชาด ผ้าร่ม 80X120ซม"
  },
  {
    "id": 1224,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP1815",
    "name": "ขาตั้งกรอบรูป สูง 1.5ม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ขาตั้งกรอบรูป สูง 1.5ม"
  },
  {
    "id": 1225,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1816",
    "name": "ธงมาตรฐานยุวกาชาด ธงตั้งโต๊ะ 20X35ซม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงมาตรฐานยุวกาชาด ธงตั้งโต๊ะ 20X35ซม"
  },
  {
    "id": 1226,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1817",
    "name": "เข็มยุวกาชาด",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: เข็มยุวกาชาด"
  },
  {
    "id": 1227,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1818",
    "name": "ธงสามเหลี่ยมแบบมีก้าน สีเหลือง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงสามเหลี่ยมแบบมีก้าน สีเหลือง"
  },
  {
    "id": 1228,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1819",
    "name": "ธงสามเหลี่ยมแบบมีก้าน สีชมพู",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงสามเหลี่ยมแบบมีก้าน สีชมพู"
  },
  {
    "id": 1229,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1820",
    "name": "ธงสามเหลี่ยมแบบมีก้าน สีเขียว",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงสามเหลี่ยมแบบมีก้าน สีเขียว"
  },
  {
    "id": 1230,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1821",
    "name": "ธงสามเหลี่ยมแบบมีก้าน สีส้ม",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงสามเหลี่ยมแบบมีก้าน สีส้ม"
  },
  {
    "id": 1231,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1822",
    "name": "ธงสามเหลี่ยมแบบมีก้าน สีฟ้า",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงสามเหลี่ยมแบบมีก้าน สีฟ้า"
  },
  {
    "id": 1232,
    "categorySlug": "office-supplies",
    "subcategorySlug": "other",
    "code": "VSP1823",
    "name": "ธงสามเหลี่ยมแบบมีก้าน สีม่วง",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: ธงสามเหลี่ยมแบบมีก้าน สีม่วง"
  },
  {
    "id": 1233,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1824",
    "name": "แฟ้มเอกสารสันกว้าง 3 นิ้ว",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: แฟ้มเอกสารสันกว้าง 3 นิ้ว"
  },
  {
    "id": 1234,
    "categorySlug": "office-supplies",
    "subcategorySlug": "document-office",
    "code": "VSP1825",
    "name": "กล่องอเนกประสงค์พร้อมล้อและฝาล็อก 100 ลิตร",
    "detail": "อุปกรณ์สำนักงานหรือของใช้ประกอบกิจกรรม: กล่องอเนกประสงค์พร้อมล้อและฝาล็อก 100 ลิตร"
  },
  {
    "id": 1235,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1826",
    "name": "กระดาษปกสี 120g - 100 แผ่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษปกสี 120g - 100 แผ่น"
  },
  {
    "id": 1236,
    "categorySlug": "stationery-paper",
    "subcategorySlug": "paper-files",
    "code": "VSP1827",
    "name": "กระดาษการ์ดขาว 150g - 100 แผ่น",
    "detail": "เครื่องเขียน สื่อการเรียน หรือวัสดุกระดาษ: กระดาษการ์ดขาว 150g - 100 แผ่น"
  }
] as const satisfies readonly Product[];

export function getCategoryBySlug(slug: string) {
  return categoryMeta.find((category) => category.slug === slug);
}

export function getProductsByCategorySlug(slug: string) {
  return products.filter((product) => product.categorySlug === slug);
}

export function getSubcategoryGroups(slug: string) {
  return subcategoryMeta[slug] ?? [];
}
