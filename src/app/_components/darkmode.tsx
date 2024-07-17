"use client";
import { useTheme } from "next-themes";
import Icon from "./icon";

export default function Darkmode() {
  const { theme, setTheme } = useTheme();

  const Onclick = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <div>
      <Icon theme={theme} onClick={Onclick} />
    </div>
  );
}
