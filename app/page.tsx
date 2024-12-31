"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Badge from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from 'lucide-react'
import Link from "next/link"

const MotionCard = motion(Card)

const skills = [
  "Python", "Java", "C++", "JavaScript", "React", "Next.js",
  "TensorFlow", "PyTorch", "Computer Vision", "ROS2",
  "Gazebo", "Arduino", "HTML/CSS", "Node.js"
]

const experience = [
  {
    title: "Data Science Intern",
    company: "AlgoAnalytics",
    period: "April 16, 2024 - October 16, 2024",
    description: [
      "Built a YOLO-based object detection system for real-time surveillance and anomaly detection",
      "Tuned and evaluated anomaly detection models to improve performance",
      "Implemented a RAG system for material Manual analysis"
    ]
  }
]

const projects = [
  {
    title: "Autonomous Object Tracking and Picking Robot",
    description: [
      "Designed ROS 2 architecture for a robot to autonomously track and pick balls for ABU Robocon 2024",
      "Implemented ball tracking using YOLOv8/YOLOv5 with a custom dataset for red, blue, and purple balls",
      "Developed decision-making algorithms for silo tracking based on ball detection",
    ],
    technologies: ["ROS2", "OpenCV", "YOLOv8", "YOLOv5"],
    image: "/placeholder.svg",
  },
  {
    title: "ERGO - AI-Powered Learning Platform",
    description: [
      "Developed a platform with tools for education and memory retention, including an MCQ generator",
      "Built a web scraper to stay updated on the latest advancements in relevant fields",
      "Created a \"Memory Vault\" to store and review learning materials",
      "A RAG system for Getting Textbook Accurate answers",
    ],
    technologies: ["Groq", "OLLAMA", "Web Scraping", "LLAMA3-8b", "Mistral", "Nomic-Embed-Text"],
    image: "/placeholder.svg",
  }
]

export default function Home() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Hero Section */}
      <motion.div 
        className="flex flex-col-reverse md:flex-row gap-6 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1 space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-jetbrains">
            Hi, I&apos;m Athrva Kulkarni
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-jetbrains">
            A Computer Science Engineer specializing in AI and Robotics
          </p>
          <p className="text-sm md:text-base text-gray-400">
            I&apos;m passionate about building intelligent systems that can make a difference.
            Currently working on AI Agents, LLMs, Computer Vision and some development projects.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-[#444444] text-gray-300 px-2 py-0.5 rounded-full text-xs md:text-sm font-jetbrains"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="w-32 h-32 md:w-48 md:h-48 relative flex-shrink-0">
          <Image
            src="/profile.jpg"
            alt="Athrva Kulkarni"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </motion.div>

      {/* Experience Section */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white font-jetbrains">Experience</h2>
        <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4">
          {experience.map((exp, index) => (
            <MotionCard
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#333333] border-[#555555]"
            >
              <CardHeader className="p-4">
                <CardTitle className="text-xl text-white font-jetbrains">{exp.title}</CardTitle>
                <p className="text-sm text-gray-300">{exp.company} • {exp.period}</p>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </MotionCard>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white font-jetbrains">Projects</h2>
        <div className="max-h-[600px] overflow-y-auto pr-2 space-y-4">
          {projects.map((project, index) => (
            <MotionCard
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#333333] border-[#555555]"
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative h-[150px] md:h-[200px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader className="p-4">
                    <CardTitle className="text-xl text-white font-jetbrains">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 space-y-3">
                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                      {project.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </section>
    </div>
  )
}

