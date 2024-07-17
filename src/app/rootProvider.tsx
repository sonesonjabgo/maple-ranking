import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
