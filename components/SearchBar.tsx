import { categoryMeta } from "@/data/products";

type SearchBarProps = {
  defaultQuery?: string;
  defaultCategory?: string;
  id?: string;
};

export default function SearchBar({ defaultQuery = "", defaultCategory = "all", id = "site-search" }: SearchBarProps) {
  return (
    <form className="search-bar" role="search" aria-label="ค้นหาสินค้า" action="/search" method="get">
      <label className="sr-only" htmlFor={id}>
        ค้นหาสินค้า
      </label>
      <input
        id={id}
        name="q"
        type="search"
        defaultValue={defaultQuery}
        placeholder="ชื่อสินค้า หรือ รหัสสินค้า"
      />
      <select aria-label="เลือกหมวดหมู่" name="category" defaultValue={defaultCategory}>
        <option value="all">หมวดหมู่ทั้งหมด</option>
        {categoryMeta.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="submit" aria-label="ค้นหา">
        ⌕
      </button>
    </form>
  );
}
