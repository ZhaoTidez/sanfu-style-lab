import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({
  products,
  selectedGender,
  selectedItems,
  selectedScene,
  selectedStyle,
  onSelectProduct,
}) {
  return (
    <section className="min-w-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-black">灵感单品</h3>
        <span className="rounded-full bg-white px-3 py-1 text-[11px] font-black text-black/48">
          {selectedGender ? `${products.length} 件可试` : "待选择性别"}
        </span>
      </div>
      {!selectedGender ? (
        <div className="rounded-[20px] border border-dashed border-black/12 bg-white/58 p-4 text-xs font-bold leading-5 text-black/45">
          中间先选女生或男生，这里会自动切换对应性别的衣物。
        </div>
      ) : products.length ? (
        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-1 2xl:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isSelected={selectedItems[product.category]?.id === product.id}
              isRecommended={
                product.styleTags.includes(selectedStyle.id) ||
                product.sceneTags.includes(selectedScene.id)
              }
              onSelect={() => onSelectProduct(product)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-[20px] border border-dashed border-black/12 bg-white/58 p-4 text-xs font-bold leading-5 text-black/45">
          这个品类暂时没有样例，后续可以在数据里继续追加。
        </div>
      )}
    </section>
  );
}
