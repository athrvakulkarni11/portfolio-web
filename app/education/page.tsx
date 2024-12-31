import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">Education</h1>
      
      <Card className="bg-[#333333] border-[#555555]">
        <CardHeader>
          <CardTitle className="text-2xl text-white">
            Bachelor of Technology in Computer Science Engineering (Artificial Intelligence)
          </CardTitle>
          <p className="text-gray-300">
            BRACT&apos;s Vishwakarma Institute Of Information Technology, Pune, Maharashtra
          </p>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-gray-300">November 2022 - present</p>
            <p className="font-medium text-white">CGPA: 8.53</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

