"use client"

import Mermaid from "@/components/mermaid"

export function SkillsDiagram() {
  const diagram = `
    graph TD
      A[Programming] --> B[Java]
      A --> C[Python]
      A --> D[C/C++]
      
      E[AI & ML] --> F[Deep Learning]
      E --> G[Computer Vision]
      E --> H[NLP]
      
      I[Robotics] --> J[ROS2]
      I --> K[Gazebo]
      I --> L[Linux]
      
      M[Web Dev] --> N[React.js]
      M --> O[HTML/CSS]
      M --> P[JavaScript]

      style A fill:#555555,stroke:#666666,color:#ffffff
      style E fill:#666666,stroke:#777777,color:#ffffff
      style I fill:#777777,stroke:#888888,color:#ffffff
      style M fill:#888888,stroke:#999999,color:#ffffff
      
      style B,C,D,F,G,H,J,K,L,N,O,P fill:#444444,stroke:#555555,color:#ffffff
  `

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#333333] p-4 rounded-lg">
      <Mermaid chart={diagram} />
    </div>
  )
}

