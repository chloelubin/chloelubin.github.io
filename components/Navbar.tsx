'use client'

import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    // Close mobile menu after navigating
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          {/* Menu button + dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center gap-1 p-2 rounded-full border border-gray-700/70 bg-background-card/80 text-gray-200 hover:text-primary hover:border-primary hover:bg-background-card focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              aria-controls="nav-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <span
                className={`block w-6 h-0.5 rounded-full bg-current transform transition duration-200 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 rounded-full bg-current transition-opacity duration-200 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-6 h-0.5 rounded-full bg-current transform transition duration-200 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>

            {isMenuOpen && (
              <div
                id="nav-menu"
                className="absolute right-0 mt-3 w-40 rounded-lg bg-background-card/95 border border-gray-800 shadow-lg shadow-black/40 backdrop-blur-md py-2"
              >
                {['about', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium capitalize rounded-md ${
                      activeSection === section
                        ? 'bg-primary/15 text-primary'
                        : 'text-gray-200 hover:bg-background-light hover:text-primary'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

