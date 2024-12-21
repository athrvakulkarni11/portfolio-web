import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import Link from "next/link"

const resources = [
  {
    title: "Deep Learning Specialization",
    platform: "Coursera",
    instructor: "Andrew Ng",
    link: "https://www.coursera.org/specializations/deep-learning"
  },
  {
    title: "ROS2 for Beginners",
    platform: "Udemy",
    instructor: "Edouard Renard",
    link: "https://www.udemy.com/course/ros2-for-beginners/"
  },
  {
    title: "CS231n: Convolutional Neural Networks for Visual Recognition",
    platform: "Stanford University",
    instructor: "Fei-Fei Li",
    link: "http://cs231n.stanford.edu/"
  },
  {
    title: "Natural Language Processing with Deep Learning",
    platform: "Stanford University",
    instructor: "Christopher Manning",
    link: "http://web.stanford.edu/class/cs224n/"
  }
]

export default function LearningResources() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">Learning Resources</h1>
      
      <div className="grid gap-6">
        {resources.map((resource) => (
          <Card key={resource.title} className="bg-[#333333] border-[#555555]">
            <CardHeader>
              <CardTitle className="text-2xl text-white">{resource.title}</CardTitle>
              <p className="text-gray-300">{resource.platform}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-gray-400">Instructor: {resource.instructor}</p>
              <Link 
                href={resource.link} 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Course <ExternalLink className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

