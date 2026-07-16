import SiteHeader from "@/components/SiteHeader";

const categories = [
  {
    name: "อุปกรณ์สำนักงานเบ็ดเตล็ด",
    description: "เครื่องใช้ประจำสำนักงาน อุปกรณ์โต๊ะทำงาน และของใช้ทั่วไป",
    image: "/category-office-supplies.png",
    slug: "office-supplies",
  },
  {
    name: "อุปกรณ์สำนักงานอิเล็กทรอนิกส์",
    description: "เครื่องคิดเลข โทรศัพท์ ปลั๊กไฟ และอุปกรณ์ไฟฟ้าในสำนักงาน",
    image: "/category-office-electronics.png",
    slug: "office-electronics",
  },
  {
    name: "เฟอร์นิเจอร์สำนักงาน",
    description: "โต๊ะ เก้าอี้ ตู้เอกสาร ชั้นวาง และเฟอร์นิเจอร์สำหรับออฟฟิศ",
    image: "/category-office-furniture.png",
    slug: "office-furniture",
  },
  {
    name: "อุปกรณ์และเครื่องมือ",
    description: "เครื่องมือช่าง อุปกรณ์ซ่อมบำรุง อุปกรณ์เซฟตี้ และของใช้หน้างาน",
    image: "/category-tools-equipment.png",
    slug: "tools-equipment",
  },
  {
    name: "เครื่องดื่ม เครื่องใช้ และผลิตภัณฑ์อื่นๆ",
    description: "สินค้าแคนทีน ผลิตภัณฑ์ทำความสะอาด และของใช้ประจำอาคาร",
    image: "/category-pantry-cleaning.png",
    slug: "pantry-cleaning",
  },
  {
    name: "อุปกรณ์เครื่องเขียน และผลิตภัณฑ์กระดาษ",
    description: "ปากกา แฟ้ม สมุด กระดาษ แบบฟอร์ม และอุปกรณ์งานเอกสาร",
    image: "/category-stationery-paper.png",
    slug: "stationery-paper",
  },
  {
    name: "ผลิตภัณฑ์สำหรับคอมพิวเตอร์และไอทีต่างๆ",
    description: "อุปกรณ์ต่อพ่วง หมึกพิมพ์ สายเคเบิล และสินค้าไอทีสำนักงาน",
    image: "/category-computer-it.png",
    slug: "computer-it",
  },
  {
    name: "ผลิตภัณฑ์สำหรับโซล่าร์รูฟท็อป",
    description: "อุปกรณ์พลังงาน ระบบติดตั้ง และสินค้าเกี่ยวกับ solar rooftop",
    image: "/category-solar-rooftop.png",
    slug: "solar-rooftop",
    featured: true,
  },
];

const promoCards = [
  {
    title: "ลูกค้าองค์กร หน่วยงาน",
    text: "ส่งรายการจัดซื้อให้ทีมงานช่วยตรวจสินค้า จัดหมวด และออกใบเสนอราคา",
    tone: "orange",
  },
  {
    title: "สินค้าครบสำหรับออฟฟิศ",
    text: "สำนักงาน ไอที เครื่องมือ เฟอร์นิเจอร์ แคนทีน และโซล่าร์รูฟท็อป",
    tone: "colorful",
  },
];

export default function Home() {
  return (
    <main className="page-shell" id="top">
      <SiteHeader />

      <section className="hero-banner" aria-label="V Power Plus Shop Online">
        <div className="hero-copy">
          <p className="hero-kicker">ช้อปง่ายๆ ขอใบเสนอราคาได้ตลอด 24 ชั่วโมง</p>
          <h1>
            <span>VPP</span>
            <strong>SHOP</strong>
          </h1>
          <p className="hero-subtitle">V Power Plus Catalog Online</p>
          <p className="hero-text">
            เลือกหมวดสินค้า เพิ่มรายการที่ต้องการ แล้วส่งคำขอใบเสนอราคาให้ทีม V Power Plus
            ดูแลต่ออย่างเป็นระบบสำหรับลูกค้าทั่วไป สถานศึกษา องค์กร และหน่วยงานราชการ
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#quote">
              ขอใบเสนอราคาเลย
            </a>
            <a className="secondary-button" href="#categories">
              ดูหมวดสินค้า
            </a>
          </div>
        </div>

        <div className="hero-display" aria-hidden="true">
          <div className="product-stage">
            <div className="stage-shadow" />
            <img className="stage-item paper" src="/category-stationery-paper.png" alt="" />
            <img className="stage-item tools" src="/category-tools-equipment.png" alt="" />
            <img className="stage-item it" src="/category-computer-it.png" alt="" />
            <img className="stage-item solar" src="/category-solar-rooftop.png" alt="" />
            <div className="hero-burst">
              <span>สินค้าครบ</span>
              <strong>8 หมวด</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="promo-grid" id="corporate" aria-label="บริการสำหรับลูกค้า">
        {promoCards.map((card) => (
          <article className={`promo-card ${card.tone}`} key={card.title}>
            <div>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <a href="#quote">ส่งรายการให้ทีมงาน</a>
            </div>
            <div className="promo-art" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </article>
        ))}
      </section>

      <section className="app-strip" id="app" aria-label="V Power Plus App">
        <div>
          <p className="quote-kicker">V Power Plus App</p>
          <h2>เตรียมรายการสินค้าและขอใบเสนอราคาได้สะดวกขึ้น</h2>
        </div>
        <div className="app-actions">
          <a className="employee-app-button" href="https://app.vpowerplus.tech">
            App VPP Employee Only
          </a>
          <a className="secondary-button" href="#quote">
            ติดต่อสอบถาม App
          </a>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-title">
          <span aria-hidden="true">+</span>
          <h2>เกี่ยวกับเรา</h2>
        </div>
        <div className="about-content">
          <p>
            <strong>V Power Plus</strong> (วีพาวเวอร์พลัส) ร้านจำหน่ายสินค้าอุปกรณ์หลากหลายเช่น
            อุปกรณ์สำนักงาน ไอที เครื่องมือ เฟอร์นิเจอร์ และโซล่าร์รูฟท็อป พร้อมให้บริการลูกค้าทั่วไป
            สถานศึกษา องค์กร และหน่วยงานราชการต่างๆ ด้วยสินค้าหลายหมวดหมู่ที่ตอบโจทย์การใช้งานในที่เดียว
          </p>
          <p>
            ร้านตั้งอยู่ที่ <strong>อ.เมือง จ.หนองบัวลำภู</strong> เส้นหน้าวัดโพธิ์ หรือเส้นโรงพยาบาลหมอวีระพล
            หากเดินทางมาจากโรงพยาบาลหรือวัด ให้ผ่านสี่แยกไฟแดง แล้วร้านจะอยู่ฝั่งซ้ายมือ
            ห่างจากแยกประมาณ 200 เมตร ยินดีต้อนรับลูกค้าทุกท่านครับ/ค่ะ
          </p>
        </div>
      </section>

      <section className="category-section" id="categories">
        <div className="section-title">
          <span aria-hidden="true">+</span>
          <h2>หมวดหมู่สินค้า</h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <article className={category.featured ? "category-card solar-card" : "category-card"} key={category.name}>
              <a href={`/categories/${category.slug}`} aria-label={`${category.name} ดูรายการสินค้า`}>
                <span className="category-image">
                  <img src={category.image} alt="" />
                </span>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-panel" id="articles">
        <div className="quote-copy">
          <p className="quote-kicker">บทความ</p>
          <h2>แนวทางเลือกสินค้าให้เหมาะกับงานจัดซื้อ</h2>
          <p>
            รวมคำแนะนำเบื้องต้นสำหรับการเลือกอุปกรณ์สำนักงาน ไอที เครื่องมือ เฟอร์นิเจอร์
            และสินค้าโซล่าร์รูฟท็อป เพื่อช่วยให้จัดเตรียมรายการขอใบเสนอราคาได้ง่ายขึ้น
          </p>
        </div>
        <div className="article-list" aria-label="รายการบทความ">
          <article>
            <strong>เตรียมรายการขอใบเสนอราคาอย่างไรให้ทีมงานประเมินได้เร็ว</strong>
            <span>ระบุหมวด จำนวน รุ่นที่ต้องการ และสถานที่จัดส่งให้ครบถ้วน</span>
          </article>
          <article>
            <strong>เลือกอุปกรณ์สำนักงานสำหรับองค์กรควรดูอะไรบ้าง</strong>
            <span>พิจารณาการใช้งานจริง ความคุ้มค่า และการจัดซื้อซ้ำในอนาคต</span>
          </article>
        </div>
      </section>

      <section className="quote-panel" id="quote">
        <div className="quote-copy">
          <p className="quote-kicker">Request a quotation</p>
          <h2>มีรายการสินค้าอยู่แล้ว?</h2>
          <p>
            ส่งชื่อบริษัท เบอร์โทร หรือ LINE พร้อมรายละเอียดสินค้าเบื้องต้น
            ทีมงาน V Power Plus จะติดต่อกลับพร้อมใบเสนอราคา
          </p>
          <div className="quote-steps" aria-label="ขั้นตอนขอใบเสนอราคา">
            <span>01 เลือกสินค้า</span>
            <span>02 ส่งรายการ</span>
            <span>03 รับใบเสนอราคา</span>
          </div>
          <div className="contact-card">
            <strong>Contact Center</strong>
            <span>Tel: (083) 178-6446 (คุณรุ้ง), (061) 057-8761 (คุณกิม)</span>
            <span>Email: VPowerPlusTH@gmail.com</span>
          </div>
        </div>

        <form className="quote-form" aria-label="ฟอร์มขอใบเสนอราคา">
          <label>
            ชื่อ / บริษัท
            <input type="text" placeholder="เช่น บริษัท วีพาวเวอร์ จำกัด" />
          </label>
          <label>
            เบอร์โทร / LINE
            <input type="text" placeholder="เบอร์โทร หรือ LINE ID" />
          </label>
          <label className="full">
            รายการสินค้าที่ต้องการ
            <textarea placeholder="ระบุหมวดสินค้า จำนวน หรือแนบรายการภายหลัง" />
          </label>
          <button type="button">ส่งคำขอใบเสนอราคา</button>
        </form>
      </section>

      <footer className="site-footer">
        <div>
          <strong>V Power Plus วีพาวเวอร์พลัส</strong>
          <span>อุปกรณ์สำนักงาน ไอที เครื่องมือ เฟอร์นิเจอร์ และโซล่าร์รูฟท็อป</span>
        </div>
        <div>
          <span>Tel: (083) 178-6446 (คุณรุ้ง)</span>
          <span>Tel: (061) 057-8761 (คุณกิม)</span>
          <span>Email: VPowerPlusTH@gmail.com</span>
        </div>
      </footer>
    </main>
  );
}
