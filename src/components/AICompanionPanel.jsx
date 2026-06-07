import { Bot } from "lucide-react";
import ChatStream from "./ChatStream.jsx";
import OutfitList from "./OutfitList.jsx";
import QuickActions from "./QuickActions.jsx";

export default function AICompanionPanel({ state, onQuickAction }) {
  return (
    <aside className="glass-panel flex min-h-[720px] flex-col overflow-hidden rounded-[30px] p-4 lg:max-h-[calc(100vh-104px)]">
      <div className="mb-4 flex items-center gap-3 rounded-[24px] border border-black/8 bg-white/62 p-3">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-[#ff2d9b] via-[#ffdf3d] to-[#21d9ff] shadow-[4px_4px_0_#151515]">
          <Bot className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-[#a8ff2d]" />
        </div>
        <div>
          <h2 className="text-lg font-black">AI 好搭子</h2>
          <p className="text-xs font-bold leading-5 text-black/48">
            懂点穿搭，也懂你今天想要的状态
          </p>
        </div>
      </div>

      <ChatStream messages={state.aiMessages} />
      <QuickActions onQuickAction={onQuickAction} />
      <OutfitList selectedItems={state.selectedItems} />
    </aside>
  );
}
