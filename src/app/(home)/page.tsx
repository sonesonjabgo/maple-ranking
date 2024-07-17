import React from "react";
import SearchResult from "../_components/searchResult";
import SearchSelect from "../_components/searchSelect";

export default async function Home() {
  return (
    <>
      <SearchSelect />
      <SearchResult />
    </>
  );
}
