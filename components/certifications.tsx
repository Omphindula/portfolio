"use client"

import { motion } from "framer-motion"
import { Calendar, Award, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Certifications() {
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

  const certifications = [
    {
      title: "Introduction to Cloud",
      issuer: "IBM SkillBuild",
      date: "October 11, 2022",
      description:
        "Comprehensive introduction to cloud computing concepts, service models (IaaS, PaaS, SaaS), deployment strategies, and the benefits of cloud adoption for modern businesses.",
      skills: ["Cloud Computing", "Service Models", "Deployment Strategies", "Cloud Security"],
      link: "#",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "Introduction to Containers, Kubernetes, and OpenShift v2",
      issuer: "IBM SkillBuild",
      date: "October 11, 2022",
      description:
        "In-depth exploration of container technologies, Kubernetes orchestration, and the OpenShift platform for deploying and managing containerized applications at scale.",
      skills: ["Containers", "Kubernetes", "OpenShift", "Microservices", "Container Orchestration"],
      link: "#",
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Certifications</h2>
          <p className="text-muted-foreground">
            I've expanded my knowledge beyond my diploma with industry-recognized certifications that demonstrate my
            commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div key={cert.title} variants={itemVariants}>
              <Card className="h-full overflow-hidden border shadow-lg hover:shadow-xl transition-all">
                <div className="h-2 bg-gradient-to-r from-primary/80 to-primary/40" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-primary/10 flex items-center justify-center">
                      <img src={cert.logo || "/placeholder.svg"} alt={cert.issuer} className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{cert.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1 mb-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Award className="h-4 w-4 mr-1 text-primary" />
                          {cert.issuer}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1 text-primary" />
                          {cert.date}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{cert.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="mt-2" asChild>
                        <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Certificate
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
