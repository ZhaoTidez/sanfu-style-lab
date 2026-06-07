function Layer({ type, color, accent }) {
  if (type === "top") {
    return (
      <div
        className="avatar-layer-pop absolute left-1/2 top-[144px] z-20 h-[118px] w-[142px] -translate-x-1/2 rounded-[30px_30px_26px_26px] border-4 border-black"
        style={{ backgroundColor: color, boxShadow: `inset 0 -20px 0 ${accent}` }}
      />
    );
  }
  if (type === "skirt") {
    return (
      <div
        className="avatar-layer-pop absolute left-1/2 top-[258px] z-20 h-[120px] w-[168px] -translate-x-1/2 rounded-b-[60px] border-4 border-black"
        style={{ backgroundColor: color, clipPath: "polygon(16% 0, 84% 0, 100% 100%, 0 100%)" }}
      />
    );
  }
  if (type === "pants") {
    return (
      <div className="avatar-layer-pop absolute left-1/2 top-[258px] z-20 h-[170px] w-[140px] -translate-x-1/2">
        <div
          className="absolute left-0 h-full w-[64px] rounded-b-[28px] border-4 border-black"
          style={{ backgroundColor: color }}
        />
        <div
          className="absolute right-0 h-full w-[64px] rounded-b-[28px] border-4 border-black"
          style={{ backgroundColor: color }}
        />
        <span className="absolute left-1/2 top-8 h-20 w-1 -translate-x-1/2 bg-black/40" />
      </div>
    );
  }
  if (type === "shorts") {
    return (
      <div className="avatar-layer-pop absolute left-1/2 top-[258px] z-20 h-[88px] w-[154px] -translate-x-1/2">
        <div
          className="absolute left-0 h-full w-[72px] rounded-b-[24px] border-4 border-black"
          style={{ backgroundColor: color }}
        />
        <div
          className="absolute right-0 h-full w-[72px] rounded-b-[24px] border-4 border-black"
          style={{ backgroundColor: color }}
        />
      </div>
    );
  }
  if (type === "hat") {
    return (
      <div className="avatar-layer-pop absolute left-1/2 top-[54px] z-30 h-24 w-40 -translate-x-1/2">
        <div
          className="absolute left-1/2 top-0 h-12 w-28 -translate-x-1/2 rounded-t-[42px] border-4 border-black"
          style={{ backgroundColor: color }}
        />
        <div
          className="absolute left-[120px] top-8 h-7 w-20 rounded-full border-4 border-black"
          style={{ backgroundColor: accent }}
        />
      </div>
    );
  }
  if (type === "earrings") {
    return (
      <div className="avatar-layer-pop absolute left-1/2 top-[125px] z-40 h-16 w-40 -translate-x-1/2">
        <div
          className="absolute left-0 h-9 w-7 rounded-full border-[3px] border-black"
          style={{ backgroundColor: color, boxShadow: `0 14px 0 ${accent}` }}
        />
        <div
          className="absolute right-0 h-9 w-7 rounded-full border-[3px] border-black"
          style={{ backgroundColor: color, boxShadow: `0 14px 0 ${accent}` }}
        />
      </div>
    );
  }
  if (type === "lip") {
    return (
      <div
        className="avatar-layer-pop absolute left-1/2 top-[124px] z-50 h-3 w-12 -translate-x-1/2 rounded-full border border-black/20"
        style={{ backgroundColor: color }}
      />
    );
  }
  if (type === "eye") {
    return (
      <div className="avatar-layer-pop absolute left-1/2 top-[104px] z-50 h-8 w-24 -translate-x-1/2">
        <div className="absolute left-0 top-1 h-3 w-8 rounded-full" style={{ backgroundColor: color }} />
        <div className="absolute right-0 top-1 h-3 w-8 rounded-full" style={{ backgroundColor: color }} />
        <span className="absolute left-2 top-0 h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
        <span className="absolute right-2 top-0 h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
      </div>
    );
  }
  if (type === "bag") {
    return (
      <div className="avatar-layer-pop absolute right-[72px] top-[235px] z-30 h-28 w-24 rotate-[-10deg] rounded-[28px] border-4 border-black">
        <div className="absolute -top-8 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full border-4 border-black border-b-transparent" />
        <div className="h-full w-full rounded-[22px]" style={{ backgroundColor: color }} />
        <span className="absolute bottom-4 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-black" style={{ backgroundColor: accent }} />
      </div>
    );
  }
  if (type === "charm") {
    return (
      <div
        className="avatar-layer-pop absolute right-[64px] top-[317px] z-40 h-12 w-12 rounded-[16px] border-4 border-black"
        style={{ backgroundColor: color, boxShadow: `10px 8px 0 ${accent}` }}
      />
    );
  }
  if (type === "blindbox") {
    return (
      <div className="avatar-layer-pop absolute left-[72px] bottom-[58px] z-30 h-24 w-20 rotate-[9deg] rounded-[20px] border-4 border-black" style={{ backgroundColor: color }}>
        <span className="absolute left-4 top-6 h-3 w-3 rounded-full bg-black" />
        <span className="absolute right-4 top-6 h-3 w-3 rounded-full bg-black" />
        <span className="absolute bottom-6 left-1/2 h-2 w-8 -translate-x-1/2 rounded-full" style={{ backgroundColor: accent }} />
      </div>
    );
  }
  return null;
}

export default function AvatarLayerStack({ selectedItems }) {
  const layers = Object.values(selectedItems);

  return (
    <div className="relative h-[540px] w-[380px] max-w-[92vw]">
      <div className="absolute bottom-8 left-1/2 h-10 w-64 -translate-x-1/2 rounded-full bg-black/10 blur-md" />
      <div className="absolute left-1/2 top-[64px] z-10 h-[96px] w-[96px] -translate-x-1/2 rounded-full border-4 border-black bg-[#ffd6c9]" />
      <div className="absolute left-1/2 top-[58px] z-20 h-[58px] w-[112px] -translate-x-1/2 rounded-t-[48px] bg-[#161616]" />
      <div className="absolute left-[156px] top-[104px] z-30 h-3 w-3 rounded-full bg-black" />
      <div className="absolute right-[156px] top-[104px] z-30 h-3 w-3 rounded-full bg-black" />
      <div className="absolute left-1/2 top-[142px] z-10 h-[160px] w-[138px] -translate-x-1/2 rounded-[32px] border-4 border-black bg-white" />
      <div className="absolute left-[95px] top-[166px] z-0 h-[150px] w-10 rotate-[13deg] rounded-full border-4 border-black bg-[#ffd6c9]" />
      <div className="absolute right-[95px] top-[166px] z-0 h-[150px] w-10 rotate-[-13deg] rounded-full border-4 border-black bg-[#ffd6c9]" />
      <div className="absolute left-[139px] top-[300px] z-0 h-[170px] w-10 rounded-full border-4 border-black bg-[#ffd6c9]" />
      <div className="absolute right-[139px] top-[300px] z-0 h-[170px] w-10 rounded-full border-4 border-black bg-[#ffd6c9]" />
      <div className="absolute left-[120px] top-[456px] z-20 h-7 w-20 rounded-full bg-black" />
      <div className="absolute right-[120px] top-[456px] z-20 h-7 w-20 rounded-full bg-black" />

      {layers.map((product) => (
        <Layer
          key={product.id}
          type={product.layerType}
          color={product.layerColor}
          accent={product.accentColor}
        />
      ))}
    </div>
  );
}
