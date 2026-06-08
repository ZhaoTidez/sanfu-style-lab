import { Bot } from "lucide-react";
import ChatStream from "./ChatStream.jsx";
import OutfitList from "./OutfitList.jsx";
import QuickActions from "./QuickActions.jsx";

export default function AICompanionPanel({ state, onQuickAction }) {
  return (
    <aside className="flex min-h-0 min-w-0 flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white p-3 shadow-[0_14px_36px_rgba(25,35,70,.08)] sm:p-4 lg:glass-panel lg:min-h-[720px] lg:max-h-[calc(100vh-104px)] lg:rounded-[30px]">
      <div className="mb-3 flex items-center gap-3 rounded-[18px] bg-[#f7f9fc] p-3 sm:mb-4 sm:rounded-[24px] sm:border sm:border-black/8 sm:bg-white/62">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-[#ff2d9b] via-[#ffdf3d] to-[#21d9ff] shadow-[3px_3px_0_#151515] sm:h-12 sm:w-12 sm:shadow-[4px_4px_0_#151515]">
          <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
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
