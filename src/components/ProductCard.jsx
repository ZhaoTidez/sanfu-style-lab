import { Image, Plus, Sparkle } from "lucide-react";
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
  const asset = product.isVisualReference ? getAssetForProduct(product) : null;

  if (asset) {
    return (
      <div className="relative h-20 overflow-hidden rounded-[18px] border border-black/8 bg-gradient-to-br from-white via-[#f7fbff] to-[#ecf8ff] sm:h-28 sm:rounded-2xl sm:border-black/10">
        <img
          src={asset}
          alt=""
          className="absolute inset-0 h-full w-full object-contain p-1 drop-shadow-[0_8px_12px_rgba(0,0,0,.18)]"
          draggable="false"
        />
        <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full border border-black/10 bg-white/78 px-2 py-1 text-[9px] font-black sm:left-4 sm:top-4 sm:text-[10px]">
          <Image className="h-3 w-3" />
          真实套装
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-20 overflow-hidden rounded-[18px] border border-black/8 bg-gradient-to-br from-white via-[#f7fbff] to-[#ecf8ff] sm:h-28 sm:rounded-2xl sm:border-black/10">
      <div
        className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[18px] border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,.12)] sm:h-20 sm:w-20 sm:rounded-[24px] sm:shadow-[5px_5px_0_rgba(0,0,0,.14)]"
        style={{ backgroundColor: product.layerColor }}
      />
      <div
        className="absolute bottom-3 right-5 h-7 w-7 rotate-[14deg] rounded-full border-2 border-black sm:bottom-4 sm:right-7 sm:h-9 sm:w-9"
        style={{ backgroundColor: product.accentColor }}
      />
      <div className="absolute left-2 top-2 rounded-full border border-black/10 bg-white/75 px-2 py-1 text-[9px] font-black sm:left-4 sm:top-4 sm:text-[10px]">
        {product.isVisualReference ? "套装图待替换" : product.image}
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
      className={`group rounded-[20px] border p-2 text-left transition duration-300 hover:-translate-y-1 sm:rounded-[24px] ${
        isSelected
          ? "border-black bg-white shadow-[6px_6px_0_#151515]"
          : "border-black/10 bg-white/62 hover:border-[#ff2d9b]/70 hover:shadow-neon"
      }`}
    >
      <MiniProductVisual product={product} />
      <div className="px-1 pt-2 sm:pt-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[13px] font-black leading-5 sm:text-sm">{product.name}</p>
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
          {product.isSampleOnly && (
            <span className="rounded-full bg-black/5 px-2 py-1 text-[10px] font-black text-black/55">
              样例展示
            </span>
          )}
          {product.isVisualReference && (
            <span className="rounded-full bg-[#21d9ff] px-2 py-1 text-[10px] font-black">
              评委参考
            </span>
          )}
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
        <p className="mt-2 hidden text-xs font-semibold leading-5 text-black/58 sm:block">{product.comment}</p>
      </div>
    </button>
  );
}
