import { useLayoutEffect, useRef } from "react";

export default function ChatStream({ messages }) {
  const streamRef = useRef(null);

  useLayoutEffect(() => {
    const stream = streamRef.current;
    if (!stream) return;

    const scrollToBottom = (behavior = "auto") => {
      stream.scrollTop = stream.scrollHeight;
      stream.scrollTo({
        top: stream.scrollHeight,
        behavior,
      });
    };

    scrollToBottom();
    const frame = window.requestAnimationFrame(() => scrollToBottom("smooth"));
    const timer = window.setTimeout(() => scrollToBottom(), 320);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [messages.length]);

  return (
    <div
      ref={streamRef}
      className="thin-scrollbar max-h-[260px] min-h-[160px] flex-1 space-y-3 overflow-y-auto rounded-[22px] border border-black/8 bg-white/45 p-3 sm:min-h-[220px] lg:max-h-none lg:min-h-[260px] lg:rounded-[24px]"
    >
      {messages.map((message) => (
        <div
          key={message.id}
          className={`animate-slideUp flex ${message.role === "ai" ? "justify-start" : "justify-end"}`}
        >
          <div
            className={`max-w-[92%] rounded-[22px] px-4 py-3 text-sm font-semibold leading-6 ${
              message.role === "ai"
                ? "rounded-tl-sm bg-white text-black shadow-neon"
                : "rounded-tr-sm bg-black text-white"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}
