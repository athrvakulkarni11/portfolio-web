"use client"

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidProps {
  chart: string
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({ 
        startOnLoad: true, 
        theme: 'dark',
        themeVariables: {
          primaryColor: '#555555',
          primaryTextColor: '#ffffff',
          primaryBorderColor: '#666666',
          lineColor: '#888888',
          secondaryColor: '#666666',
          tertiaryColor: '#444444',
        }
      })
      mermaid.run({ nodes: [ref.current] })
    }
  }, [chart])

  return <div ref={ref} className="mermaid">{chart}</div>
}

