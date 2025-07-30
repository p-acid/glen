"use client";

import { Button } from "@/shared/ui";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

export function InlineSearchForm() {
  const [text, setText] = useState<string>("");

  return (
    <form
      role="search"
      className="border-border ring-border/50 flex h-12 items-center gap-3 rounded-3xl border pl-5 pr-2 transition-shadow focus-within:ring-4"
    >
      <input
        className="search-cancle-none flex-grow text-base font-medium focus:outline-none"
        type="search"
        enterKeyHint="search"
        aria-label="검색어 입력"
        placeholder="검색어를 입력해주세요"
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
      {text && (
        <button
          type="reset"
          aria-label="검색어 지우기"
          onClick={() => setText("")}
        >
          <X className="text-foreground size-4" />
        </button>
      )}
      <Button
        type="submit"
        size="icon"
        className="rounded-full"
        aria-label="검색어 제출"
      >
        <ArrowRight className="size-4.5" />
      </Button>
    </form>
  );
}
