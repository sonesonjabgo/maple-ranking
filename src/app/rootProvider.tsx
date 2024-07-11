import { NextUIProvider } from "@nextui-org/react";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
