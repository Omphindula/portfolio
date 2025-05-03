"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Check, Monitor, Moon, Palette, Sun } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const themes = [
  {
    name: "Default",
    value: "default",
    color: "#3b82f6", // Blue
  },
  {
    name: "Purple",
    value: "purple",
    color: "#8b5cf6", // Purple
  },
  {
    name: "Green",
    value: "green",
    color: "#10b981", // Green
  },
  {
    name: "Orange",
    value: "orange",
    color: "#f97316", // Orange
  },
  {
    name: "Pink",
    value: "pink",
    color: "#ec4899", // Pink
  },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [colorTheme, setColorTheme] = useState("default")
  const [mounted, setMounted] = useState(false)

  // Update the data-theme attribute when the colorTheme changes
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-color-theme", colorTheme)
    }
  }, [colorTheme, mounted])

  // After mounting, we can safely show the theme selector
  useEffect(() => {
    setMounted(true)

    // Check for stored color theme preference
    const storedColorTheme = localStorage.getItem("color-theme")
    if (storedColorTheme) {
      setColorTheme(storedColorTheme)
    }
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" disabled className="opacity-0" />
  }

  const handleColorThemeChange = (value: string) => {
    setColorTheme(value)
    // Store the user's color theme preference
    localStorage.setItem("color-theme", value)
  }

  // Get the current theme object
  const currentTheme = themes.find((t) => t.value === colorTheme) || themes[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Palette className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="h-4 w-4 mr-2" />
          <span>Light</span>
          {theme === "light" && <Check className="h-4 w-4 ml-auto" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="h-4 w-4 mr-2" />
          <span>Dark</span>
          {theme === "dark" && <Check className="h-4 w-4 ml-auto" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="h-4 w-4 mr-2" />
          <span>System</span>
          {theme === "system" && <Check className="h-4 w-4 ml-auto" />}
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => handleColorThemeChange(theme.value)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.color }} />
            <span>{theme.name}</span>
            {colorTheme === theme.value && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
