import { scenes } from "../data/demoData.js";

export default function SceneSelector({ selectedScene, onSelectScene }) {
  return (
    <section className="min-w-0 shrink-0">
      <div className="mb-2">
        <p className="text-xs font-black text-black/45">STEP 01</p>
        <h3 className="font-black leading-5">生活场景</h3>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {scenes.map((scene) => {
          const active = scene.id === selectedScene.id;
          return (
            <button
              key={scene.id}
              onClick={() => onSelectScene(scene)}
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
    </section>
  );
}
