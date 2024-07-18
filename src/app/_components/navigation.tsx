"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navigation() {
  const path = usePathname();

  return (
    <div className="flex gap-5">
      <Link
        className={`p-5 border-b text-neutral-400 ${
          path === "/"
            ? "text-neutral-950 border-b-black dark:text-neutral-100 dark:border-b-white"
            : "border-none"
        }`}
        href={"/"}
      >
        홈
      </Link>
      <Link
        className={`p-5 border-b text-neutral-400 ${
          path === "/ranking"
            ? "text-neutral-950 border-b-black dark:text-neutral-100 dark:border-b-white"
            : "border-none"
        }`}
        href={"/ranking"}
      >
        랭킹
      </Link>
    </div>
  );
}
