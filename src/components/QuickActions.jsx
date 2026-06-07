import { WandSparkles } from "lucide-react";
import { quickActions } from "../data/demoData.js";

export default function QuickActions({ onQuickAction }) {
  return (
    <div className="mt-3 rounded-[24px] border border-black/8 bg-white/55 p-3">
      <div className="mb-2 flex items-center gap-2 text-xs font-black text-black/48">
        <WandSparkles className="h-4 w-4 text-[#ff2d9b]" />
        好搭子快捷灵感
      </div>
      <div className="flex flex-wrap gap-2">
        {quickActions.map((action) => (
          <button
            key={action}
            onClick={() => onQuickAction(action)}
            className={`rounded-full border px-3 py-2 text-xs font-black transition hover:-translate-y-0.5 ${
              action === "一键搭完整套"
                ? "border-black bg-[#a8ff2d] shadow-[3px_3px_0_#151515]"
                : "border-black/10 bg-white/70 text-black/68 hover:border-black/25"
            }`}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
