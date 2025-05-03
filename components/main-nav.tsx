"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl flex items-center gap-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
        >
          NL
        </motion.div>
        <span className="hidden sm:inline-block">Nemapakoni Lucas</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={closeMobileMenu}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
        <ThemeSwitcher />
      </nav>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeSwitcher />
        <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm md:hidden"
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-medium hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </div>
  )
}
