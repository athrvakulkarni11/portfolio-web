"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

const MotionCard = motion(Card)

export default function Experience() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-foreground">Experience</h1>
      
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className="bg-card text-card-foreground border-border hover:shadow-lg transition-all"
      >
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-foreground">
            Data Science Intern
          </CardTitle>
          <p className="text-muted-foreground">
            AlgoAnalytics • April 16, 2024 - October 16, 2024
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-foreground/80">
            <li>Built a YOLO-based object detection system for real-time surveillance and anomaly detection</li>
            <li>Tuned and evaluated anomaly detection models to improve performance</li>
            <li>Implemented a RAG system for material Manual analysis</li>
          </ul>
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>View Completion Letter</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </CardContent>
      </MotionCard>
    </div>
  )
}

