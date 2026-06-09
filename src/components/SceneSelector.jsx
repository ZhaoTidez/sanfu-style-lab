import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { scenes } from "../data/demoData.js";

export default function SceneSelector({ selectedScene, onSelectScene }) {
  const [isOpen, setIsOpen] = useState(false);

  const selectScene = (scene) => {
    onSelectScene(scene);
    setIsOpen(false);
  };

  return (
    <section className="min-w-0 shrink-0 rounded-[18px] border border-black/8 bg-white/58 px-3 py-2">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="min-w-0">
          <span className="block text-[10px] font-black text-black/40">STEP 01</span>
          <span className="block truncate text-sm font-black leading-5">生活场景</span>
        </span>
        <span className="flex min-w-0 items-center gap-2">
          <span className="max-w-[120px] truncate rounded-full bg-[#a8ff2d] px-2.5 py-1 text-[10px] font-black text-black">
            {selectedScene.name}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-black/48 transition ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {isOpen && (
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {scenes.map((scene) => {
            const active = scene.id === selectedScene.id;
            return (
              <button
                key={scene.id}
                onClick={() => selectScene(scene)}
                title={scene.description}
                className={`group flex min-w-0 items-center gap-2 rounded-full border px-2.5 py-2 text-left text-xs font-black transition hover:-translate-y-0.5 ${
                  active
                    ? "border-black bg-white shadow-[3px_3px_0_#151515]"
                    : "border-black/8 bg-white/58 text-black/64 hover:border-black/20"
                }`}
              >
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full border border-black/40"
                  style={{ backgroundColor: scene.color }}
                />
                <span className="truncate">{scene.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
