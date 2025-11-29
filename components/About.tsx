export default function About() {
  const skills = [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'Python',
    'Git',
    'UI/UX Design',
  ]

  return (
    <section id="about" className="section-padding bg-background-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-gradient">About Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate web developer who loves creating engaging and
              user-friendly digital experiences. With a keen eye for design and
              a strong foundation in modern web technologies, I bring ideas to
              life through clean, efficient code.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My approach combines the clean, focused aesthetic of Spotify with
              the modern, playful energy that are both beautiful and functional.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-background-card rounded-full text-sm font-medium border border-primary/20 hover:border-primary/50 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

