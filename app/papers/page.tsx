import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import Link from "next/link"

const papers = [
  {
    title: "Novel Approach to Autonomous Navigation in Dynamic Environments",
    conference: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: 2024,
    link: "#"
  },
  {
    title: "Efficient Deep Learning Models for Real-time Object Detection in Robotics",
    conference: "Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2023,
    link: "#"
  },
  {
    title: "Advancements in Natural Language Processing for Human-Robot Interaction",
    conference: "Association for Computational Linguistics (ACL)",
    year: 2023,
    link: "#"
  }
]

export default function Papers() {
  return (
    // <div className="space-y-8">
    //   <h1 className="text-4xl font-bold text-white">Research Papers</h1>
      
    //   <div className="grid gap-6">
    //     {papers.map((paper) => (
    //       <Card key={paper.title} className="bg-[#333333] border-[#555555]">
    //         <CardHeader>
    //           <CardTitle className="text-2xl text-white">{paper.title}</CardTitle>
    //           <p className="text-gray-300">{paper.conference}, {paper.year}</p>
    //         </CardHeader>
    //         <CardContent>
    //           <Link 
    //             href={paper.link} 
    //             className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             View Paper <ExternalLink className="h-4 w-4" />
    //           </Link>
    //         </CardContent>
    //       </Card>
    //     ))}
    //   </div>
    // </div>
    <div className="flex justify-center items-center h-screen">
    <h1 className="text-4xl font-bold text-white">Coming Soon</h1>
  </div>
  )
}

