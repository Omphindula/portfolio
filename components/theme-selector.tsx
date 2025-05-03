"use client"

import { useEffect, useState } from "react"
import { Check } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
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

export function ThemeSelector() {
  const { theme: currentMode, setTheme: setMode } = useTheme()
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
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" disabled className="opacity-0" />
  }

  const handleThemeChange = (value: string) => {
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
            <div className="w-5 h-5 rounded-full" style={{ backgroundColor: currentTheme.color }} />
            <span className="sr-only">Select theme color</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
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
