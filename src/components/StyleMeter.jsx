export default function StyleMeter({ selectedCount, selectedScene, selectedStyle }) {
  const meters = [
    { label: "场景适配度", value: Math.min(98, 48 + selectedCount * 9), color: selectedScene.color },
    { label: "出片指数", value: Math.min(96, 36 + selectedCount * 10), color: "#ff2d9b" },
    { label: "潮趣值", value: Math.min(99, 42 + selectedCount * 11), color: selectedStyle.color },
  ];

  return (
    <div className="grid gap-3 rounded-[24px] border border-black/8 bg-white/62 p-4 sm:grid-cols-3">
      {meters.map((meter) => (
        <div key={meter.label}>
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-xs font-black text-black/55">{meter.label}</span>
            <span className="text-xs font-black">{meter.value}</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-black/8">
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
