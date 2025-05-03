"use client"

import { motion } from "framer-motion"
import { Github, Mail, Linkedin, ArrowUp } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 cursor-pointer"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-6 w-6" />
          </motion.div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold">Nemapakoni Omphindula Lucas</h3>
            <p className="text-muted-foreground mt-1">Application Developer | ICT Diploma Graduate</p>
          </div>

          <div className="flex gap-4 mb-8">
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <Link href="https://github.com/Omphindula" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <Link href="https://linkedin.com/in/omphindula-lucas-192357351" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <Link href="mailto:omphindulalucas@gmail.com.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </motion.div>
          </div>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nemapakoni Omphindula Lucas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
