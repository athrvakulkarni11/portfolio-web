"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

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

const MotionDiv = motion.div;

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">Projects</h1>
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <MotionDiv
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-[#333333] border-[#555555] overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-[200px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {project.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
