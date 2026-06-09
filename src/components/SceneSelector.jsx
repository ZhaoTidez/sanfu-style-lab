import { scenes } from "../data/demoData.js";

export default function SceneSelector({ selectedScene, onSelectScene }) {
  return (
    <section className="min-w-0">
      <div className="mb-3 flex items-end justify-between">
        <div>
          <p className="text-xs font-black text-black/45">STEP 01</p>
          <h3 className="font-black">生活场景</h3>
        </div>
      </div>
      <div className="-mx-3 flex max-w-[calc(100%+1.5rem)] snap-x gap-2 overflow-x-auto px-3 pb-1 lg:mx-0 lg:grid lg:max-w-full lg:grid-cols-1 lg:overflow-visible lg:px-0">
        {scenes.map((scene) => {
          const active = scene.id === selectedScene.id;
          return (
            <button
              key={scene.id}
              onClick={() => onSelectScene(scene)}
              className={`group min-h-[96px] w-[178px] shrink-0 snap-start rounded-2xl border p-3 text-left transition duration-300 hover:-translate-y-0.5 lg:min-h-0 lg:w-auto ${
                active
                  ? "border-black bg-white shadow-[4px_4px_0_#151515] lg:shadow-[5px_5px_0_#151515]"
                  : "border-black/8 bg-white/52 hover:border-black/20"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full border border-black/40"
                  style={{ backgroundColor: scene.color }}
                />
                <span className="text-sm font-black">{scene.name}</span>
              </div>
              <p className="mt-1 text-xs font-semibold leading-5 text-black/52">{scene.description}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
