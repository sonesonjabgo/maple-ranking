"use client";
import React, { useEffect, useState } from "react";
import RankCard from "./card";
import { RankProps } from "../../types/rank.type";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import { urlString } from "../../constants/rankConst";

const API_KEY = process.env.NEXT_PUBLIC_NEXON_API_KEY;

const now = dayjs().format("YYYY-MM-DD");

interface RankDataParams {
  pageNum: string;
  job: string | null;
  worldName: string | null;
}

const fetchRankData = async ({
  pageNum,
  job,
  worldName,
}: RankDataParams): Promise<RankProps[]> => {
  const params = {
    date: now,
    page: String(pageNum),
    ...(job && { class: job }),
    ...(worldName && { world_name: worldName }),
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

export default function SearchResult() {
  const [data, setData] = useState<RankProps[]>();
  const [page, setPage] = useState(1);

  const params = useSearchParams();
  const jobParam = params.get("job");
  const worldNameParam = params.get("worldName");

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0,
    });
    const observerTarget = document.getElementById("observer");
    if (observerTarget) {
      observer.observe(observerTarget);
    }
  }, []);

  const fetchData = async (append: boolean) => {
    try {
      const data = await fetchRankData({
        pageNum: String(page),
        job: jobParam,
        worldName: worldNameParam,
      });
      setData((prevData) => {
        if (append) {
          return prevData ? [...prevData, ...data] : [...data];
        } else {
          return data;
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(false);
  }, [params.toString()]);

  useEffect(() => {
    fetchData(true);
  }, [page]);

  return (
    <div className="flex flex-col items-center w-full gap-3">
      {data?.map((rank, index) => (
        <RankCard
          key={index}
          world_name={rank.world_name}
          ranking={rank.ranking}
          character_name={rank.character_name}
          character_level={rank.character_level}
          character_popularity={rank.character_popularity}
        />
      ))}
      <div id="observer" style={{ height: "10px" }}></div>
    </div>
  );
}
