import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const pageSize = 4;

export default function CategoryTabs({
  categories,
  selectedGender,
  selectedCategory,
  onSelectCategory,
}) {
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
      return;
    }

    const selectedIndex = categories.findIndex((category) => category.id === selectedCategory.id);
    if (selectedIndex >= 0) {
      setPage(Math.floor(selectedIndex / pageSize));
    }
  }, [categories, selectedCategory, selectedGender]);

  const goPrev = () => setPage((value) => Math.max(0, value - 1));
  const goNext = () => setPage((value) => Math.min(pageCount - 1, value + 1));

  return (
    <section className="min-w-0 shrink-0">
      <div className="mb-2 flex items-end justify-between gap-2">
        <div>
          <p className="text-xs font-black text-black/45">STEP 03</p>
          <h3 className="font-black leading-5">实验品类</h3>
        </div>
        {selectedGender && pageCount > 1 && (
          <div className="flex items-center gap-1">
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
      </div>
      {selectedGender ? (
        <div className="grid grid-cols-2 gap-1.5">
          {visibleCategories.map((category) => {
            const active = category.id === selectedCategory.id;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category)}
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
      ) : (
        <div className="rounded-[16px] border border-dashed border-black/12 bg-white/58 px-3 py-3 text-xs font-bold leading-5 text-black/45">
          选择性别后，会出现对应性别的套装、服装和配饰品类。
        </div>
      )}
    </section>
  );
}
