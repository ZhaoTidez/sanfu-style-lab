const fabricBackground = (base, accent, mode = "cloth") => {
  if (mode === "denim") {
    return `
      radial-gradient(circle at 30% 20%, rgba(255,255,255,.22), transparent 22%),
      repeating-linear-gradient(100deg, rgba(255,255,255,.12) 0 1px, transparent 1px 9px),
      repeating-linear-gradient(10deg, rgba(0,0,0,.08) 0 1px, transparent 1px 7px),
      linear-gradient(135deg, ${base}, #315fbd 58%, #24478f)
    `;
  }

  if (mode === "cargo") {
    return `
      repeating-linear-gradient(90deg, rgba(255,255,255,.05) 0 1px, transparent 1px 12px),
      radial-gradient(circle at 65% 18%, rgba(255,255,255,.12), transparent 20%),
      linear-gradient(135deg, ${base}, #526746 58%, #384333)
    `;
  }

  if (mode === "nylon") {
    return `
      radial-gradient(circle at 25% 20%, rgba(255,255,255,.48), transparent 18%),
      linear-gradient(145deg, rgba(255,255,255,.28), transparent 32%),
      linear-gradient(135deg, ${base}, ${accent} 95%)
    `;
  }

  if (mode === "knit") {
    return `
      repeating-linear-gradient(90deg, rgba(255,255,255,.30) 0 2px, transparent 2px 10px),
      linear-gradient(135deg, ${base}, #f8fbff 48%, #b9c4d4)
    `;
  }

  return `
    radial-gradient(circle at 28% 18%, rgba(255,255,255,.22), transparent 18%),
    repeating-linear-gradient(115deg, rgba(255,255,255,.08) 0 1px, transparent 1px 10px),
    linear-gradient(135deg, ${base}, #121212 62%, ${accent})
  `;
};

function TopLayer({ product, color, accent }) {
  const isShirt = product.name.includes("衬衫");
  const isKnit = product.name.includes("针织");
  const mode = isKnit ? "knit" : "cloth";

  return (
    <div
      className={`avatar-layer-pop absolute left-1/2 z-30 -translate-x-1/2 border-[3px] border-[#161616] shadow-[0_16px_22px_rgba(0,0,0,.18)] ${
        isShirt
          ? "top-[130px] h-[144px] w-[178px] rounded-[34px_34px_28px_28px]"
          : "top-[150px] h-[112px] w-[150px] rounded-[34px_34px_24px_24px]"
      }`}
      style={{
        background: fabricBackground(color, accent, mode),
      }}
    >
      <span className="absolute left-1/2 top-0 h-9 w-20 -translate-x-1/2 rounded-b-full border-x-[3px] border-b-[3px] border-[#161616] bg-[#ffd9cf]" />
      <span className="absolute inset-x-5 top-9 border-t border-white/28" />
      <span className="absolute bottom-3 left-5 right-5 border-t-2 border-dashed border-white/35" />
      {isShirt && (
        <>
          <span className="absolute left-1/2 top-10 h-[86px] w-[3px] -translate-x-1/2 bg-black/28" />
          <span className="absolute left-9 top-14 h-2 w-2 rounded-full bg-white/75" />
          <span className="absolute left-9 top-24 h-2 w-2 rounded-full bg-white/75" />
          <span className="absolute -left-5 top-10 h-24 w-12 rotate-[12deg] rounded-[22px] border-[3px] border-[#161616]" style={{ backgroundColor: color }} />
          <span className="absolute -right-5 top-10 h-24 w-12 rotate-[-12deg] rounded-[22px] border-[3px] border-[#161616]" style={{ backgroundColor: color }} />
        </>
      )}
    </div>
  );
}

function SkirtLayer({ color, accent }) {
  return (
    <div
      className="avatar-layer-pop absolute left-1/2 top-[258px] z-30 h-[128px] w-[184px] -translate-x-1/2 rounded-b-[58px] border-[3px] border-[#151515] shadow-[0_18px_24px_rgba(0,0,0,.18)]"
      style={{
        background: fabricBackground(color, accent, "denim"),
        clipPath: "polygon(14% 0, 86% 0, 100% 100%, 0 100%)",
      }}
    >
      <span className="absolute inset-x-2 top-0 h-5 rounded-t-lg bg-black/12" />
      <span className="absolute left-1/2 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white/80 bg-[#d7dde9]" />
      <span className="absolute left-9 top-8 h-10 w-10 rounded-b-[18px] border-2 border-white/45" />
      <span className="absolute right-9 top-8 h-10 w-10 rounded-b-[18px] border-2 border-white/45" />
      <span className="absolute bottom-3 left-7 right-7 border-t-2 border-dashed border-white/62" />
    </div>
  );
}

function PantsLayer({ color, accent, shorts = false }) {
  if (shorts) {
    return (
      <div className="avatar-layer-pop absolute left-1/2 top-[264px] z-30 h-[88px] w-[162px] -translate-x-1/2">
        {["left-0", "right-0"].map((side) => (
          <div
            key={side}
            className={`absolute ${side} h-full w-[78px] rounded-b-[24px] border-[3px] border-[#151515] shadow-[0_10px_18px_rgba(0,0,0,.16)]`}
            style={{ background: fabricBackground(color, accent, "knit") }}
          >
            <span className="absolute inset-x-3 top-4 border-t-2 border-dashed border-black/20" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="avatar-layer-pop absolute left-1/2 top-[258px] z-30 h-[186px] w-[150px] -translate-x-1/2">
      {["left-0", "right-0"].map((side) => (
        <div
          key={side}
          className={`absolute ${side} h-full w-[70px] rounded-b-[28px] border-[3px] border-[#151515] shadow-[0_16px_22px_rgba(0,0,0,.16)]`}
          style={{ background: fabricBackground(color, accent, "cargo") }}
        >
          <span className="absolute left-2 top-14 h-14 w-12 rounded-lg border-2 border-black/30 bg-white/8" />
          <span className="absolute inset-x-3 bottom-5 border-t-2 border-dashed border-black/25" />
        </div>
      ))}
      <span className="absolute left-1/2 top-4 h-[126px] w-[3px] -translate-x-1/2 bg-black/30" />
    </div>
  );
}

function HatLayer({ color, accent }) {
  return (
    <div className="avatar-layer-pop absolute left-1/2 top-[46px] z-50 h-28 w-44 -translate-x-1/2">
      <div
        className="absolute left-1/2 top-0 h-14 w-32 -translate-x-1/2 rounded-t-[54px] border-[3px] border-[#151515] shadow-[0_8px_14px_rgba(0,0,0,.18)]"
        style={{ background: fabricBackground(color, accent, "cloth") }}
      >
        <span className="absolute left-1/2 top-1 h-12 border-l-2 border-white/30" />
        <span className="absolute left-8 top-3 h-9 rotate-[15deg] border-l border-white/25" />
        <span className="absolute right-8 top-3 h-9 rotate-[-15deg] border-l border-white/25" />
      </div>
      <div
        className="absolute left-[112px] top-8 h-8 w-24 rounded-full border-[3px] border-[#151515] shadow-[0_7px_12px_rgba(0,0,0,.18)]"
        style={{ background: `linear-gradient(135deg, ${accent}, #fff7a5)` }}
      />
    </div>
  );
}

function BagLayer({ color, accent }) {
  return (
    <div className="avatar-layer-pop absolute right-[58px] top-[226px] z-[45] h-[136px] w-[106px] rotate-[-8deg]">
      <div className="absolute -top-9 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border-[5px] border-[#151515] border-b-transparent" />
      <div
        className="relative h-full w-full overflow-hidden rounded-[30px] border-[4px] border-[#151515] shadow-[0_20px_24px_rgba(0,0,0,.22)]"
        style={{ background: fabricBackground(color, accent, "nylon") }}
      >
        <span className="absolute left-4 right-4 top-8 border-t-[3px] border-[#151515]/60" />
        <span className="absolute left-5 top-11 h-8 w-11 rounded-xl border-2 border-white/40 bg-white/18" />
        <span className="absolute bottom-5 left-1/2 h-7 w-7 -translate-x-1/2 rounded-full border-2 border-[#151515] bg-white/72" />
        <span className="absolute right-2 top-2 h-8 w-4 rounded-full bg-white/35 blur-sm" />
      </div>
    </div>
  );
}

function AccessoryLayer({ product, type, color, accent }) {
  if (type === "earrings") {
    return (
      <div className="avatar-layer-pop absolute left-1/2 top-[122px] z-[60] h-16 w-44 -translate-x-1/2">
        <div className="absolute left-0 h-11 w-8 rounded-full border-[3px] border-[#151515] bg-gradient-to-br from-white via-[#dfe5ef] to-[#8b98a9] shadow-[0_14px_0_var(--accent)]" style={{ "--accent": accent }} />
        <div className="absolute right-0 h-11 w-8 rounded-full border-[3px] border-[#151515] bg-gradient-to-br from-white via-[#dfe5ef] to-[#8b98a9] shadow-[0_14px_0_var(--accent)]" style={{ "--accent": accent }} />
      </div>
    );
  }

  if (type === "lip") {
    return (
      <div
        className="avatar-layer-pop absolute left-1/2 top-[124px] z-[70] h-3.5 w-12 -translate-x-1/2 rounded-full border border-black/20 shadow-[0_1px_4px_rgba(255,255,255,.8)]"
        style={{ background: `linear-gradient(90deg, ${color}, ${accent}, ${color})` }}
      />
    );
  }

  if (type === "eye") {
    return (
      <div className="avatar-layer-pop absolute left-1/2 top-[101px] z-[70] h-8 w-28 -translate-x-1/2">
        <div className="absolute left-0 top-1 h-4 w-10 rounded-full blur-[1px]" style={{ backgroundColor: color }} />
        <div className="absolute right-0 top-1 h-4 w-10 rounded-full blur-[1px]" style={{ backgroundColor: color }} />
        <span className="absolute left-4 top-0 h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
        <span className="absolute right-4 top-0 h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
      </div>
    );
  }

  if (type === "charm") {
    return (
      <div
        className="avatar-layer-pop absolute right-[50px] top-[322px] z-[60] h-14 w-14 rounded-[18px] border-[3px] border-[#151515] shadow-[10px_8px_0_var(--accent)]"
        style={{
          "--accent": accent,
          background: `radial-gradient(circle at 35% 30%, #fff9, transparent 18%), linear-gradient(135deg, ${color}, ${accent})`,
        }}
      >
        <span className="absolute left-4 top-5 h-2 w-2 rounded-full bg-black" />
        <span className="absolute right-4 top-5 h-2 w-2 rounded-full bg-black" />
      </div>
    );
  }

  if (type === "blindbox") {
    return (
      <div
        className="avatar-layer-pop absolute left-[66px] bottom-[60px] z-40 h-24 w-20 rotate-[9deg] rounded-[20px] border-[3px] border-[#151515] shadow-[0_14px_18px_rgba(0,0,0,.18)]"
        style={{ background: `linear-gradient(145deg, ${color}, #fff6 48%, ${accent})` }}
      >
        <span className="absolute left-4 top-6 h-3 w-3 rounded-full bg-black" />
        <span className="absolute right-4 top-6 h-3 w-3 rounded-full bg-black" />
        <span className="absolute bottom-6 left-1/2 h-2 w-8 -translate-x-1/2 rounded-full bg-black/60" />
      </div>
    );
  }

  return <span className="sr-only">{product.name}</span>;
}

function Layer({ product }) {
  const { layerType: type, layerColor: color, accentColor: accent } = product;

  if (type === "top") return <TopLayer product={product} color={color} accent={accent} />;
  if (type === "skirt") return <SkirtLayer color={color} accent={accent} />;
  if (type === "pants") return <PantsLayer color={color} accent={accent} />;
  if (type === "shorts") return <PantsLayer color={color} accent={accent} shorts />;
  if (type === "hat") return <HatLayer color={color} accent={accent} />;
  if (type === "bag") return <BagLayer color={color} accent={accent} />;

  return <AccessoryLayer product={product} type={type} color={color} accent={accent} />;
}

export default function AvatarLayerStack({ selectedItems }) {
  const layers = Object.values(selectedItems);

  return (
    <div className="relative h-[540px] w-[380px] max-w-[92vw]">
      <div className="absolute bottom-6 left-1/2 h-12 w-72 -translate-x-1/2 rounded-full bg-black/15 blur-lg" />

      <div className="absolute left-1/2 top-[54px] z-20 h-[112px] w-[104px] -translate-x-1/2 rounded-[48px_48px_42px_42px] border-[3px] border-[#151515] bg-gradient-to-b from-[#ffe0d6] to-[#f2b9aa] shadow-[0_12px_18px_rgba(0,0,0,.16)]" />
      <div className="absolute left-1/2 top-[44px] z-30 h-[78px] w-[128px] -translate-x-1/2 rounded-t-[62px] bg-gradient-to-b from-[#211a1a] to-[#090909]" />
      <div className="absolute left-[116px] top-[72px] z-[25] h-[180px] w-20 -rotate-[10deg] rounded-full bg-gradient-to-b from-[#211a1a] to-[#070707]" />
      <div className="absolute right-[116px] top-[72px] z-[25] h-[180px] w-20 rotate-[10deg] rounded-full bg-gradient-to-b from-[#211a1a] to-[#070707]" />
      <div className="absolute left-[153px] top-[101px] z-40 h-4 w-4 rounded-full bg-[#151515]" />
      <div className="absolute right-[153px] top-[101px] z-40 h-4 w-4 rounded-full bg-[#151515]" />
      <div className="absolute left-[158px] top-[100px] z-50 h-1.5 w-1.5 rounded-full bg-white" />
      <div className="absolute right-[158px] top-[100px] z-50 h-1.5 w-1.5 rounded-full bg-white" />
      <div className="absolute left-[144px] top-[120px] z-40 h-3 w-6 rounded-full bg-[#ff9ab8]/45 blur-sm" />
      <div className="absolute right-[144px] top-[120px] z-40 h-3 w-6 rounded-full bg-[#ff9ab8]/45 blur-sm" />
      <div className="absolute left-1/2 top-[132px] z-[45] h-2.5 w-9 -translate-x-1/2 rounded-full bg-[#ff7aa7]" />

      <div className="absolute left-1/2 top-[148px] z-10 h-[166px] w-[144px] -translate-x-1/2 rounded-[42px_42px_30px_30px] border-[3px] border-[#151515] bg-gradient-to-b from-[#fff8f4] to-[#ffd6c9] shadow-[0_18px_22px_rgba(0,0,0,.12)]">
        <span className="absolute left-1/2 top-2 h-12 w-16 -translate-x-1/2 rounded-b-full border-b-2 border-black/10" />
        <span className="absolute left-5 top-14 h-1 w-8 rounded-full bg-white/60" />
      </div>
      <div className="absolute left-[88px] top-[170px] z-[5] h-[158px] w-10 rotate-[13deg] rounded-full border-[3px] border-[#151515] bg-gradient-to-b from-[#ffe0d6] to-[#f4b9aa]" />
      <div className="absolute right-[88px] top-[170px] z-[5] h-[158px] w-10 rotate-[-13deg] rounded-full border-[3px] border-[#151515] bg-gradient-to-b from-[#ffe0d6] to-[#f4b9aa]" />
      <div className="absolute left-[134px] top-[306px] z-[5] h-[166px] w-12 rounded-full border-[3px] border-[#151515] bg-gradient-to-b from-[#ffe0d6] to-[#f4b9aa]" />
      <div className="absolute right-[134px] top-[306px] z-[5] h-[166px] w-12 rounded-full border-[3px] border-[#151515] bg-gradient-to-b from-[#ffe0d6] to-[#f4b9aa]" />
      <div className="absolute left-[112px] top-[458px] z-30 h-8 w-24 rounded-[18px] border-[3px] border-[#151515] bg-gradient-to-br from-white to-[#dfe7f4]" />
      <div className="absolute right-[112px] top-[458px] z-30 h-8 w-24 rounded-[18px] border-[3px] border-[#151515] bg-gradient-to-br from-white to-[#dfe7f4]" />

      {layers.map((product) => (
        <Layer key={product.id} product={product} />
      ))}
    </div>
  );
}
