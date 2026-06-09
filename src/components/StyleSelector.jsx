export default function StyleSelector({
  selectedGender,
  selectedStyle,
  styles,
  onSelectStyle,
}) {
  return (
    <section className="min-w-0">
      <div className="mb-3 flex items-end justify-between">
        <div>
          <p className="text-xs font-black text-black/45">STEP 02</p>
          <h3 className="font-black">风格表达</h3>
        </div>
      </div>
      {selectedGender ? (
        <div className="-mx-3 flex max-w-[calc(100%+1.5rem)] gap-2 overflow-x-auto px-3 pb-1 lg:mx-0 lg:max-w-full lg:flex-wrap lg:overflow-visible lg:px-0">
          {styles.map((style) => {
            const active = style.id === selectedStyle.id;
            return (
              <button
                key={style.id}
                onClick={() => onSelectStyle(style)}
                className={`shrink-0 rounded-full border px-3 py-2 text-xs font-black transition hover:-translate-y-0.5 ${
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
      ) : (
        <div className="rounded-[18px] border border-dashed border-black/12 bg-white/58 px-3 py-4 text-xs font-bold leading-5 text-black/45">
          先在中间选择女生或男生，系统会展示对应的风格表达分类。
        </div>
      )}
    </section>
  );
}
