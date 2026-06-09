import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const pageSize = 4;

export default function CategoryTabs({
  categories,
  selectedGender,
  selectedCategory,
  onSelectCategory,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(categories.length / pageSize));
  const currentPage = Math.min(page, pageCount - 1);
  const visibleCategories = useMemo(
    () => categories.slice(currentPage * pageSize, currentPage * pageSize + pageSize),
    [categories, currentPage],
  );

  useEffect(() => {
    if (!selectedGender || !selectedCategory) {
      setPage(0);
      setIsOpen(false);
      return;
    }

    const selectedIndex = categories.findIndex((category) => category.id === selectedCategory.id);
    if (selectedIndex >= 0) {
      setPage(Math.floor(selectedIndex / pageSize));
    }
  }, [categories, selectedCategory, selectedGender]);

  const goPrev = () => setPage((value) => Math.max(0, value - 1));
  const goNext = () => setPage((value) => Math.min(pageCount - 1, value + 1));

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
          <span className="block truncate text-sm font-black leading-5">实验品类</span>
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
          <div className="mt-2">
            {pageCount > 1 && (
              <div className="mb-2 flex items-center justify-end gap-1">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={currentPage === 0}
                  aria-label="上一页品类"
                  className="rounded-full border border-black/10 bg-white p-1.5 text-black transition disabled:cursor-not-allowed disabled:text-black/20"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-[10px] font-black text-black/42">
                  {currentPage + 1}/{pageCount}
                </span>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={currentPage >= pageCount - 1}
                  aria-label="下一页品类"
                  className="rounded-full border border-black/10 bg-white p-1.5 text-black transition disabled:cursor-not-allowed disabled:text-black/20"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
            <div className="grid grid-cols-2 gap-1.5">
              {visibleCategories.map((category) => {
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
