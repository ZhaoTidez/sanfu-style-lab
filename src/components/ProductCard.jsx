import { Plus } from "lucide-react";
import { categories, styles } from "../data/demoData.js";

const dressupAssets = import.meta.glob("../assets/dressup/*.png", {
  eager: true,
  import: "default",
});

function getAssetForProduct(product) {
  const assetId = product.assetId || product.id;
  return dressupAssets[`../assets/dressup/${assetId}.png`];
}

function MiniProductVisual({ product }) {
  const asset = getAssetForProduct(product);

  if (asset) {
    return (
      <div className="relative h-36 overflow-hidden rounded-[18px] border border-black/8 bg-gradient-to-br from-white via-[#f7fbff] to-[#ecf8ff] sm:h-44 sm:rounded-2xl sm:border-black/10">
        <img
          src={asset}
          alt=""
          className="absolute inset-0 h-full w-full object-contain p-1.5 drop-shadow-[0_10px_16px_rgba(0,0,0,.16)] sm:p-2"
          draggable="false"
        />
      </div>
    );
  }

  return null;
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
      className={`group rounded-[20px] border p-2 text-left transition duration-300 hover:-translate-y-1 sm:rounded-[22px] ${
        isSelected
          ? "border-black bg-white shadow-[6px_6px_0_#151515]"
          : "border-black/10 bg-white/62 hover:border-[#ff2d9b]/70 hover:shadow-neon"
      }`}
    >
      <MiniProductVisual product={product} />
      <div className="px-1.5 pt-2.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-black leading-5">{product.name}</p>
            <p className="mt-0.5 text-[11px] font-bold text-black/45">{categoryName}</p>
          </div>
          <span
            className={`shrink-0 rounded-full p-1.5 ${
              isSelected ? "bg-black text-white" : "bg-black/5 text-black/48"
            }`}
          >
            <Plus className="h-3.5 w-3.5" />
          </span>
        </div>
        <p className="mt-1.5 truncate text-[10px] font-bold leading-4 text-black/34">
          {[product.isVisualReference ? "评委参考" : null, isRecommended ? "推荐" : null, ...tagNames]
            .filter(Boolean)
            .join(" · ")}
        </p>
      </div>
    </button>
  );
}
