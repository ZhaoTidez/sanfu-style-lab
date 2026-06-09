const dressupAssets = import.meta.glob("../assets/dressup/*.png", {
  eager: true,
  import: "default",
});

const baseAssetByGender = {
  female: dressupAssets["../assets/dressup/female-base.png"],
  male: dressupAssets["../assets/dressup/male-base.png"],
};

const layerOrder = {
  bottoms: 20,
  tops: 30,
  shoes: 34,
  bags: 42,
  charm: 48,
  blindbox: 52,
  earrings: 58,
  makeup: 64,
  facewear: 66,
  hats: 72,
  outfits: 80,
};

function getAssetForProduct(product) {
  const assetId = product.assetId || product.id;
  return dressupAssets[`../assets/dressup/${assetId}.png`];
}

function OutfitLayer({ product }) {
  const asset = getAssetForProduct(product);

  if (!asset) return null;

  return (
    <img
      src={asset}
      alt=""
      className="avatar-layer-pop pointer-events-none absolute inset-0 h-full w-full object-contain"
      style={{ zIndex: layerOrder[product.category] ?? 40 }}
      draggable="false"
    />
  );
}

export default function AvatarLayerStack({ selectedItems, selectedGender = "female" }) {
  const baseAsset = baseAssetByGender[selectedGender] || baseAssetByGender.female;
  const visualOutfit = selectedItems.outfits?.isVisualReference ? selectedItems.outfits : null;
  const visualOutfitAsset = visualOutfit ? getAssetForProduct(visualOutfit) : null;
  const layers = Object.values(selectedItems)
    .filter((product) => !product.isSampleOnly && product.category !== "outfits")
    .sort((a, b) => (layerOrder[a.category] ?? 40) - (layerOrder[b.category] ?? 40));
  const label = selectedGender === "female" ? "女生换装展示" : "男生换装展示";

  return (
    <div
      className="relative z-10 h-[min(46svh,390px)] w-[min(60vw,260px)] select-none sm:h-[540px] sm:w-[380px] sm:max-w-[92vw]"
      role="img"
      aria-label={label}
    >
      <div className="absolute left-1/2 top-[7%] h-[82%] w-[78%] -translate-x-1/2 rounded-full bg-white/28 blur-3xl" />
      <div className="absolute bottom-2 left-1/2 h-14 w-[70%] -translate-x-1/2 rounded-[50%] bg-black/20 blur-xl" />
      {visualOutfitAsset ? (
        <img
          src={visualOutfitAsset}
          alt=""
          className="avatar-layer-pop pointer-events-none absolute inset-0 z-30 h-full w-full object-contain drop-shadow-[0_24px_28px_rgba(0,0,0,.24)]"
          draggable="false"
        />
      ) : (
        <>
          <img
            src={baseAsset}
            alt=""
            className="pointer-events-none absolute inset-0 z-10 h-full w-full object-contain drop-shadow-[0_24px_28px_rgba(0,0,0,.24)]"
            draggable="false"
          />
          {visualOutfit && (
            <div className="absolute left-1/2 top-1/2 z-40 w-48 -translate-x-1/2 -translate-y-1/2 rounded-[24px] border-2 border-black bg-white/88 px-4 py-3 text-center text-xs font-black leading-5 shadow-[6px_6px_0_#151515]">
              套装图片待替换
            </div>
          )}
        </>
      )}
      {!visualOutfitAsset &&
        layers.map((product) => <OutfitLayer key={product.id} product={product} />)}
    </div>
  );
}
