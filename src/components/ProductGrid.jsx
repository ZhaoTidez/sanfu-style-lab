import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({
  products,
  selectedItems,
  selectedScene,
  selectedStyle,
  onSelectProduct,
}) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-black">灵感单品</h3>
        <span className="rounded-full bg-white px-3 py-1 text-[11px] font-black text-black/48">
          {products.length} 件可试
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selectedItems[product.category]?.id === product.id}
            isRecommended={
              product.styleTags.includes(selectedStyle.id) || product.sceneTags.includes(selectedScene.id)
            }
            onSelect={() => onSelectProduct(product)}
          />
        ))}
      </div>
    </section>
  );
}
