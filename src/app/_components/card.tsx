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
  const data = Object.entries(props);
  return (
    <tr>
      {data.map((data, index) => (
        <td key={index} className="p-4 border-b border-gray-300">
          {data[1]}
        </td>
      ))}
    </tr>
  );
}
