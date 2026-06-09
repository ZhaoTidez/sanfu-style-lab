export default function StyleMeter({ selectedCount, selectedScene, selectedStyle }) {
  const meters = [
    { label: "场景", value: Math.min(98, 48 + selectedCount * 9), color: selectedScene.color },
    { label: "出片", value: Math.min(96, 36 + selectedCount * 10), color: "#ff2d9b" },
    { label: "潮趣", value: Math.min(99, 42 + selectedCount * 11), color: selectedStyle.color },
  ];

  return (
    <div className="grid grid-cols-3 gap-1.5 rounded-[16px] border border-black/8 bg-white/54 p-1.5 sm:gap-2 sm:p-2">
      {meters.map((meter) => (
        <div key={meter.label} className="min-w-0 rounded-[12px] bg-white/62 px-2 py-1.5">
          <div className="mb-1 flex items-center justify-between gap-1">
            <span className="truncate text-[10px] font-black text-black/48">{meter.label}</span>
            <span className="text-[10px] font-black">{meter.value}</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-black/8">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${meter.value}%`, backgroundColor: meter.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
