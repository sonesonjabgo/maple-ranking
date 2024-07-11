import React from "react";
import { fetchData } from "../../hooks/rankFetch";
import RankCard from "./card";

export default async function SearchResult() {
  const data = await fetchData();

  return (
    <div className="flex flex-col items-center w-full gap-3">
      {data.map((rank, index) => (
        <RankCard
          key={index}
          world_name={rank.world_name}
          ranking={rank.ranking}
          character_name={rank.character_name}
          character_level={rank.character_level}
          character_popularity={rank.character_popularity}
        />
      ))}
    </div>
  );
}
