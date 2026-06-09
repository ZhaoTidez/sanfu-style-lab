import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CategoryTabs({
  categories,
  selectedGender,
  selectedCategory,
  onSelectCategory,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const outfitCategory = categories.find((category) => category.id === "outfits");
  const standardCategories = categories.filter((category) => category.id !== "outfits");

  const selectCategory = (category) => {
    onSelectCategory(category);
    setIsOpen(false);
  };

  return (
    <section className="min-w-0 shrink-0 rounded-[18px] border border-black/8 bg-white/58 px-3 py-2">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="min-w-0">
          <span className="block text-[10px] font-black text-black/40">STEP 03</span>
          <span className="block truncate text-sm font-black leading-5">潮搭频道</span>
        </span>
        <span className="flex min-w-0 items-center gap-2">
          <span
            className={`max-w-[120px] truncate rounded-full px-2.5 py-1 text-[10px] font-black ${
              selectedGender ? "bg-[#ff2d9b] text-white" : "bg-black/5 text-black/35"
            }`}
          >
            {selectedGender ? selectedCategory.name : "先选角色"}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-black/48 transition ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {isOpen &&
        (selectedGender ? (
          <div className="mt-2 flex flex-col gap-1.5">
            {outfitCategory && (
              <button
                key={outfitCategory.id}
                onClick={() => selectCategory(outfitCategory)}
                className={`min-w-0 truncate rounded-[16px] border px-3 py-2.5 text-xs font-black transition ${
                  outfitCategory.id === selectedCategory.id
                    ? "border-black bg-[#ff2d9b] text-white shadow-[3px_3px_0_#151515]"
                    : "border-black/10 bg-white/78 text-black/68 hover:border-black/25"
                }`}
              >
                {outfitCategory.name}
              </button>
            )}
            <div className="grid grid-cols-2 gap-1.5">
              {standardCategories.map((category) => {
                const active = category.id === selectedCategory.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => selectCategory(category)}
                    className={`min-w-0 truncate rounded-full border px-3 py-2 text-xs font-black transition ${
                      active
                        ? "border-black bg-[#ff2d9b] text-white shadow-[3px_3px_0_#151515]"
                        : "border-black/10 bg-white/70 text-black/60 hover:border-black/25"
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="mt-2 rounded-[16px] border border-dashed border-black/12 bg-white/58 px-3 py-3 text-xs font-bold leading-5 text-black/45">
            选择性别后，会出现对应性别的套装、服装和配饰品类。
          </div>
        ))}
    </section>
  );
}
