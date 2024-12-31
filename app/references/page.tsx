import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import Link from "next/link"

const references = [
  {
    name: "Dr. Jane Smith",
    title: "Professor of Computer Science",
    institution: "MIT",
    relationship: "Research Advisor",
    contact: "jsmith@mit.edu"
  },
  {
    name: "John Doe",
    title: "Senior AI Engineer",
    institution: "Google AI",
    relationship: "Internship Supervisor",
    contact: "johndoe@google.com"
  },
  {
    name: "Dr. Alex Johnson",
    title: "Head of Robotics Lab",
    institution: "Stanford University",
    relationship: "Collaborator on Robotics Project",
    contact: "ajohnson@stanford.edu"
  }
]

export default function References() {
  return (
    // <div className="space-y-8">
    //   <h1 className="text-4xl font-bold text-white">References</h1>
      
    //   <div className="grid gap-6">
    //     {references.map((ref) => (
    //       <Card key={ref.name} className="bg-[#333333] border-[#555555]">
    //         <CardHeader>
    //           <CardTitle className="text-2xl text-white">{ref.name}</CardTitle>
    //           <p className="text-gray-300">{ref.title}</p>
    //           <p className="text-gray-300">{ref.institution}</p>
    //         </CardHeader>
    //         <CardContent className="space-y-2">
    //           <p className="text-gray-400">Relationship: {ref.relationship}</p>
    //           <Link 
    //             href={`mailto:${ref.contact}`} 
    //             className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
    //           >
    //             Contact <ExternalLink className="h-4 w-4" />
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

