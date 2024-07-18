"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navigation() {
  const path = usePathname();

  return (
    <div className="flex gap-5 *:text-neutral-400">
      <Link
        className={`p-5 border-b ${
          path === "/" ? "text-black dark:text-neutral-100" : "border-none"
        }`}
        href={"/"}
      >
        홈
      </Link>
      <Link
        className={`p-5 border-b ${
          path === "/ranking"
            ? "text-black dark:text-neutral-100"
            : "border-none"
        }`}
        href={"/ranking"}
      >
        랭킹
      </Link>
    </div>
  );
}
