"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, GraduationCap, Briefcase, Code2, Trophy, Github, Linkedin, Mail, BookOpen, FileText, Users } from 'lucide-react'

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    label: "Education",
    icon: GraduationCap,
    href: "/education",
  },
  {
    label: "Experience",
    icon: Briefcase,
    href: "/experience",
  },
  {
    label: "Projects",
    icon: Code2,
    href: "/projects",
  },
  {
    label: "Achievements",
    icon: Trophy,
    href: "/achievements",
  },
  {
    label: "Blog",
    icon: BookOpen,
    href: "/blog",
  },
  {
    label: "Papers",
    icon: FileText,
    href: "/papers",
  },
  {
    label: "References",
    icon: Users,
    href: "/references",
  },
  {
    label: "Learning",
    icon: GraduationCap,
    href: "/learning-resources",
  },
]

const socialLinks = [
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/athrvakulkarni",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/athrvakulkarni11",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:athrvakulkarni11@gmail.com",
  },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-screen bg-[#333333] w-[200px] border-r border-[#555555]">
      <div className="px-3 py-2">
        <h1 className="mb-2 px-4 text-lg font-semibold text-purple-400">
          Athrva Kulkarni
        </h1>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-gray-200 hover:bg-[#555555] rounded-lg transition",
                pathname === route.href ? "text-white bg-[#555555]" : "text-gray-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className="h-5 w-5 mr-3" />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-auto px-3 py-2">
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white"
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

