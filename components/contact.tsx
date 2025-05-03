"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="container mx-auto px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            I'm currently looking for new opportunities as a recent graduate! Whether you have a question about my
            projects or want to discuss potential collaboration, I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:omphindulalucas@gmaol.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+27123456789" className="text-muted-foreground hover:text-primary transition-colors">
                    +27 63 715 2558
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Soweto, South Africa</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Connect with me</h4>
              <div className="flex gap-4">
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <Link href="mailto:contact@example.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Input placeholder="Your Name" required name="name" />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Your Email" required name="email" />
              </div>
              <div className="space-y-2">
                <Input placeholder="Subject" required name="subject" />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Your Message" required name="message" rows={5} />
              </div>
              <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
