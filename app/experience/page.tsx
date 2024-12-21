"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

const MotionCard = motion(Card)

export default function Experience() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">Experience</h1>
      
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className="bg-[#333333] border-[#555555]"
      >
        <CardHeader>
          <CardTitle className="text-2xl text-white">Data Science Intern</CardTitle>
          <p className="text-gray-300">AlgoAnalytics • April 16, 2024 - October 16, 2024</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Built a YOLO-based object detection system for real-time surveillance and anomaly detection</li>
            <li>Tuned and evaluated anomaly detection models to improve performance</li>
            <li>Implemented a RAG system for material Manual analysis</li>
          </ul>
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <span>View Completion Letter</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </CardContent>
      </MotionCard>
    </div>
  )
}

