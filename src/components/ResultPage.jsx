import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Download, RefreshCw, Sparkles, UploadCloud } from "lucide-react";
import { categories, posterLines } from "../data/demoData.js";
import AvatarLayerStack from "./AvatarLayerStack.jsx";
import animeOutfitCover from "../assets/anime-outfit-cover.png";

function UploadStep({ uploadedImage, setUploadedImage, onStart }) {
  const inputRef = useRef(null);

  const onFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setUploadedImage(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[1fr_420px]">
      <div className="glass-panel rounded-[34px] p-6">
        <p className="mb-4 inline-flex rounded-full bg-[#a8ff2d] px-4 py-2 text-xs font-black">
          COVER GENERATOR
        </p>
        <h1 className="text-4xl font-black leading-tight sm:text-5xl">
          上传一张照片，让 AI 搭子把这套穿到你的今天里
        </h1>
        <p className="mt-4 text-sm font-bold text-black/55">仅用于本次概念生成展示</p>
        <button
          onClick={() => inputRef.current?.click()}
          className="mt-8 flex min-h-[260px] w-full flex-col items-center justify-center rounded-[30px] border-2 border-dashed border-black/18 bg-white/62 p-6 text-center transition hover:-translate-y-1 hover:border-[#ff2d9b]"
        >
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="上传照片预览"
              className="max-h-[320px] rounded-[24px] object-contain shadow-neon"
            />
          ) : (
            <>
              <UploadCloud className="mb-4 h-12 w-12 text-[#ff2d9b]" />
              <span className="text-lg font-black">点击上传图片</span>
              <span className="mt-2 text-sm font-bold text-black/45">本地预览，不离开你的设备</span>
            </>
          )}
        </button>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onFileChange} />
        <button
          onClick={onStart}
          className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-[24px] border-2 border-black bg-gradient-to-r from-[#ff2d9b] via-[#ffdf3d] to-[#21d9ff] px-6 py-4 text-base font-black shadow-[7px_7px_0_#151515] transition hover:-translate-y-1"
        >
          <Sparkles className="h-5 w-5" />
          开始生成
        </button>
      </div>
      <div className="glass-panel rounded-[34px] p-5">
        <div className="rounded-[30px] border-2 border-black/10 bg-white/58 p-4">
          <AvatarLayerStack selectedItems={{}} selectedGender="female" />
        </div>
      </div>
    </div>
  );
}

function GeneratingStep({ progressText }) {
  return (
    <div className="glass-panel mx-auto flex min-h-[620px] w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-[38px] p-6 text-center">
      <div className="relative mb-10 flex h-56 w-56 items-center justify-center rounded-full border-2 border-black bg-white">
        <div className="absolute inset-4 animate-spin rounded-full border-[14px] border-[#21d9ff] border-t-[#ff2d9b]" />
        <div className="absolute inset-12 animate-pulseGlow rounded-full border-2 border-black bg-[#ffdf3d]" />
        <Sparkles className="relative z-10 h-12 w-12 text-black" />
      </div>
      <h1 className="text-3xl font-black sm:text-5xl">三福潮趣生活封面生成中</h1>
      <p className="mt-5 rounded-full bg-black px-5 py-3 text-sm font-black text-white">{progressText}</p>
      <div className="mt-8 h-4 w-full max-w-xl overflow-hidden rounded-full border border-black/10 bg-white">
        <div className="h-full w-3/4 animate-shimmer rounded-full bg-[linear-gradient(90deg,#ff2d9b,#ffdf3d,#21d9ff,#a8ff2d,#ff2d9b)] bg-[length:220%_100%]" />
      </div>
    </div>
  );
}

function PosterResult({ state, onBack, onAgain }) {
  const [toast, setToast] = useState("");
  const { selectedScene, selectedStyle, selectedItems, uploadedImage } = state;
  const selectedProducts = categories
    .map((category) => selectedItems[category.id])
    .filter(Boolean)
    .slice(0, 7);
  const title = `${selectedScene.name}${selectedStyle.name}搭`;
  const line = posterLines[selectedScene.id] || "今天这套很有自己的状态。";

  const savePoster = () => {
    setToast("封面已准备好，今天这套稳了。");
    window.setTimeout(() => setToast(""), 2400);
  };

  return (
    <div className="mx-auto grid w-full max-w-6xl items-center gap-6 lg:grid-cols-[470px_1fr]">
      <div className="poster-grain relative overflow-hidden rounded-[38px] border-2 border-black bg-white shadow-[14px_14px_0_#151515]">
        <div
          className="relative flex min-h-[720px] flex-col p-6"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,.74), rgba(255,255,255,.42) 46%, rgba(255,255,255,.86)), url("${selectedScene.backgroundImage}")`,
            backgroundPosition: `center, ${selectedScene.backgroundPosition || "center"}`,
            backgroundSize: "cover, cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="rounded-full border-2 border-black bg-[#a8ff2d] px-4 py-2 text-xs font-black">
              SANFU Style Lab
            </span>
            <span className="rounded-full border-2 border-black bg-white px-4 py-2 text-xs font-black">
              #{selectedScene.name}
            </span>
          </div>
          <div className="relative mt-5 flex flex-1 items-center justify-center overflow-hidden rounded-[30px] border-2 border-black/12 bg-white/62">
            {uploadedImage && (
              <img
                src={uploadedImage}
                alt="用户上传照片"
                className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale-[20%]"
              />
            )}
            <div className="absolute inset-0 grid-paper opacity-30" />
            <img
              src={animeOutfitCover}
              alt="原创动漫美女穿搭打卡照"
              className="relative z-10 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-5 bottom-5 z-20 flex items-center justify-between gap-3">
              <span className="rounded-full border-2 border-black bg-white/88 px-3 py-2 text-[11px] font-black shadow-[4px_4px_0_rgba(0,0,0,.2)] backdrop-blur">
                原创动漫穿搭
              </span>
              <span className="rounded-full border-2 border-black bg-[#a8ff2d] px-3 py-2 text-[11px] font-black shadow-[4px_4px_0_rgba(0,0,0,.2)]">
                今日打卡照
              </span>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-4xl font-black leading-tight">{title}</h1>
            <p className="mt-3 rounded-[22px] bg-black px-4 py-3 text-sm font-black leading-6 text-white">
              {line}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#ffdf3d] px-3 py-2 text-xs font-black">{selectedStyle.name}</span>
              {selectedProducts.map((product) => (
                <span key={product.id} className="rounded-full bg-white px-3 py-2 text-xs font-black shadow-neon">
                  {product.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel rounded-[34px] p-6">
        <p className="inline-flex rounded-full bg-[#21d9ff] px-4 py-2 text-xs font-black">
          POSTER READY
        </p>
        <h2 className="mt-4 text-4xl font-black leading-tight">你的三福潮趣生活封面生成好了</h2>
        <p className="mt-4 text-base font-semibold leading-8 text-black/58">
          这张封面把当前场景、风格和搭配清单整合成一个可分享的生活状态。重点不是某一件单品，而是今天的你看起来很会搭。
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          <button
            onClick={savePoster}
            className="inline-flex items-center justify-center gap-2 rounded-[22px] border-2 border-black bg-[#a8ff2d] px-4 py-4 text-sm font-black shadow-[5px_5px_0_#151515] transition hover:-translate-y-1"
          >
            <Download className="h-5 w-5" />
            保存封面
          </button>
          <button
            onClick={onAgain}
            className="inline-flex items-center justify-center gap-2 rounded-[22px] border border-black/12 bg-white px-4 py-4 text-sm font-black transition hover:-translate-y-1"
          >
            <RefreshCw className="h-5 w-5" />
            重新生成
          </button>
          <button
            onClick={onBack}
            className="inline-flex items-center justify-center gap-2 rounded-[22px] border border-black/12 bg-white px-4 py-4 text-sm font-black transition hover:-translate-y-1"
          >
            <ArrowLeft className="h-5 w-5" />
            返回修改搭配
          </button>
        </div>
        {toast && (
          <div className="mt-5 animate-slideUp rounded-[22px] border-2 border-black bg-[#ffdf3d] px-4 py-3 text-sm font-black shadow-[5px_5px_0_#151515]">
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResultPage({ state, setUploadedImage, setGenerationStep, onBack }) {
  const [progressIndex, setProgressIndex] = useState(0);
  const progressTexts = useMemo(
    () => [
      "AI 搭子正在把这套穿到你的今天里",
      "正在匹配场景氛围",
      "正在补一点出片感",
    ],
    [],
  );

  const startGeneration = () => {
    setProgressIndex(0);
    setGenerationStep("generating");
  };

  useEffect(() => {
    if (state.generationStep !== "generating") return undefined;
    const textTimer = window.setInterval(() => {
      setProgressIndex((index) => Math.min(index + 1, progressTexts.length - 1));
    }, 950);
    const doneTimer = window.setTimeout(() => {
      setGenerationStep("done");
    }, 3100);
    return () => {
      window.clearInterval(textTimer);
      window.clearTimeout(doneTimer);
    };
  }, [progressTexts.length, setGenerationStep, state.generationStep]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7fbff] px-4 py-5 text-[#151515]">
      <div className="fixed inset-0 grid-paper opacity-70" />
      <div className="fixed left-[-7rem] top-[-8rem] h-96 w-96 rounded-full bg-[#ff2d9b]/20 blur-3xl" />
      <div className="fixed bottom-[-9rem] right-[-8rem] h-96 w-96 rounded-full bg-[#21d9ff]/24 blur-3xl" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-40px)] w-full items-center">
        {state.generationStep === "upload" && (
          <UploadStep
            uploadedImage={state.uploadedImage}
            setUploadedImage={setUploadedImage}
            onStart={startGeneration}
          />
        )}
        {state.generationStep === "generating" && (
          <GeneratingStep progressText={progressTexts[progressIndex]} />
        )}
        {state.generationStep === "done" && (
          <PosterResult state={state} onBack={onBack} onAgain={startGeneration} />
        )}
      </div>
    </main>
  );
}
