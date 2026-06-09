import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function StyleSelector({
  selectedGender,
  selectedStyle,
  styles,
  onSelectStyle,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const selectStyle = (style) => {
    onSelectStyle(style);
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
          <span className="block text-[10px] font-black text-black/40">STEP 02</span>
          <span className="block truncate text-sm font-black leading-5">风格表达</span>
        </span>
        <span className="flex min-w-0 items-center gap-2">
          <span
            className="max-w-[120px] truncate rounded-full px-2.5 py-1 text-[10px] font-black"
            style={{
              backgroundColor: selectedGender ? selectedStyle.color : "rgba(0,0,0,.06)",
              color: selectedGender ? "#151515" : "rgba(0,0,0,.35)",
            }}
          >
            {selectedGender ? selectedStyle.name : "先选角色"}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-black/48 transition ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {isOpen &&
        (selectedGender ? (
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {styles.map((style) => {
              const active = style.id === selectedStyle.id;
              return (
                <button
                  key={style.id}
                  onClick={() => selectStyle(style)}
                  className={`min-w-0 truncate rounded-full border px-2.5 py-2 text-xs font-black transition hover:-translate-y-0.5 ${
                    active
                      ? "border-black bg-black text-white shadow-[3px_3px_0_var(--chip)]"
                      : "border-black/10 bg-white/58 text-black/68 hover:border-black/25"
                  }`}
                  style={{ "--chip": style.color }}
                  title={style.description}
                >
                  {style.name}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-2 rounded-[16px] border border-dashed border-black/12 bg-white/58 px-3 py-3 text-xs font-bold leading-5 text-black/45">
            先在中间选择女生或男生，系统会展示对应的风格表达分类。
          </div>
        ))}
    </section>
  );
}
