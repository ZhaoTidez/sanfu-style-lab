export default function StyleMeter({ selectedCount, selectedScene, selectedStyle }) {
  const meters = [
    { label: "场景适配度", value: Math.min(98, 48 + selectedCount * 9), color: selectedScene.color },
    { label: "出片指数", value: Math.min(96, 36 + selectedCount * 10), color: "#ff2d9b" },
    { label: "潮趣值", value: Math.min(99, 42 + selectedCount * 11), color: selectedStyle.color },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 rounded-[18px] border border-black/8 bg-white/62 p-2.5 sm:gap-3 sm:rounded-[24px] sm:p-4">
      {meters.map((meter) => (
        <div key={meter.label}>
          <div className="mb-1 flex items-center justify-between gap-1 sm:mb-2 sm:gap-2">
            <span className="truncate text-[10px] font-black text-black/55 sm:text-xs">{meter.label}</span>
            <span className="text-[10px] font-black sm:text-xs">{meter.value}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-black/8 sm:h-3">
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
