import { useMemo, useState } from "react";
import { ClipboardList, Info, X } from "lucide-react";
import { getCategoriesByGender, getProductsByGender, styles } from "../data/demoData.js";

const dressupAssets = import.meta.glob("../assets/dressup/*.png", {
  eager: true,
  import: "default",
});

function getAssetForProduct(product) {
  if (!product) return null;
  const assetId = product.assetId || product.id;
  return dressupAssets[`../assets/dressup/${assetId}.png`];
}

function DetailVisual({ product }) {
  const asset = getAssetForProduct(product);

  if (asset) {
    return (
      <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-[22px] border border-black/10 bg-gradient-to-br from-white via-[#f7fbff] to-[#ecf8ff]">
        <img
          src={asset}
          alt=""
          className="h-full w-full object-contain p-2 drop-shadow-[0_14px_18px_rgba(0,0,0,.2)]"
          draggable="false"
        />
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden rounded-[22px] border border-black/10 bg-gradient-to-br from-white via-[#f7fbff] to-[#ecf8ff]">
      <div
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[30px] border-2 border-black shadow-[6px_6px_0_rgba(0,0,0,.13)]"
        style={{ backgroundColor: product?.layerColor || "#dfe7f1" }}
      />
      <div
        className="absolute bottom-8 right-10 h-14 w-14 rotate-[14deg] rounded-full border-2 border-black"
        style={{ backgroundColor: product?.accentColor || "#21d9ff" }}
      />
      <div className="absolute left-4 top-4 rounded-full border border-black/10 bg-white/78 px-3 py-1 text-[10px] font-black">
        样例视觉
      </div>
    </div>
  );
}

function ProductDetailModal({ detail, onClose }) {
  if (!detail) return null;

  const { category, product, isFallback } = detail;
  const tagNames = product
    ? product.styleTags
        .map((tag) => styles.find((style) => style.id === tag)?.name)
        .filter(Boolean)
        .slice(0, 3)
    : [];

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/38 p-4 backdrop-blur-[2px]">
      <button
        type="button"
        aria-label="关闭详情"
        className="absolute inset-0"
        onClick={onClose}
      />
      <section className="relative w-full max-w-[360px] rounded-[28px] border-2 border-black bg-white p-4 shadow-[10px_10px_0_rgba(0,0,0,.82)]">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-black uppercase text-black/38">Sample Detail</p>
            <h3 className="mt-1 text-lg font-black leading-6">{product?.name || `${category.name}样例`}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="关闭"
            className="shrink-0 rounded-full bg-black p-2 text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <DetailVisual product={product} />

        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-[#ffdf3d] px-2.5 py-1 text-[10px] font-black">
            {category.name}
          </span>
          <span className="rounded-full bg-[#21d9ff] px-2.5 py-1 text-[10px] font-black">
            {product?.isVisualReference ? "评委参考" : "样例展示"}
          </span>
          {isFallback && (
            <span className="rounded-full bg-black px-2.5 py-1 text-[10px] font-black text-white">
              替代详情
            </span>
          )}
          {tagNames.map((tag) => (
            <span key={tag} className="rounded-full bg-black/5 px-2.5 py-1 text-[10px] font-black text-black/55">
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-3 text-xs font-semibold leading-5 text-black/58">
          {isFallback
            ? "当前部位还没有选择具体商品，这里先用同品类样例作为详情页替代展示。"
            : "当前没有独立商品详情页，这里先用样例弹窗展示该部位的关键信息。"}
        </p>
        <p className="mt-2 rounded-[18px] bg-black/5 px-3 py-2 text-xs font-bold leading-5 text-black/62">
          {product?.comment || "后续可以在这里接入真实商品图、价格、尺码、材质和购买入口。"}
        </p>
      </section>
    </div>
  );
}

export default function OutfitList({ selectedGender, selectedItems }) {
  const [activeDetail, setActiveDetail] = useState(null);
  const selectedCount = Object.keys(selectedItems).length;
  const categories = getCategoriesByGender(selectedGender);
  const genderProducts = useMemo(() => getProductsByGender(selectedGender), [selectedGender]);

  const openDetail = (category) => {
    const selectedProduct = selectedItems[category.id];
    const fallbackProduct = genderProducts.find((product) => product.category === category.id);
    setActiveDetail({
      category,
      product: selectedProduct || fallbackProduct,
      isFallback: !selectedProduct,
    });
  };

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
      <p className="mb-3 text-xs font-bold text-black/50">
        {selectedGender
          ? `已搭出 ${selectedCount} 件灵感样例，点击部位查看详情`
          : "先选择性别，再开始搭配"}
      </p>
      <div className="grid gap-2">
        {categories.map((category) => {
          const item = selectedItems[category.id];
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => openDetail(category)}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-black/6 bg-white/62 px-3 py-2 text-left transition hover:-translate-y-0.5 hover:border-[#21d9ff]/70 hover:bg-white"
            >
              <span className="shrink-0 text-xs font-black text-black/48">{category.name}</span>
              <span
                className={`min-w-0 flex items-center justify-end gap-1.5 truncate text-right text-xs font-black ${
                  item ? "text-black" : "text-black/28"
                }`}
              >
                <span className="truncate">{item ? item.name : "待搭"}</span>
                <Info className="h-3.5 w-3.5 shrink-0 text-[#21d9ff] opacity-60 transition group-hover:opacity-100" />
              </span>
            </button>
          );
        })}
      </div>
      <ProductDetailModal detail={activeDetail} onClose={() => setActiveDetail(null)} />
    </div>
  );
}
