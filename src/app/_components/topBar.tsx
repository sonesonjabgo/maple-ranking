import React from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import Darkmode from "./darkmode";

export default function TopBar() {
  return (
    <div className="w-full bg-neutral-200 dark:bg-neutral-800 flex justify-center items-center gap-5">
      <Logo />
      <SearchBar />
      <Darkmode />
    </div>
  );
}
