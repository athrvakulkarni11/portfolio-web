"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Home, GraduationCap, BookOpen, FileText, Users, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/",
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
    href: "https://github.com/athrvakulkarni11",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/athrva-kulkarni-264a8a25b/",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:athrvakulkarni11@gmail.com",
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <div className="fixed top-4 left-4 z-50 flex items-center gap-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-[#333333] dark:bg-[#444444] rounded-md hover:bg-opacity-80 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 bg-[#333333] dark:bg-[#444444] rounded-md hover:bg-opacity-80 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-6 h-6 text-white" />
          ) : (
            <Moon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      <nav
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-[#333333] transform transition-transform duration-300 ease-in-out shadow-lg",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-4 pt-20">
          <div className="flex-1 space-y-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                  pathname === route.href 
                    ? "text-black dark:text-white bg-gray-100 dark:bg-[#444444]" 
                    : "text-gray-600 dark:text-gray-400 hover:text-black hover:bg-gray-100 dark:hover:text-white dark:hover:bg-[#444444]"
                )}
              >
                <route.icon className="w-4 h-4" />
                {route.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-gray-200 dark:border-[#444444] pt-4">
            <div className="flex justify-around">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

