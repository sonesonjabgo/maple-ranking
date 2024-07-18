"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export type NewParamsType = { worldName?: string; job?: string };

export default function UseCustomSearchParams() {
  const router = useRouter();
  const pathName = usePathname();
  const _searchParams = useSearchParams();
  const searchParams = new URLSearchParams(_searchParams.toString());

  const setNewParams = (newParams: NewParamsType) => {
    for (const [key, value] of Object.entries(newParams)) {
      if (value) searchParams.set(key, value);
      else searchParams.delete(key);
    }
    return searchParams.toString();
  };

  const setSearchParams = (newParams: NewParamsType) => {
    const params = setNewParams(newParams);

    return router.push(`${pathName}?${params}`);
  };

  return { searchParams: Object.fromEntries(searchParams), setSearchParams };
}
