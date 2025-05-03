"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AboutMe } from "@/components/about-me"
import { Certifications } from "@/components/certifications"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <MainNav />
      </header>

      {/* Welcome Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background gradient circles */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

        <div className="container relative z-10 px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              ICT Diploma Graduate
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          >
            Nemapakoni Omphindula Lucas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mb-8"
          >
            Application Developer specializing in Java, PHP, and cloud technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" className="rounded-full" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <Link
              href="#about"
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32">
        <AboutMe />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-32 bg-muted/30">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32">
        <Projects />
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 md:py-32 bg-muted/30">
        <Certifications />
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 md:py-32">
        <Education />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-muted/30">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
