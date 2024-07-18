import React from "react";

type Props = {
  world_name: string;
  ranking: number;
  character_name: string;
  character_level: number;
  character_popularity: number;
  character_guildname: string | null;
};

export default function RankCard(props: Props) {
  return (
    <tr>
      <td className="py-2 px-4 border-b border-gray-300">{props.ranking}</td>
      <td className="py-2 px-4 border-b border-gray-300">
        {props.character_name}
      </td>
      <td className="py-2 px-4 border-b border-gray-300">{props.world_name}</td>
      <td className="py-2 px-4 border-b border-gray-300">
        {props.character_level}
      </td>
      <td className="py-2 px-4 border-b border-gray-300">
        {props.character_popularity}
      </td>
      <td className="py-2 px-4 border-b border-gray-300">
        {props.character_guildname}
      </td>
    </tr>
  );
}
