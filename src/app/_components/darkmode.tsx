"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { icon } from "../../constants/darkmodeIcon";

export default function Darkmode() {
  const { theme, setTheme } = useTheme();

  const Onclick = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <div className="cursor-pointer">
      {theme !== "light" ? (
        <Image
          className="dark:invert"
          width={30}
          height={30}
          onClick={Onclick}
          src={icon.dark}
          alt="darkmode"
        />
      ) : (
        <Image
          width={30}
          height={30}
          onClick={Onclick}
          src={icon.normal}
          alt="darkmode"
        />
      )}
    </div>
  );
}
