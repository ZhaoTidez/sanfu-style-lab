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
  bags: 42,
  charm: 48,
  blindbox: 52,
  earrings: 58,
  eye: 64,
  lip: 66,
  hats: 72,
};

function getAssetForProduct(product) {
  return dressupAssets[`../assets/dressup/${product.id}.png`];
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
  const layers = Object.values(selectedItems).sort(
    (a, b) => (layerOrder[a.category] ?? 40) - (layerOrder[b.category] ?? 40),
  );
  const label = selectedGender === "female" ? "女生动漫纸娃娃换装立绘" : "男生动漫纸娃娃换装立绘";

  return (
    <div
      className="relative z-10 h-[min(46svh,390px)] w-[min(60vw,260px)] select-none sm:h-[540px] sm:w-[380px] sm:max-w-[92vw]"
      role="img"
      aria-label={label}
    >
      <div className="absolute left-1/2 top-[7%] h-[82%] w-[78%] -translate-x-1/2 rounded-full bg-white/28 blur-3xl" />
      <div className="absolute bottom-2 left-1/2 h-14 w-[70%] -translate-x-1/2 rounded-[50%] bg-black/20 blur-xl" />
      <img
        src={baseAsset}
        alt=""
        className="pointer-events-none absolute inset-0 z-10 h-full w-full object-contain drop-shadow-[0_24px_28px_rgba(0,0,0,.24)]"
        draggable="false"
      />
      {layers.map((product) => (
        <OutfitLayer key={product.id} product={product} />
      ))}
    </div>
  );
}
