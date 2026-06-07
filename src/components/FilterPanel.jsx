import { SlidersHorizontal } from "lucide-react";
import { products } from "../data/demoData.js";
import CategoryTabs from "./CategoryTabs.jsx";
import ProductGrid from "./ProductGrid.jsx";
import SceneSelector from "./SceneSelector.jsx";
import StyleSelector from "./StyleSelector.jsx";

export default function FilterPanel({
  state,
  onSelectScene,
  onSelectStyle,
  onSelectCategory,
  onSelectProduct,
}) {
  const { selectedCategory, selectedScene, selectedStyle, selectedItems } = state;
  const filteredProducts = products
    .filter((product) => product.category === selectedCategory.id)
    .sort((a, b) => {
      const score = (product) =>
        Number(product.styleTags.includes(selectedStyle.id)) * 2 +
        Number(product.sceneTags.includes(selectedScene.id));
      return score(b) - score(a);
    });

  return (
    <aside className="glass-panel flex min-h-[720px] flex-col overflow-hidden rounded-[30px] p-4 lg:max-h-[calc(100vh-104px)]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase text-[#ff2d9b]">Filter Cabin</p>
          <h2 className="text-xl font-black">灵感筛选舱</h2>
        </div>
        <div className="rounded-2xl bg-black p-3 text-white">
          <SlidersHorizontal className="h-5 w-5" />
        </div>
      </div>

      <div className="thin-scrollbar flex-1 space-y-5 overflow-y-auto pr-1">
        <SceneSelector selectedScene={selectedScene} onSelectScene={onSelectScene} />
        <StyleSelector selectedStyle={selectedStyle} onSelectStyle={onSelectStyle} />
        <CategoryTabs selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />
        <ProductGrid
          products={filteredProducts}
          selectedItems={selectedItems}
          selectedScene={selectedScene}
          selectedStyle={selectedStyle}
          onSelectProduct={onSelectProduct}
        />
      </div>
    </aside>
  );
}
