import Image from "next/image";
import React from "react";
import { icon } from "../../constants/darkmodeIcon";

export interface IconProps {
  theme: string | undefined;
  onClick: () => void;
}

export default function Icon({ theme, onClick }: IconProps) {
  if (theme === "light")
    return (
      <Image
        width={30}
        height={30}
        onClick={onClick}
        src={icon.normal}
        alt="darkmode"
      />
    );
  else
    return (
      <Image
        width={30}
        height={30}
        onClick={onClick}
        src={icon.dark}
        alt="darkmode"
      />
    );
}
