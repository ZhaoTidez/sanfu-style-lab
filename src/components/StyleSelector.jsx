import { styles } from "../data/demoData.js";

export default function StyleSelector({ selectedStyle, onSelectStyle }) {
  return (
    <section>
      <div className="mb-3 flex items-end justify-between">
        <div>
          <p className="text-xs font-black text-black/45">STEP 02</p>
          <h3 className="font-black">风格表达</h3>
        </div>
        <span className="rounded-full bg-[#21d9ff] px-3 py-1 text-[11px] font-black">
          定气质
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {styles.map((style) => {
          const active = style.id === selectedStyle.id;
          return (
            <button
              key={style.id}
              onClick={() => onSelectStyle(style)}
              className={`rounded-full border px-3 py-2 text-xs font-black transition hover:-translate-y-0.5 ${
                active
                  ? "border-black bg-black text-white shadow-[4px_4px_0_var(--chip)]"
                  : "border-black/10 bg-white/60 text-black/70 hover:border-black/25"
              }`}
              style={{ "--chip": style.color }}
              title={style.description}
            >
              {style.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}
