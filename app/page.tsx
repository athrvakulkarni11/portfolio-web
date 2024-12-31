"use client"

import { Card, CardContent } from "@/components/ui/card"
import { SkillsGrid } from "@/components/skills-grid"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Hi, I&apos;m Athrva Kulkarni
          </h1>
          <p className="text-xl text-gray-300">
            A Computer Science Engineer specializing in AI and Robotics
          </p>
          <p className="text-gray-400">
            I&apos;m passionate about building intelligent systems that can make a difference.
            Currently working on autonomous robotics and AI applications.
          </p>
        </div>
        <div className="w-48 h-48 relative">
          <Image
            src="/profile.jpg"
            alt="Athrva Kulkarni"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>

      <SkillsGrid />
    </div>
  )
}

