
"use cleint"
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Theme({children}: { children: React.ReactNode }) {
  return (
      <NextThemesProvider attribute="class" enableSystem={false} defaultTheme="dark">
        {children}
      </NextThemesProvider>
  )
}