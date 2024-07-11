import React from "react";
import RankCard from "./_components/card";
import dayjs from "dayjs";
import SearchSelect from "./_components/searchSelect";

export interface RankProps {
  date: string;
  world_name: string;
  ranking: number;
  character_name: string;
  character_level: number;
  character_exp: number;
  class_name: string;
  sub_class_name: string;
  character_popularity: number;
  character_guildname: string | null;
}

const API_KEY = process.env.NEXON_API_KEY;
const urlString = `https://open.api.nexon.com/maplestory/v1/ranking/overall`;
const now = dayjs().format("YYYY-MM-DD");

const fetchData = async (pageNum: number = 1): Promise<RankProps[]> => {
  const params = {
    date: now,
    page: String(pageNum),
  };
  const queryString = new URLSearchParams(params);
  const reqUrl = `${urlString}?${queryString}`;
  const res = await fetch(reqUrl, {
    headers: {
      "x-nxopen-api-key": API_KEY!,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));

  return res.ranking;
};

export default async function Home() {
  const data = await fetchData();

  return (
    <div className="flex flex-col items-center w-full">
      <SearchSelect />
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
