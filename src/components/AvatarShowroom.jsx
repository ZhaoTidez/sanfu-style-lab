import { Camera, Sparkles, UserRound } from "lucide-react";
import AvatarLayerStack from "./AvatarLayerStack.jsx";
import StyleMeter from "./StyleMeter.jsx";

const basePreviewAssets = {
  female: new URL("../assets/dressup/female-base.png", import.meta.url).href,
  male: new URL("../assets/dressup/male-base.png", import.meta.url).href,
};

const sceneTints = {
  commute: "rgba(33,217,255,.34)",
  campus: "rgba(79,124,255,.34)",
  livehouse: "rgba(255,45,155,.36)",
  dorm: "rgba(168,255,45,.28)",
  dategift: "rgba(255,124,200,.34)",
  citywalk: "rgba(255,223,61,.34)",
};

function GenderPreview({ gender }) {
  return (
    <div className="relative h-44 w-32">
      <div className="absolute bottom-2 left-1/2 h-8 w-28 -translate-x-1/2 rounded-[50%] bg-black/14 blur-md" />
      <img
        src={basePreviewAssets[gender]}
        alt=""
        className="relative z-10 h-full w-full object-contain drop-shadow-[0_16px_18px_rgba(0,0,0,.2)]"
        draggable="false"
      />
    </div>
  );
}

function GenderGate({ onSelectGender }) {
  const options = [
    { id: "female", label: "女生角色", color: "#ff7cc8", sub: "甜酷 / 校园 / Citywalk" },
    { id: "male", label: "男生角色", color: "#21d9ff", sub: "高街 / 机能 / 通勤" },
  ];

  return (
    <div className="relative z-10 flex w-full min-w-0 flex-col items-center gap-3 p-3 text-center sm:max-w-3xl sm:gap-5 sm:p-4">
      <div className="rounded-full border-2 border-black bg-[#a8ff2d] px-3 py-1.5 text-[11px] font-black shadow-[3px_3px_0_#151515] sm:px-4 sm:py-2 sm:text-xs">
        先选角色
      </div>
      <h3 className="text-2xl font-black leading-tight sm:text-5xl">开启潮搭试衣舱</h3>
      <p className="max-w-xs text-xs font-bold leading-5 text-black/56 sm:max-w-xl sm:text-sm sm:leading-6">
        选择后切换对应性别的风格和衣物；真实完成图优先看“套装”品类。
      </p>
      <div className="grid w-full min-w-0 grid-cols-2 gap-2 sm:gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectGender(option.id)}
            className="group min-w-0 rounded-[20px] border border-black/10 bg-white/84 p-2 text-left shadow-[0_10px_22px_rgba(25,35,70,.12)] backdrop-blur transition hover:-translate-y-1 sm:rounded-[26px] sm:border-2 sm:border-black sm:p-3 sm:shadow-[7px_7px_0_rgba(0,0,0,.88)]"
          >
            <div
              className="mb-2 flex h-36 items-center justify-center overflow-hidden rounded-[16px] border border-black/8 sm:h-48 sm:rounded-[22px]"
              style={{
                background: `radial-gradient(circle at 50% 28%, ${option.color}55, transparent 40%), linear-gradient(135deg, #fff, #f2fbff)`,
              }}
            >
              <GenderPreview gender={option.id} />
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate text-sm font-black sm:text-base">{option.label}</p>
                <p className="mt-1 truncate text-[10px] font-bold text-black/48 sm:text-xs">{option.sub}</p>
              </div>
              <span className="shrink-0 rounded-full bg-black p-2 text-white transition group-hover:rotate-6 sm:p-2.5">
                <UserRound className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function GenderSwitch({ selectedGender, onSelectGender }) {
  const options = [
    { id: "female", label: "女生" },
    { id: "male", label: "男生" },
  ];

  return (
    <div className="flex rounded-full border border-black/10 bg-white/74 p-1 text-[10px] font-black sm:text-xs">
      {options.map((option) => {
        const active = option.id === selectedGender;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelectGender(option.id)}
            className={`rounded-full px-2 py-1 transition sm:px-3 sm:py-1.5 ${
              active ? "bg-black text-white" : "text-black/48 hover:text-black"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default function AvatarShowroom({ state, onSelectGender, onGenerate }) {
  const { selectedScene, selectedStyle, selectedGender, selectedItems, selectedCount } = state;
  const tint = sceneTints[selectedScene.backgroundType] || "rgba(255,255,255,.28)";
  const background = `
    linear-gradient(180deg, rgba(255,255,255,.66), rgba(255,255,255,.3) 38%, rgba(255,255,255,.7)),
    radial-gradient(circle at 20% 16%, ${tint}, transparent 34%),
    url("${selectedScene.backgroundImage}")
  `;

  return (
    <section className="relative flex h-full min-h-0 min-w-0 flex-col overflow-hidden rounded-[22px] border border-black/5 bg-white p-2 shadow-[0_14px_36px_rgba(25,35,70,.08)] sm:min-h-[760px] sm:rounded-[30px] sm:p-3 lg:glass-panel lg:max-h-[calc(100vh-104px)]">
      <div className="mb-1 flex shrink-0 items-center justify-between gap-2 px-1 py-0.5 sm:mb-2 sm:px-2">
        <div className="min-w-0">
          <p className="text-[9px] font-black uppercase tracking-[0.08em] text-black/32 sm:text-[10px]">
            SANFU Style Lab
          </p>
          <h2 className="truncate text-lg font-black leading-6 sm:text-xl">潮搭试衣舱</h2>
        </div>
        {selectedGender && (
          <GenderSwitch selectedGender={selectedGender} onSelectGender={onSelectGender} />
        )}
      </div>

      <div
        className="scanline relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[18px] border border-black/8 sm:min-h-[600px] sm:rounded-[26px] sm:border-2"
        style={{
          backgroundImage: background,
          backgroundPosition: `center, center, ${selectedScene.backgroundPosition || "center"}`,
          backgroundSize: "cover, cover, cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/8 backdrop-blur-[1px]" />
        <div className="absolute inset-0 grid-paper opacity-16 mix-blend-screen" />
        <div className="absolute inset-x-8 top-5 h-20 rounded-full bg-white/30 blur-2xl" />
        <div className="absolute bottom-0 left-1/2 h-28 w-[76%] -translate-x-1/2 rounded-[50%] bg-black/10 blur-xl" />
        <div className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full border border-black/10 bg-white/68 px-2.5 py-1 text-[10px] font-black backdrop-blur sm:right-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
          <Sparkles className="h-3.5 w-3.5 text-[#ff2d9b] sm:h-4 sm:w-4" />
          {selectedCount} 层
        </div>
        {selectedGender ? (
          <AvatarLayerStack selectedItems={selectedItems} selectedGender={selectedGender} />
        ) : (
          <GenderGate onSelectGender={onSelectGender} />
        )}
      </div>

      <div className="mt-1.5 grid shrink-0 gap-2 sm:mt-2 xl:grid-cols-[1fr_auto]">
        <StyleMeter selectedCount={selectedCount} selectedScene={selectedScene} selectedStyle={selectedStyle} />
        <button
          onClick={onGenerate}
          disabled={!selectedGender}
          className={`inline-flex items-center justify-center gap-2 rounded-[16px] border-2 border-black px-4 py-2 text-sm font-black shadow-[4px_4px_0_#151515] transition sm:rounded-[18px] sm:px-5 sm:py-2.5 sm:text-sm ${
            selectedGender
              ? "bg-gradient-to-r from-[#ff2d9b] via-[#ffdf3d] to-[#21d9ff] hover:-translate-y-1"
              : "cursor-not-allowed bg-white/72 text-black/35 shadow-none"
          }`}
        >
          <Camera className="h-4 w-4" />
          {selectedGender ? "生成三福潮搭封面" : "先选择角色"}
        </button>
      </div>
    </section>
  );
}
