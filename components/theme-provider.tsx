"use client"

import { useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // After mounting, we can check for stored color theme preference
  useEffect(() => {
    setMounted(true)

    // Check for stored color theme preference
    const storedColorTheme = localStorage.getItem("color-theme")
    if (storedColorTheme) {
      document.documentElement.setAttribute("data-color-theme", storedColorTheme)
    } else {
      // Default to the default theme if no preference is stored
      document.documentElement.setAttribute("data-color-theme", "default")
    }
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
