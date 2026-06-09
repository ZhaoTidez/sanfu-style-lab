import { SlidersHorizontal } from "lucide-react";
import {
  getCategoriesByGender,
  getProductsByGender,
  getStylesByGender,
} from "../data/demoData.js";
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
  const { selectedCategory, selectedGender, selectedScene, selectedStyle, selectedItems } = state;
  const genderStyles = getStylesByGender(selectedGender);
  const genderCategories = getCategoriesByGender(selectedGender);
  const filteredProducts = getProductsByGender(selectedGender)
    .filter((product) => product.category === selectedCategory.id)
    .sort((a, b) => {
      const score = (product) =>
        Number(product.styleTags.includes(selectedStyle.id)) * 2 +
        Number(product.sceneTags.includes(selectedScene.id));
      return score(b) - score(a);
    });

  return (
    <aside className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white p-3 shadow-[0_14px_36px_rgba(25,35,70,.08)] sm:p-4 lg:glass-panel lg:min-h-[720px] lg:max-h-[calc(100vh-104px)] lg:rounded-[30px]">
      <div className="mb-3 flex shrink-0 items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-black uppercase text-[#ff2d9b] sm:text-xs">Filter Cabin</p>
          <h2 className="text-lg font-black sm:text-xl">灵感筛选舱</h2>
        </div>
        <div className="rounded-2xl bg-black p-2.5 text-white sm:p-3">
          <SlidersHorizontal className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
      </div>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-3 overflow-hidden">
        <SceneSelector selectedScene={selectedScene} onSelectScene={onSelectScene} />
        <StyleSelector
          selectedGender={selectedGender}
          selectedStyle={selectedStyle}
          styles={genderStyles}
          onSelectStyle={onSelectStyle}
        />
        <section className="flex min-h-0 flex-1 flex-col rounded-[22px] border border-black/8 bg-white/52 p-3">
          <CategoryTabs
            categories={genderCategories}
            selectedGender={selectedGender}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />
          <ProductGrid
            products={filteredProducts}
            selectedItems={selectedItems}
            selectedGender={selectedGender}
            selectedScene={selectedScene}
            selectedStyle={selectedStyle}
            onSelectProduct={onSelectProduct}
          />
        </section>
      </div>
    </aside>
  );
}
