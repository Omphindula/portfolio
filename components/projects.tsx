"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Student Voting System",
      description:
        "A comprehensive voting platform for student elections with secure authentication and real-time results.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Jakarta EE", "JSP", "MySQL", "DAO Pattern"],
      category: "web",
      githubUrl: "https://github.com/Omphindula/voting.git",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Next-Gen Fitness Hub",
      description:
        "A fitness platform with subscription management, workout tracking, and integrated payment processing.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["HTML/CSS", "JavaScript", "Stripe", "CMS"],
      category: "web",
      githubUrl: "https://github.com/Omphindula/GYM-system.git",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "UMP Hub",
      description:
        "A university community platform with real-time updates, event management, and user interaction features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["PHP", "MySQL", "JavaScript", "XAMPP"],
      category: "web",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Interactive Canvas Calculator",
      description: "A drawing-based calculator with profile management and interactive features built on Canvas API.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["HTML5 Canvas", "JavaScript", "CSS3", "Authentication"],
      category: "interactive",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Workspace Sharing System",
      description: "A collaborative platform for sharing workspaces with integrated to-do lists and user management.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["PHP", "MySQL", "JavaScript", "Real-time Updates"],
      category: "collaboration",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my skills, projects, and professional background.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "web",
      githubUrl: "#",
      liveUrl: "#",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

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
          <h2 className="text-3xl font-bold tracking-tight mb-4">My Projects</h2>
          <p className="text-muted-foreground">
            Here are some of the key projects I've developed, showcasing my skills in full-stack development,
            interactive applications, and collaborative systems.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-fit">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web Apps</TabsTrigger>
                <TabsTrigger value="interactive">Interactive</TabsTrigger>
                <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="web" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="interactive" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="collaboration" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="overflow-hidden border-none shadow-lg h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" className="rounded-full" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </Link>
              </Button>
              <Button size="sm" className="rounded-full" asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-primary/5 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
