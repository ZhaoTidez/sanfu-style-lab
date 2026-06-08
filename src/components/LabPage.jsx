import { Sparkles } from "lucide-react";
import FilterPanel from "./FilterPanel.jsx";
import AvatarShowroom from "./AvatarShowroom.jsx";
import AICompanionPanel from "./AICompanionPanel.jsx";

const logoUrl = new URL("../../e8745093e85fb076b47c1f8fb171db95.jpg", import.meta.url).href;

export default function LabPage({
  state,
  onSelectScene,
  onSelectStyle,
  onSelectCategory,
  onSelectGender,
  onSelectProduct,
  onQuickAction,
  onGenerate,
}) {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#151515]">
      <div className="fixed inset-0 grid-paper opacity-70" />
      <div className="fixed left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-[#ff2d9b]/20 blur-3xl" />
      <div className="fixed bottom-[-9rem] right-[-8rem] h-96 w-96 rounded-full bg-[#21d9ff]/25 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1740px] flex-col px-3 py-3 sm:px-5">
        <header className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-[28px] border border-white/75 bg-white/70 px-4 py-3 shadow-neon backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="SANFU" className="h-8 w-auto object-contain" />
            <div>
              <p className="text-sm font-black leading-4">三福穿搭实验室</p>
              <p className="text-xs font-bold text-black/48">SANFU Style Lab</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-xs font-black">
            <Sparkles className="h-4 w-4 text-[#ff2d9b]" />
            不是单品清单，是今天的生活状态
          </div>
        </header>

        <div className="grid flex-1 gap-3 lg:grid-cols-[minmax(280px,25%)_minmax(440px,1fr)_minmax(300px,25%)]">
          <FilterPanel
            state={state}
            onSelectScene={onSelectScene}
            onSelectStyle={onSelectStyle}
            onSelectCategory={onSelectCategory}
            onSelectProduct={onSelectProduct}
          />
          <AvatarShowroom state={state} onSelectGender={onSelectGender} onGenerate={onGenerate} />
          <AICompanionPanel state={state} onQuickAction={onQuickAction} />
        </div>
      </div>
    </main>
  );
}
