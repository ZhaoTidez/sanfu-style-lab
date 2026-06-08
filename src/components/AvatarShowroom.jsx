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

function SceneProps({ type }) {
  const common =
    "absolute rounded-full border-2 border-black bg-white/72 text-center text-xs font-black shadow-[4px_4px_0_rgba(0,0,0,.16)]";

  if (type === "livehouse") {
    return (
      <>
        <div className="absolute left-10 top-16 h-64 w-3 rotate-[24deg] bg-[#ff2d9b]/40 blur-sm" />
        <div className="absolute right-12 top-10 h-72 w-3 rotate-[-24deg] bg-[#21d9ff]/45 blur-sm" />
        <div className={`${common} bottom-20 left-8 px-4 py-2`}>LIVE</div>
      </>
    );
  }

  if (type === "campus") {
    return (
      <>
        <div className="absolute left-10 top-24 h-56 w-24 rounded-t-full border-2 border-[#4f7cff]/25" />
        <div className={`${common} right-10 top-20 px-3 py-2`}>A 栋走廊</div>
      </>
    );
  }

  if (type === "commute") {
    return (
      <>
        <div className={`${common} left-8 top-20 px-3 py-2`}>08:37</div>
        <div className={`${common} bottom-24 right-8 px-3 py-2`}>咖啡 + 耳机</div>
      </>
    );
  }

  if (type === "dorm") {
    return (
      <>
        <div className={`${common} left-8 top-20 px-3 py-2`}>便利店灯光</div>
        <div className="absolute bottom-16 right-14 h-20 w-16 rounded-[22px] border-2 border-black bg-[#ffdf3d]/80" />
      </>
    );
  }

  if (type === "dategift") {
    return (
      <>
        <div className="absolute right-14 top-24 h-16 w-16 rotate-[-9deg] rounded-2xl border-2 border-black bg-[#ff7cc8]" />
        <div className="absolute right-[86px] top-[92px] h-20 w-3 rotate-[-9deg] bg-white" />
        <div className="absolute right-[62px] top-[117px] h-3 w-14 rotate-[-9deg] bg-white" />
      </>
    );
  }

  return (
    <>
      <div className={`${common} left-8 top-20 px-3 py-2`}>SUNNY</div>
      <div className={`${common} bottom-24 right-8 px-3 py-2`}>街角 13</div>
    </>
  );
}

function GenderPreview({ gender }) {
  return (
    <div className="relative h-48 w-36">
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
    <div className="relative z-10 flex w-full min-w-0 flex-col items-center gap-3 p-3 text-center sm:max-w-3xl sm:gap-6 sm:p-5">
      <div className="rounded-full border-2 border-black bg-[#a8ff2d] px-3 py-1.5 text-[11px] font-black shadow-[3px_3px_0_#151515] sm:px-4 sm:py-2 sm:text-xs sm:shadow-[5px_5px_0_#151515]">
        先选择你的换装角色
      </div>
      <h3 className="text-2xl font-black leading-tight sm:text-5xl">进入纸娃娃试衣间</h3>
      <p className="max-w-xs text-xs font-bold leading-5 text-black/56 sm:max-w-xl sm:text-sm sm:leading-6">
        角色会先穿基础内搭，后续单品会像 2D 换装游戏一样叠加到同一套立绘骨架上。
      </p>
      <div className="grid w-full min-w-0 grid-cols-2 gap-2 sm:gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectGender(option.id)}
            className="group min-w-0 rounded-[20px] border border-black/10 bg-white/84 p-2 text-left shadow-[0_10px_22px_rgba(25,35,70,.12)] backdrop-blur transition hover:-translate-y-1 sm:rounded-[30px] sm:border-2 sm:border-black sm:p-4 sm:shadow-[8px_8px_0_rgba(0,0,0,.88)]"
          >
            <div
              className="mb-2 flex h-36 items-center justify-center overflow-hidden rounded-[16px] border border-black/8 sm:mb-4 sm:h-52 sm:rounded-[24px] sm:border-black/10"
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
              <span className="shrink-0 rounded-full bg-black p-2 text-white transition group-hover:rotate-6 sm:p-3">
                <UserRound className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function AvatarShowroom({ state, onSelectGender, onGenerate }) {
  const { selectedScene, selectedStyle, selectedGender, selectedItems, selectedCount } = state;
  const tint = sceneTints[selectedScene.backgroundType] || "rgba(255,255,255,.28)";
  const background = `
    linear-gradient(180deg, rgba(255,255,255,.74), rgba(255,255,255,.42) 38%, rgba(255,255,255,.76)),
    radial-gradient(circle at 20% 16%, ${tint}, transparent 34%),
    url("${selectedScene.backgroundImage}")
  `;

  return (
    <section className="relative flex min-h-[calc(100svh-88px)] min-w-0 flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white p-3 shadow-[0_14px_36px_rgba(25,35,70,.08)] sm:min-h-[760px] sm:rounded-[34px] sm:p-4 lg:glass-panel lg:max-h-[calc(100vh-104px)]">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-[18px] bg-[#f7f9fc] px-3 py-2.5 sm:gap-3 sm:rounded-[24px] sm:bg-white/64 sm:px-4 sm:py-3">
        <div>
          <p className="text-[10px] font-black uppercase text-black/35 sm:text-xs">Dress-Up Stage</p>
          <h2 className="text-lg font-black sm:text-xl">纸娃娃试衣间</h2>
        </div>
        <div className="flex flex-wrap gap-1.5 text-[11px] font-black sm:gap-2 sm:text-xs">
          <span className="rounded-full bg-[#21d9ff] px-2.5 py-1.5 sm:px-3 sm:py-2">场景：{selectedScene.name}</span>
          <span className="rounded-full bg-[#ffdf3d] px-2.5 py-1.5 sm:px-3 sm:py-2">风格：{selectedStyle.name}</span>
        </div>
      </div>

      <div
        className="scanline relative flex min-h-[455px] flex-1 items-center justify-center overflow-hidden rounded-[22px] border border-black/8 sm:min-h-[520px] sm:rounded-[30px] sm:border-2"
        style={{
          backgroundImage: background,
          backgroundPosition: `center, center, ${selectedScene.backgroundPosition || "center"}`,
          backgroundSize: "cover, cover, cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/12 backdrop-blur-[1px]" />
        <div className="absolute inset-0 grid-paper opacity-20 mix-blend-screen" />
        <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-white/38 blur-2xl" />
        <div className="absolute bottom-0 left-1/2 h-32 w-[72%] -translate-x-1/2 rounded-[50%] bg-black/10 blur-xl" />
        <SceneProps type={selectedScene.backgroundType} />
        <div className="absolute left-3 top-3 rounded-full border border-black/10 bg-white/72 px-3 py-1.5 text-[11px] font-black backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
          {selectedScene.mood}
        </div>
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-black/10 bg-white/72 px-3 py-1.5 text-[11px] font-black backdrop-blur sm:right-5 sm:top-5 sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
          <Sparkles className="h-3.5 w-3.5 text-[#ff2d9b] sm:h-4 sm:w-4" />
          {selectedCount} 层
        </div>
        {selectedGender ? (
          <AvatarLayerStack selectedItems={selectedItems} selectedGender={selectedGender} />
        ) : (
          <GenderGate onSelectGender={onSelectGender} />
        )}
      </div>

      <div className="mt-3 grid gap-2 sm:mt-4 sm:gap-3 xl:grid-cols-[1fr_auto]">
        <StyleMeter selectedCount={selectedCount} selectedScene={selectedScene} selectedStyle={selectedStyle} />
        <button
          onClick={onGenerate}
          className="inline-flex items-center justify-center gap-2 rounded-[22px] border-2 border-black bg-gradient-to-r from-[#ff2d9b] via-[#ffdf3d] to-[#21d9ff] px-4 py-3 text-sm font-black shadow-[5px_5px_0_#151515] transition hover:-translate-y-1 sm:gap-3 sm:rounded-[24px] sm:px-6 sm:py-4 sm:text-base sm:shadow-[7px_7px_0_#151515]"
        >
          <Camera className="h-5 w-5" />
          生成我的三福穿搭封面
        </button>
      </div>
    </section>
  );
}
