import { ArrowRight, Camera, Sparkles, WandSparkles } from "lucide-react";

const logoUrl = new URL("../../e8745093e85fb076b47c1f8fb171db95.jpg", import.meta.url).href;
const coverUrl = new URL("../assets/anime-outfit-cover.png", import.meta.url).href;

const floatItems = [
  { label: "短上衣", className: "left-[7%] top-[22%] rotate-[-10deg]", color: "#ff2d9b" },
  { label: "牛仔裙", className: "left-[14%] bottom-[18%] rotate-[8deg]", color: "#4f7cff" },
  { label: "鞋子", className: "right-[12%] top-[18%] rotate-[12deg]", color: "#ff6fae" },
  { label: "饰品", className: "right-[7%] bottom-[24%] rotate-[-8deg]", color: "#dfe7f1" },
  { label: "包包", className: "left-[42%] top-[12%] rotate-[6deg]", color: "#ffdf3d" },
  { label: "服饰配件", className: "right-[32%] bottom-[10%] rotate-[10deg]", color: "#a8ff2d" },
];

function FloatingSticker({ item, index }) {
  return (
    <div
      className={`absolute hidden h-24 w-24 items-center justify-center rounded-[28px] border-2 border-black bg-white/80 p-3 text-center text-sm font-black shadow-neon backdrop-blur-xl animate-floaty sm:flex ${item.className}`}
      style={{ animationDelay: `${index * 0.35}s` }}
    >
      <span
        className="absolute -right-2 -top-2 h-8 w-8 rounded-full border-2 border-black"
        style={{ backgroundColor: item.color }}
      />
      {item.label}
    </div>
  );
}

function CssMuse() {
  return (
    <div className="relative mx-auto h-[420px] w-[300px] max-w-[86vw]">
      <div className="absolute left-1/2 top-8 h-72 w-52 -translate-x-1/2 rounded-[60px] bg-gradient-to-b from-white via-[#f6fbff] to-[#e5f6ff] shadow-pink" />
      <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full border-4 border-black bg-[#ffd6c9]" />
      <div className="absolute left-1/2 top-3 h-16 w-28 -translate-x-1/2 rounded-t-[44px] bg-[#171717]" />
      <div className="absolute left-[112px] top-[52px] h-3 w-3 rounded-full bg-black" />
      <div className="absolute right-[112px] top-[52px] h-3 w-3 rounded-full bg-black" />
      <div className="absolute left-1/2 top-[73px] h-2 w-9 -translate-x-1/2 rounded-full bg-[#ff6fae]" />
      <div className="absolute left-1/2 top-[105px] h-28 w-36 -translate-x-1/2 rounded-[24px] border-4 border-black bg-[#151515] shadow-[inset_0_-20px_0_#ff2d9b]" />
      <div className="absolute left-[78px] top-[120px] h-28 w-8 rotate-[15deg] rounded-full bg-[#ffd6c9]" />
      <div className="absolute right-[78px] top-[120px] h-28 w-8 rotate-[-15deg] rounded-full bg-[#ffd6c9]" />
      <div className="absolute left-1/2 top-[215px] h-28 w-44 -translate-x-1/2 rounded-b-[48px] border-4 border-black bg-[#4f7cff]" />
      <div className="absolute left-[113px] top-[320px] h-24 w-9 rounded-full bg-[#ffd6c9]" />
      <div className="absolute right-[113px] top-[320px] h-24 w-9 rounded-full bg-[#ffd6c9]" />
      <div className="absolute left-[94px] top-[397px] h-5 w-16 rounded-full bg-black" />
      <div className="absolute right-[94px] top-[397px] h-5 w-16 rounded-full bg-black" />
      <div className="absolute right-8 top-44 h-24 w-20 rotate-[-10deg] rounded-[28px] border-4 border-black bg-[#21d9ff] shadow-pink">
        <span className="absolute left-1/2 top-1 h-14 w-1 -translate-x-1/2 rounded-full bg-black" />
        <span className="absolute bottom-4 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-[#ffdf3d]" />
      </div>
      <div className="absolute left-5 top-64 h-16 w-16 rotate-[12deg] rounded-[18px] border-4 border-black bg-[#ffdf3d]">
        <span className="absolute left-3 top-4 h-2 w-2 rounded-full bg-black" />
        <span className="absolute right-3 top-4 h-2 w-2 rounded-full bg-black" />
        <span className="absolute bottom-4 left-1/2 h-2 w-7 -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}

export default function HomePage({ onStart }) {
  return (
    <main className="relative h-svh overflow-hidden bg-[#f7fbff] text-[#151515] lg:min-h-screen">
      <div className="absolute inset-0 grid-paper opacity-80" />
      <div className="absolute left-[-8rem] top-[-7rem] h-80 w-80 rounded-full bg-[#a8ff2d]/45 blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-8rem] h-96 w-96 rounded-full bg-[#21d9ff]/35 blur-3xl" />
      <div className="absolute right-[10%] top-[12%] h-36 w-36 rounded-full bg-[#ff2d9b]/20 blur-2xl" />

      {floatItems.map((item, index) => (
        <FloatingSticker key={item.label} item={item} index={index} />
      ))}

      <section className="relative z-10 mx-auto flex h-full w-full max-w-[430px] flex-col px-4 py-3 sm:px-8 lg:min-h-screen lg:max-w-7xl lg:justify-between lg:px-10 lg:py-5">
        <header className="flex shrink-0 items-center justify-between gap-3">
          <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1.5 shadow-neon backdrop-blur-xl sm:gap-3 sm:px-4 sm:py-2">
            <img src={logoUrl} alt="SANFU" className="h-6 w-auto object-contain sm:h-7" />
            <span className="hidden h-5 w-px bg-black/15 sm:block" />
            <span className="text-sm font-black tracking-normal">Style Lab</span>
          </div>
          <div className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-[11px] font-bold text-black/70 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs">
            三福穿搭实验室
          </div>
        </header>

        <div className="flex min-h-0 flex-1 flex-col gap-3 py-3 lg:grid lg:items-center lg:gap-10 lg:py-10 lg:grid-cols-[1fr_420px]">
          <div className="shrink-0 lg:max-w-3xl">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#a8ff2d] px-3 py-1.5 text-xs font-black shadow-[4px_4px_0_#151515] sm:mb-6 sm:px-4 sm:py-2 sm:text-sm sm:shadow-[6px_6px_0_#151515]">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              SANFU Style Lab
            </div>
            <h1 className="neon-text text-[2rem] font-black leading-[1.04] tracking-normal sm:text-7xl lg:text-8xl">
              不是买一件，
              <span className="block text-[#ff2d9b]">是搭出一种今天</span>
            </h1>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-5 text-black/68 sm:mt-6 sm:text-xl sm:leading-8">
              三福穿搭实验室，陪你把通勤、开学、聚会、宿舍日常都搭得更有意思。
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
              <button
                onClick={onStart}
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-black bg-gradient-to-r from-[#ff2d9b] via-[#ffdf3d] to-[#21d9ff] px-5 py-3 text-sm font-black text-black shadow-[5px_5px_0_#151515] transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_#151515] sm:gap-3 sm:px-7 sm:py-4 sm:text-base sm:shadow-[8px_8px_0_#151515] sm:hover:shadow-[12px_12px_0_#151515]"
              >
                开始我的今日搭配
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
              <div className="hidden items-center gap-2 rounded-full bg-white/70 px-4 py-3 text-sm font-bold text-black/62 backdrop-blur-xl sm:inline-flex">
                <Camera className="h-4 w-4 text-[#ff2d9b]" />
                场景 + 风格 + 单品 + 封面生成
              </div>
            </div>
          </div>

          <div className="relative min-h-0 flex-1 lg:flex-none">
            <div className="absolute inset-x-0 top-4 mx-auto h-60 w-60 rounded-full border-[14px] border-[#21d9ff]/30 bg-[#ff2d9b]/10 blur-sm sm:h-72 sm:w-72 sm:border-[18px]" />
            <div className="relative flex h-full min-h-0 rounded-[28px] border-2 border-black bg-white/65 p-2 shadow-[7px_7px_0_#151515] backdrop-blur-xl sm:rounded-[44px] sm:p-4 sm:shadow-[12px_12px_0_#151515] lg:h-auto">
              <div className="scanline relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[22px] bg-gradient-to-br from-[#fff] via-[#e9fbff] to-[#fff1f8] sm:rounded-[34px] lg:flex-none">
                <img
                  src={coverUrl}
                  alt="三福潮趣穿搭封面"
                  className="h-full max-h-full w-full object-contain object-center lg:h-[420px]"
                  draggable="false"
                />
              </div>
              <div className="absolute -bottom-3 left-5 inline-flex rotate-[-3deg] items-center gap-1.5 rounded-full border-2 border-black bg-[#ffdf3d] px-3 py-1.5 text-xs font-black shadow-[4px_4px_0_#151515] sm:-bottom-5 sm:left-8 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm sm:shadow-[5px_5px_0_#151515]">
                <WandSparkles className="h-4 w-4" />
                潮趣好搭子在线
              </div>
            </div>
          </div>
        </div>

        <div className="hidden flex-wrap gap-2 pb-2 text-xs font-black text-black/65 lg:flex">
          {["通勤状态", "开学松弛", "Livehouse 出片", "宿舍随手拍", "Citywalk 亮色", "配件小亮点"].map(
            (tag) => (
              <span key={tag} className="rounded-full border border-black/10 bg-white/65 px-3 py-2 backdrop-blur">
                #{tag}
              </span>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
