"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: "Autonomous Object Tracking and Picking Robot",
    description: [
      "Designed ROS 2 architecture for a robot to autonomously track and pick balls for ABU Robocon 2024",
      "Implemented ball tracking using YOLOv8/YOLOv5 with a custom dataset for red, blue, and purple balls",
      "Developed decision-making algorithms for silo tracking based on ball detection",
    ],
    technologies: ["ROS2", "OpenCV", "YOLOv8", "YOLOv5"],
    githubUrl: "https://github.com/athrvakulkarni11/robocon-24",
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
    githubUrl: "https://github.com/athrvakulkarni11/ERGO",
  },
  {
    title: "Image/Video Caption Generation",
    description: [
      "Created a caption generator using CNN feature extraction, transfer learning, and LSTM RNN",
      "Mapped visual features to tokenized captions to predict accurate descriptions for images/videos",
    ],
    technologies: ["CNN", "LSTM RNN", "Transfer Learning"],
    image: "/placeholder.svg",
  },
];

const MotionCard = motion(Card);

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-foreground">Projects</h1>
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <MotionCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card text-card-foreground border-border transition-all"
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
                {project.githubUrl && (
                  <Link 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </Link>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary"
                    className="bg-secondary/50 text-foreground border border-border/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </div>
  );
}
