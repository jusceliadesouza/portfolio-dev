"use client"; // Precisamos que o layout seja um Client Component para usar o hook do Zustand

import StyledComponentsRegistry from "@/app/lib/registry";
import { ThemeProvider } from "styled-components";
import { useThemeStore } from "@/app/store/theme-store";
import { theme } from "@/app/styles/theme";
import { GlobalStyle } from "@/app/styles/GlobalStyle"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mode } = useThemeStore();

  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme[mode]}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
