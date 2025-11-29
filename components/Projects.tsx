interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern web technologies for optimal performance.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description:
      'An interactive dashboard for analyzing and visualizing complex datasets with customizable charts and real-time data updates.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    link: '#',
    github: '#',
  },
  {
    title: 'Social Media Analytics',
    description:
      'A comprehensive analytics platform for tracking social media performance with detailed insights and automated reporting.',
    technologies: ['Next.js', 'TypeScript', 'Chart.js', 'REST API'],
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          A collection of projects I've worked on, showcasing my skills and
          passion for building great digital experiences.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background-card rounded-lg p-6 border border-gray-800 card-hover group"
            >
              <h3 className="text-2xl font-semibold mb-3 text-primary group-hover:text-primary-light transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light transition-colors font-medium"
                  >
                    Live Demo →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors font-medium"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

