"use client"

import { Card, CardContent } from "@/components/ui/card"
import { SkillsGrid } from "@/components/skills-grid"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold text-white"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Hi, I'm Athrva
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-300 max-w-2xl leading-relaxed"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Computer Science Engineer specializing in AI and Robotics. Currently pursuing B.Tech at BRACT's Vishwakarma Institute Of Information Technology with a CGPA of 8.53.
      </motion.p>

      <Card className="bg-[#333333] border-[#555555]">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Technical Skills</h2>
          <SkillsGrid />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-[#333333] border-[#555555] overflow-hidden group">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="AI Project Visual"
                fill
                className="object-cover transition-transform group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#333333] to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-semibold text-white">AI & Robotics</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Specializing in computer vision and autonomous systems
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-[#333333] border-[#555555] overflow-hidden group">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Web Development Visual"
                fill
                className="object-cover transition-transform group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#333333] to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-semibold text-white">Web Development</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Creating modern web applications with React and Next.js
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}

