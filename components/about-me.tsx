"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code, Server, Cloud } from "lucide-react"

export function AboutMe() {
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
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        <motion.div variants={itemVariants} className="relative">
          <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl blur-xl" />
          <div className="relative aspect-square overflow-hidden rounded-3xl border shadow-xl">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Nemapakoni Omphindula Lucas"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
            <p className="text-muted-foreground mb-6">
              Hello! I'm Nemapakoni, a recent graduate with a Diploma in Information and Communication Technology,
              specializing in Application Development. I'm passionate about building interactive and user-friendly web
              applications using Java (Jakarta EE), PHP, and front-end technologies.
            </p>
            <p className="text-muted-foreground">
              My expertise includes developing database-driven applications, implementing authentication systems, and
              creating interactive interfaces. I've also expanded my knowledge into cloud technologies with IBM
              certifications in Cloud Computing, Containers, Kubernetes, and OpenShift.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="font-medium">ICT Diploma Graduate</h3>
              </div>
              <p className="text-sm text-muted-foreground">App Development Specialist</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <h3 className="font-medium">Full-Stack Developer</h3>
              </div>
              <p className="text-sm text-muted-foreground">End-to-end application development</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                <h3 className="font-medium">Backend Specialist</h3>
              </div>
              <p className="text-sm text-muted-foreground">Java EE and PHP development</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-primary" />
                <h3 className="font-medium">Cloud Certified</h3>
              </div>
              <p className="text-sm text-muted-foreground">IBM SkillBuild certifications</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
