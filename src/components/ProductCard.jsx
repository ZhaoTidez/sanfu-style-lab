import { Plus, Sparkle } from "lucide-react";
import { categories, styles } from "../data/demoData.js";

function MiniProductVisual({ product }) {
  return (
    <div className="relative h-28 overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-white via-[#f7fbff] to-[#ecf8ff]">
      <div
        className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[24px] border-2 border-black shadow-[5px_5px_0_rgba(0,0,0,.14)]"
        style={{ backgroundColor: product.layerColor }}
      />
      <div
        className="absolute bottom-4 right-7 h-9 w-9 rotate-[14deg] rounded-full border-2 border-black"
        style={{ backgroundColor: product.accentColor }}
      />
      <div className="absolute left-4 top-4 rounded-full border border-black/10 bg-white/75 px-2 py-1 text-[10px] font-black">
        {product.image}
      </div>
    </div>
  );
}

export default function ProductCard({ product, isSelected, isRecommended, onSelect }) {
  const categoryName = categories.find((category) => category.id === product.category)?.name;
  const tagNames = product.styleTags
    .map((tag) => styles.find((style) => style.id === tag)?.name)
    .filter(Boolean)
    .slice(0, 2);

  return (
    <button
      onClick={onSelect}
      className={`group rounded-[24px] border p-2 text-left transition duration-300 hover:-translate-y-1 ${
        isSelected
          ? "border-black bg-white shadow-[6px_6px_0_#151515]"
          : "border-black/10 bg-white/62 hover:border-[#ff2d9b]/70 hover:shadow-neon"
      }`}
    >
      <MiniProductVisual product={product} />
      <div className="px-1 pt-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-black leading-5">{product.name}</p>
            <p className="mt-0.5 text-[11px] font-bold text-black/45">{categoryName}</p>
          </div>
          <span
            className={`rounded-full p-1.5 ${
              isSelected ? "bg-black text-white" : "bg-[#ffdf3d] text-black"
            }`}
          >
            <Plus className="h-3.5 w-3.5" />
          </span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {isRecommended && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#a8ff2d] px-2 py-1 text-[10px] font-black">
              <Sparkle className="h-3 w-3" />
              推荐
            </span>
          )}
          {tagNames.map((tag) => (
            <span key={tag} className="rounded-full bg-black/5 px-2 py-1 text-[10px] font-black text-black/55">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-2 text-xs font-semibold leading-5 text-black/58">{product.comment}</p>
      </div>
    </button>
  );
}
