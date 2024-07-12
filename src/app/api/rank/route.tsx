import dayjs from "dayjs";
import { RankProps } from "../../../types/rank.type";
import UseCustomSearchParams from "../../../hooks/useCustomSearchParams";
import { NextRequest } from "next/server";

const API_KEY = process.env.NEXON_API_KEY;
const urlString = `https://open.api.nexon.com/maplestory/v1/ranking/overall`;
const now = dayjs().format("YYYY-MM-DD");

const fetchData = async (pageNum: number = 1): Promise<RankProps[]> => {
  const { searchParams, setSearchParams } = UseCustomSearchParams();

  const params = {
    date: now,
    page: String(pageNum),
    world_name: searchParams.worldName,
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

export async function GET(request: NextRequest) {
  const data = await fetchData();
  return data;
}
