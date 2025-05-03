"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Layout, Server, Terminal, GitBranch, Cloud } from "lucide-react"

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (Vanilla JS)",
        "Responsive Web Design",
        "Canvas Drawing Features",
        "Basic UI/UX Design",
        "Font Integration",
      ],
    },
    {
      name: "Backend Development",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        "PHP (with XAMPP)",
        "Java (Jakarta EE)",
        "JSP/Servlets",
        "DAO Pattern",
        "ORM / JPA",
        "REST API Integration",
        "Stripe Payment Gateway",
      ],
    },
    {
      name: "Database",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["MySQL", "MySQL Workbench", "phpMyAdmin", "SQL Querying", "Table Design", "Database Relationships"],
    },
    {
      name: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      skills: ["Cloud Computing Basics", "Containers", "Kubernetes", "OpenShift", "Docker", "Deployment Strategies"],
    },
    {
      name: "Testing & Deployment",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      skills: ["NetBeans", "Apache Tomcat 10.1", "XAMPP", "Netlify", "Docker", "Composer"],
    },
    {
      name: "Version Control",
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      skills: [
        "Git & GitHub",
        "Command-Line Git",
        "Repository Setup",
        "Project Organization",
        ".gitignore Usage",
        "Documentation (README.md)",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-12"
      >
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">My Skills</h2>
          <p className="text-muted-foreground">
            As a recent graduate, I've developed a comprehensive set of skills through my ICT diploma, certifications,
            and hands-on projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div key={category.name} variants={itemVariants} className="h-full">
              <Card className="h-full border shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.div key={skill} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Badge variant="secondary" className="px-3 py-1 text-sm">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
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
