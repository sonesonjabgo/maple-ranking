import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full">
      <input
        type="text"
        className="w-full h-8 dark:border border-neutral-600"
        placeholder="닉네임을 입력 해주세요."
      />
    </div>
  );
}
