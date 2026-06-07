import { ClipboardList } from "lucide-react";
import { categories } from "../data/demoData.js";

export default function OutfitList({ selectedItems }) {
  const selectedCount = Object.keys(selectedItems).length;

  return (
    <div className="mt-3 rounded-[24px] border border-black/8 bg-white/58 p-3">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-4 w-4 text-[#21d9ff]" />
          <h3 className="text-sm font-black">当前搭配清单</h3>
        </div>
        <span className="rounded-full bg-black px-3 py-1 text-[11px] font-black text-white">
          {selectedCount} 件
        </span>
      </div>
      <p className="mb-3 text-xs font-bold text-black/50">已搭出 {selectedCount} 件生活灵感单品</p>
      <div className="grid gap-2">
        {categories.map((category) => {
          const item = selectedItems[category.id];
          return (
            <div
              key={category.id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-black/6 bg-white/62 px-3 py-2"
            >
              <span className="shrink-0 text-xs font-black text-black/48">{category.name}</span>
              <span
                className={`truncate text-right text-xs font-black ${
                  item ? "text-black" : "text-black/28"
                }`}
              >
                {item ? item.name : "待搭"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
