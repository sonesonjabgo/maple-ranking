import React from "react";
import { Card, Divider, Skeleton } from "@nextui-org/react";

type Props = {
  world_name: string;
  ranking: number;
  character_name: string;
  character_level: number;
  character_popularity: number;
};

export default function RankCard(props: Props) {
  return (
    <Card className="w-1/2">
      <div className="flex gap-5 p-3">
        <Skeleton className="rounded-lg w-1/5" />
        <Divider orientation="vertical" />
        <div className="flex flex-col text-lg gap-2">
          <p>서버명 : {props.world_name}</p>
          <p>랭킹 : {props.ranking}</p>
          <p>캐릭터 명 : {props.character_name}</p>
          <p>레벨 : {props.character_level}</p>
          <p>인기도 : {props.character_popularity}</p>
        </div>
      </div>
    </Card>
  );
}
