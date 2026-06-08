import { ArrowRight, Camera, Sparkles, WandSparkles } from "lucide-react";

const logoUrl = new URL("../../e8745093e85fb076b47c1f8fb171db95.jpg", import.meta.url).href;

const floatItems = [
  { label: "短上衣", className: "left-[7%] top-[22%] rotate-[-10deg]", color: "#ff2d9b" },
  { label: "牛仔裙", className: "left-[14%] bottom-[18%] rotate-[8deg]", color: "#4f7cff" },
  { label: "口红", className: "right-[12%] top-[18%] rotate-[12deg]", color: "#ff6fae" },
  { label: "耳饰", className: "right-[7%] bottom-[24%] rotate-[-8deg]", color: "#dfe7f1" },
  { label: "盲盒", className: "left-[42%] top-[12%] rotate-[6deg]", color: "#ffdf3d" },
  { label: "包挂", className: "right-[32%] bottom-[10%] rotate-[10deg]", color: "#a8ff2d" },
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
    <main className="relative min-h-screen overflow-hidden bg-[#f7fbff] text-[#151515]">
      <div className="absolute inset-0 grid-paper opacity-80" />
      <div className="absolute left-[-8rem] top-[-7rem] h-80 w-80 rounded-full bg-[#a8ff2d]/45 blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-8rem] h-96 w-96 rounded-full bg-[#21d9ff]/35 blur-3xl" />
      <div className="absolute right-[10%] top-[12%] h-36 w-36 rounded-full bg-[#ff2d9b]/20 blur-2xl" />

      {floatItems.map((item, index) => (
        <FloatingSticker key={item.label} item={item} index={index} />
      ))}

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-5 py-5 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 shadow-neon backdrop-blur-xl">
            <img src={logoUrl} alt="SANFU" className="h-7 w-auto object-contain" />
            <span className="hidden h-5 w-px bg-black/15 sm:block" />
            <span className="text-sm font-black tracking-normal">Style Lab</span>
          </div>
          <div className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-bold text-black/70 backdrop-blur-xl">
            三福穿搭实验室
          </div>
        </header>

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1fr_420px]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#a8ff2d] px-4 py-2 text-sm font-black shadow-[6px_6px_0_#151515]">
              <Sparkles className="h-4 w-4" />
              SANFU Style Lab
            </div>
            <h1 className="neon-text text-5xl font-black leading-[1.04] tracking-normal sm:text-7xl lg:text-8xl">
              不是买一件，
              <span className="block text-[#ff2d9b]">是搭出一种今天</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-black/68 sm:text-xl">
              三福穿搭实验室，陪你把通勤、开学、聚会、宿舍日常都搭得更有意思。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={onStart}
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-black bg-gradient-to-r from-[#ff2d9b] via-[#ffdf3d] to-[#21d9ff] px-7 py-4 text-base font-black text-black shadow-[8px_8px_0_#151515] transition duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_#151515]"
              >
                开始我的今日搭配
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-3 text-sm font-bold text-black/62 backdrop-blur-xl">
                <Camera className="h-4 w-4 text-[#ff2d9b]" />
                场景 + 风格 + 单品 + 封面生成
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-0 top-4 mx-auto h-72 w-72 rounded-full border-[18px] border-[#21d9ff]/30 bg-[#ff2d9b]/10 blur-sm" />
            <div className="relative rounded-[44px] border-2 border-black bg-white/65 p-4 shadow-[12px_12px_0_#151515] backdrop-blur-xl">
              <div className="scanline relative overflow-hidden rounded-[34px] bg-gradient-to-br from-[#fff] via-[#e9fbff] to-[#fff1f8]">
                <CssMuse />
              </div>
              <div className="absolute -bottom-5 left-8 inline-flex rotate-[-3deg] items-center gap-2 rounded-full border-2 border-black bg-[#ffdf3d] px-4 py-2 text-sm font-black shadow-[5px_5px_0_#151515]">
                <WandSparkles className="h-4 w-4" />
                潮趣好搭子在线
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pb-2 text-xs font-black text-black/65">
          {["通勤状态", "开学松弛", "Livehouse 出片", "宿舍随手拍", "Citywalk 亮色", "美妆小心机"].map(
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
