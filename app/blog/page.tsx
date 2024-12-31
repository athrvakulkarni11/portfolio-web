import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { div } from "framer-motion/client"
import Link from "next/link"

const blogPosts = [
  {
    title: "Introduction to ROS2 for Robotics",
    date: "2024-03-15",
    excerpt: "An overview of ROS2 and its applications in modern robotics...",
    slug: "intro-to-ros2"
  },
  {
    title: "Deep Learning in Computer Vision",
    date: "2024-02-28",
    excerpt: "Exploring the latest advancements in deep learning for computer vision tasks...",
    slug: "deep-learning-computer-vision"
  },
  {
    title: "The Future of AI in Education",
    date: "2024-02-10",
    excerpt: "Discussing the potential impacts and applications of AI in educational systems...",
    slug: "ai-in-education"
  }
]

export default function Blog() {
  return (
    // <div className="space-y-8">
    //   <h1 className="text-4xl font-bold text-white">Blog</h1>
      
    //   <div className="grid gap-6">
    //     {blogPosts.map((post) => (
    //       <Card key={post.slug} className="bg-[#333333] border-[#555555]">
    //         <CardHeader>
    //           <CardTitle className="text-2xl text-white">
    //             <Link href={`/blog/${post.slug}`} className="hover:underline">
    //               {post.title}
    //             </Link>
    //           </CardTitle>
    //           <p className="text-sm text-gray-400">{post.date}</p>
    //         </CardHeader>
    //         <CardContent>
    //           <p className="text-gray-300">{post.excerpt}</p>
    //           <Link href={`/blog/${post.slug}`} className="text-gray-400 hover:text-white transition-colors mt-2 inline-block">
    //             Read more
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


