import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Globe, BadgeIcon as Certificate } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: "Reached Final Stage at DD ROBOCON 2024",
  },
  // {
  //   icon: Award,
  //   title: "Published Research Paper at ICCUBEA 2024",
  // },
  // {
  //   icon: Globe,
  //   title: "Developed Multiple Live Websites For Industry Related Project",
  // },
  // {
  //   icon: Certificate,
  //   title: "Udemy Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",
  // },
]

export default function Achievements() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Achievements</h1>
      
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((achievement) => (
          <Card key={achievement.title}>
            <CardContent className="flex items-center gap-4 p-6">
              <achievement.icon className="w-8 h-8 text-primary" />
              <p className="font-medium">{achievement.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

