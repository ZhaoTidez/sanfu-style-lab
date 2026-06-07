import { categories } from "../data/demoData.js";

export default function CategoryTabs({ selectedCategory, onSelectCategory }) {
  return (
    <section>
      <div className="mb-3 flex items-end justify-between">
        <div>
          <p className="text-xs font-black text-black/45">STEP 03</p>
          <h3 className="font-black">实验品类</h3>
        </div>
        <span className="rounded-full bg-[#ffdf3d] px-3 py-1 text-[11px] font-black">
          叠图层
        </span>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap">
        {categories.map((category) => {
          const active = category.id === selectedCategory.id;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className={`shrink-0 rounded-full border px-3 py-2 text-xs font-black transition ${
                active
                  ? "border-black bg-[#ff2d9b] text-white shadow-[3px_3px_0_#151515]"
                  : "border-black/10 bg-white/65 text-black/60 hover:border-black/25"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}
