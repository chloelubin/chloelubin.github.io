'use client'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-light to-background opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,185,84,0.1),transparent_50%)]" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-3 animate-fade-in">
          <span className="text-gradient block">Hey, I&apos;m Chloé.</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-200 mt-2">
            Welcome to my website!
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-fade-in">
          Scaling go-to-market teams by unlocking faster analytics insights with AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </button>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}

