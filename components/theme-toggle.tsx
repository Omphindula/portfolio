"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" disabled className="opacity-0" />
  }

  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <motion.div initial={{ rotate: -45 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
            <Sun className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Light mode</span>
          </motion.div>
        ) : (
          <motion.div initial={{ rotate: 45 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
            <Moon className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Dark mode</span>
          </motion.div>
        )}
      </Button>
    </motion.div>
  )
}
