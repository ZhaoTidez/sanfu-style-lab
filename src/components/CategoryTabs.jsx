import { categories } from "../data/demoData.js";

export default function CategoryTabs({ selectedCategory, onSelectCategory }) {
  return (
    <section className="min-w-0">
      <div className="mb-3 flex items-end justify-between">
        <div>
          <p className="text-xs font-black text-black/45">STEP 03</p>
          <h3 className="font-black">实验品类</h3>
        </div>
        <span className="rounded-full bg-[#ffdf3d] px-3 py-1 text-[11px] font-black">
          叠图层
        </span>
      </div>
      <div className="-mx-3 flex max-w-[calc(100%+1.5rem)] gap-2 overflow-x-auto px-3 pb-1 lg:mx-0 lg:max-w-full lg:flex-wrap lg:px-0">
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
