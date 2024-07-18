import Image from "next/image";
import React from "react";
import mushroom from "../../../public/mushroom.png";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src={mushroom} alt="logo" width={70} priority></Image>
      </Link>
    </div>
  );
}
