import { Camera, Sparkles, UserRound } from "lucide-react";
import AvatarLayerStack from "./AvatarLayerStack.jsx";
import StyleMeter from "./StyleMeter.jsx";

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
  const female = gender === "female";
  return (
    <div className="relative h-44 w-28">
      <div className="absolute left-1/2 top-1 h-16 w-16 -translate-x-1/2 rounded-full border-[3px] border-black bg-[#ffd9cf]" />
      <div
        className={`absolute left-1/2 top-0 -translate-x-1/2 bg-black ${
          female ? "h-14 w-24 rounded-t-full" : "h-11 w-20 rounded-[24px_24px_14px_14px]"
        }`}
      />
      {female && (
        <>
          <div className="absolute left-0 top-10 h-28 w-10 rounded-full bg-black" />
          <div className="absolute right-0 top-10 h-28 w-10 rounded-full bg-black" />
        </>
      )}
      <div className="absolute left-1/2 top-[64px] h-24 w-24 -translate-x-1/2 rounded-[28px] border-[3px] border-black bg-white shadow-[inset_0_-18px_0_#e8efff]" />
      <div className="absolute bottom-0 left-5 h-16 w-5 rounded-full border-[3px] border-black bg-[#ffd9cf]" />
      <div className="absolute bottom-0 right-5 h-16 w-5 rounded-full border-[3px] border-black bg-[#ffd9cf]" />
      <div className="absolute left-1/2 top-[150px] h-4 w-24 -translate-x-1/2 rounded-full bg-black/18 blur-md" />
    </div>
  );
}

function GenderGate({ onSelectGender }) {
  const options = [
    { id: "female", label: "女生角色", color: "#ff7cc8", sub: "甜酷 / 校园 / Citywalk" },
    { id: "male", label: "男生角色", color: "#21d9ff", sub: "高街 / 机能 / 通勤" },
  ];

  return (
    <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-6 p-5 text-center">
      <div className="rounded-full border-2 border-black bg-[#a8ff2d] px-4 py-2 text-xs font-black shadow-[5px_5px_0_#151515]">
        先选择你的换装角色
      </div>
      <h3 className="text-3xl font-black leading-tight sm:text-5xl">进入纸娃娃试衣间</h3>
      <p className="max-w-xl text-sm font-bold leading-6 text-black/58">
        角色会先穿基础内搭，后续单品会像 2D 换装游戏一样叠加到同一套立绘骨架上。
      </p>
      <div className="grid w-full gap-4 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectGender(option.id)}
            className="group rounded-[30px] border-2 border-black bg-white/74 p-4 text-left shadow-[8px_8px_0_rgba(0,0,0,.88)] backdrop-blur transition hover:-translate-y-1"
          >
            <div
              className="mb-4 flex h-52 items-center justify-center overflow-hidden rounded-[24px] border border-black/10"
              style={{
                background: `radial-gradient(circle at 50% 28%, ${option.color}55, transparent 40%), linear-gradient(135deg, #fff, #f2fbff)`,
              }}
            >
              <GenderPreview gender={option.id} />
            </div>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-black">{option.label}</p>
                <p className="mt-1 text-xs font-bold text-black/48">{option.sub}</p>
              </div>
              <span className="rounded-full bg-black p-3 text-white transition group-hover:rotate-6">
                <UserRound className="h-5 w-5" />
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
    <section className="glass-panel relative flex min-h-[760px] flex-col overflow-hidden rounded-[34px] p-4 lg:max-h-[calc(100vh-104px)]">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-[24px] border border-black/8 bg-white/64 px-4 py-3">
        <div>
          <p className="text-xs font-black uppercase text-black/40">Dress-Up Stage</p>
          <h2 className="text-xl font-black">纸娃娃试衣间</h2>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-black">
          <span className="rounded-full bg-[#21d9ff] px-3 py-2">当前场景：{selectedScene.name}</span>
          <span className="rounded-full bg-[#ffdf3d] px-3 py-2">当前风格：{selectedStyle.name}</span>
        </div>
      </div>

      <div
        className="scanline relative flex min-h-[520px] flex-1 items-center justify-center overflow-hidden rounded-[30px] border-2 border-black/10"
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
        <div className="absolute left-5 top-5 rounded-full border border-black/10 bg-white/72 px-4 py-2 text-xs font-black backdrop-blur">
          {selectedScene.mood}
        </div>
        <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-black/10 bg-white/72 px-4 py-2 text-xs font-black backdrop-blur">
          <Sparkles className="h-4 w-4 text-[#ff2d9b]" />
          已叠加 {selectedCount} 层灵感
        </div>
        {selectedGender ? (
          <AvatarLayerStack selectedItems={selectedItems} selectedGender={selectedGender} />
        ) : (
          <GenderGate onSelectGender={onSelectGender} />
        )}
      </div>

      <div className="mt-4 grid gap-3 xl:grid-cols-[1fr_auto]">
        <StyleMeter selectedCount={selectedCount} selectedScene={selectedScene} selectedStyle={selectedStyle} />
        <button
          onClick={onGenerate}
          className="inline-flex items-center justify-center gap-3 rounded-[24px] border-2 border-black bg-gradient-to-r from-[#ff2d9b] via-[#ffdf3d] to-[#21d9ff] px-6 py-4 text-base font-black shadow-[7px_7px_0_#151515] transition hover:-translate-y-1"
        >
          <Camera className="h-5 w-5" />
          生成我的三福穿搭封面
        </button>
      </div>
    </section>
  );
}
