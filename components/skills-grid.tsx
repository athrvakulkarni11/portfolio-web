"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const skills = [
  { category: "Programming", items: ["Python", "Java", "C++", "JavaScript"] },
  { category: "AI & ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision"] },
  { category: "Robotics", items: ["ROS2", "Gazebo", "Arduino", "Sensor Fusion"] },
  { category: "Web Dev", items: ["React", "Next.js", "HTML/CSS", "Node.js"] },
]

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-[#333333] border-[#555555] overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-[#444444] text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-[#555555] transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

