"use client";
import React from "react";

type Props = {
  data?: string;
};

export default function RankCardBody(props: Props) {
  return <div>{props.data}</div>;
}
