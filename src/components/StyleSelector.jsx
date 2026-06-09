export default function StyleSelector({
  selectedGender,
  selectedStyle,
  styles,
  onSelectStyle,
}) {
  return (
    <section className="min-w-0 shrink-0">
      <div className="mb-2">
        <p className="text-xs font-black text-black/45">STEP 02</p>
        <h3 className="font-black leading-5">风格表达</h3>
      </div>
      {selectedGender ? (
        <div className="grid grid-cols-2 gap-1.5">
          {styles.map((style) => {
            const active = style.id === selectedStyle.id;
            return (
              <button
                key={style.id}
                onClick={() => onSelectStyle(style)}
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
        <div className="rounded-[16px] border border-dashed border-black/12 bg-white/58 px-3 py-3 text-xs font-bold leading-5 text-black/45">
          先在中间选择女生或男生，系统会展示对应的风格表达分类。
        </div>
      )}
    </section>
  );
}
