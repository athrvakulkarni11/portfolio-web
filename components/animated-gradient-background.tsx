"use client"

export function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 animate-gradient" />
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  )
}

