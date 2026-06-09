import { Bot, SlidersHorizontal, Sparkles, X } from "lucide-react";
import { useState } from "react";
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
  const [mobilePanel, setMobilePanel] = useState(null);
  const closeMobilePanel = () => setMobilePanel(null);
  const openFilterPanel = () => setMobilePanel("filter");
  const openCompanionPanel = () => setMobilePanel("companion");
  const isFilterOpen = mobilePanel === "filter";
  const isCompanionOpen = mobilePanel === "companion";

  const drawerTitle = isFilterOpen ? "灵感筛选舱" : "AI 好搭子";

  return (
    <main className="h-svh overflow-hidden bg-[#f5f7fb] text-[#151515] lg:min-h-screen lg:overflow-x-hidden lg:overflow-y-auto lg:bg-[#f7fbff]">
      <div className="fixed inset-0 hidden grid-paper opacity-70 lg:block" />
      <div className="fixed left-[-8rem] top-[-8rem] hidden h-72 w-72 rounded-full bg-[#ff2d9b]/20 blur-3xl lg:block" />
      <div className="fixed bottom-[-9rem] right-[-8rem] hidden h-96 w-96 rounded-full bg-[#21d9ff]/25 blur-3xl lg:block" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[430px] flex-col px-3 pb-2 pt-2 lg:min-h-screen lg:max-w-[1740px] lg:px-5 lg:py-3">
        <header className="z-30 mb-2 flex shrink-0 items-center justify-between gap-3 rounded-[20px] border border-black/5 bg-white/92 px-3 py-2 shadow-[0_10px_30px_rgba(25,35,70,.08)] backdrop-blur-xl lg:mb-3 lg:rounded-[28px] lg:border-white/75 lg:bg-white/70 lg:px-4 lg:py-3 lg:shadow-neon">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="SANFU" className="h-8 w-auto object-contain" />
            <div>
              <p className="text-sm font-black leading-4">三福穿搭实验室</p>
              <p className="text-xs font-bold text-black/48">SANFU Style Lab</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-xs font-black sm:flex">
            <Sparkles className="h-4 w-4 text-[#ff2d9b]" />
            不是单品清单，是今天的生活状态
          </div>
        </header>

        <div className="mb-2 grid shrink-0 grid-cols-2 gap-2 rounded-[22px] border border-black/5 bg-white/92 p-2 shadow-[0_12px_28px_rgba(25,35,70,.1)] backdrop-blur-xl lg:hidden">
          <button
            type="button"
            onClick={openFilterPanel}
            className="group flex min-w-0 items-center gap-2 rounded-[18px] border border-[#ff2d9b]/20 bg-white px-3 py-2 text-left shadow-[0_8px_18px_rgba(255,45,155,.12)] transition active:scale-[.98]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff2d9b]/12 text-[#ff2d9b]">
              <SlidersHorizontal className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-black">灵感筛选舱</span>
              <span className="block truncate text-[10px] font-bold text-black/45">场景 / 风格 / 单品</span>
            </span>
          </button>
          <button
            type="button"
            onClick={openCompanionPanel}
            className="group flex min-w-0 items-center gap-2 rounded-[18px] border border-black bg-black px-3 py-2 text-left text-white shadow-[0_8px_18px_rgba(0,0,0,.2)] transition active:scale-[.98]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a8ff2d] text-black">
              <Bot className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-black">AI 好搭子</span>
              <span className="block truncate text-[10px] font-bold text-white/58">一键搭完整套</span>
            </span>
          </button>
        </div>

        <div className="grid min-h-0 min-w-0 flex-1 grid-rows-[minmax(0,1fr)] gap-3 overflow-hidden lg:grid-cols-[minmax(280px,25%)_minmax(440px,1fr)_minmax(300px,25%)] lg:grid-rows-none lg:overflow-visible">
          <div className="hidden min-w-0 lg:order-1 lg:block">
            <FilterPanel
              state={state}
              onSelectScene={onSelectScene}
              onSelectStyle={onSelectStyle}
              onSelectCategory={onSelectCategory}
              onSelectProduct={onSelectProduct}
            />
          </div>
          <div className="order-1 min-w-0 lg:order-2">
            <AvatarShowroom state={state} onSelectGender={onSelectGender} onGenerate={onGenerate} />
          </div>
          <div className="hidden min-w-0 lg:order-3 lg:block">
            <AICompanionPanel state={state} onQuickAction={onQuickAction} />
          </div>
        </div>

      </div>

      {mobilePanel && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="关闭面板"
            onClick={closeMobilePanel}
            className="absolute inset-0 bg-black/32 backdrop-blur-[2px]"
          />
          <section
            className={`absolute top-0 flex h-full w-[88vw] max-w-[390px] flex-col bg-[#f5f7fb] p-3 shadow-[0_0_40px_rgba(0,0,0,.22)] transition ${
              isFilterOpen ? "left-0 rounded-r-[28px]" : "right-0 rounded-l-[28px]"
            }`}
          >
            <div className="mb-3 flex items-center justify-between rounded-[20px] bg-white px-3 py-2.5 shadow-[0_10px_24px_rgba(25,35,70,.08)]">
              <div>
                <p className="text-[10px] font-black uppercase text-black/35">
                  {isFilterOpen ? "Style Panel" : "Companion Panel"}
                </p>
                <h2 className="text-lg font-black">{drawerTitle}</h2>
              </div>
              <button
                type="button"
                onClick={closeMobilePanel}
                className="rounded-full bg-black p-2 text-white"
                aria-label="关闭"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div
              className={`thin-scrollbar min-h-0 flex-1 ${
                isFilterOpen ? "overflow-hidden pb-0" : "overflow-y-auto pb-20"
              }`}
            >
              {isFilterOpen ? (
                <FilterPanel
                  state={state}
                  onSelectScene={onSelectScene}
                  onSelectStyle={onSelectStyle}
                  onSelectCategory={onSelectCategory}
                  onSelectProduct={onSelectProduct}
                />
              ) : (
                <AICompanionPanel state={state} onQuickAction={onQuickAction} />
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
