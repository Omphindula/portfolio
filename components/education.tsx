"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Award, BookOpen, Cloud } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Education() {
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Education</h2>
          <p className="text-muted-foreground">
            My educational journey has equipped me with both theoretical knowledge and practical skills in application
            development, database management, web technologies, and cloud computing.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Diploma in Information and Communication Technology</h3>
                  <p className="text-lg text-muted-foreground">Specialization in Application Development</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Recent Graduate</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary shrink-0" />
                  <span>2022 - 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span>Mpumalanga, South Africa</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Key Coursework:</h4>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Java Enterprise Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Web Application Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Database Systems & Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>PHP Programming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Web Security & Authentication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>User Interface Design</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="h-2 bg-gradient-to-r from-primary/60 to-primary/40" />
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">IBM SkillBuild Certifications</h3>
                  <p className="text-lg text-muted-foreground">Cloud & Container Technologies</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary shrink-0" />
                  <span>October 11, 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-primary shrink-0" />
                  <span>IBM</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Certifications:</h4>
                <ul className="space-y-4">
                  <li className="border rounded-lg p-4 bg-muted/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Cloud className="h-5 w-5 text-primary" />
                      <span className="font-medium">Introduction to Cloud</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Fundamentals of cloud computing, service models, deployment strategies, and benefits of cloud
                      adoption.
                    </p>
                  </li>
                  <li className="border rounded-lg p-4 bg-muted/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Cloud className="h-5 w-5 text-primary" />
                      <span className="font-medium">Introduction to Containers, Kubernetes, and OpenShift v2</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Container orchestration, Kubernetes architecture, and OpenShift platform for application
                      deployment and management.
                    </p>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        
      </motion.div>
    </div>
  )
}
