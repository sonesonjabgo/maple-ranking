"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

type NewParamsType = { [key: string]: string };

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
    return router.push(`${pathName}?${setNewParams(newParams)}`);
  };

  return { searchParams: Object.fromEntries(searchParams), setSearchParams };
}
