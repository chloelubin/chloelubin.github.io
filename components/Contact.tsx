'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const recipientEmail = 'chloe.lubin@gmail.com'

    const subject = `New message from ${formData.name || 'Portfolio Contact Form'}`
    const bodyLines = [
      'You received a new message from your portfolio contact form:',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message,
      '',
      '---',
      'Sent from your portfolio site',
    ]

    const mailtoLink = `mailto:${encodeURIComponent(
      recipientEmail
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join('\n')
    )}`

    window.location.href = mailtoLink

    // Reset form state after opening mail client
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '💻' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Email', url: 'mailto:hello@example.com', icon: '✉️' },
  ]

  return (
    <section id="contact" className="section-padding bg-background-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          Have a project in mind or just want to chat? I'd love to hear from
          you. Send me a message and I'll respond as soon as possible.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-card border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-card border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background-card border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-primary hover:bg-primary-dark text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Connect With Me
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Feel free to reach out through any of these channels. I'm always
              open to discussing new projects, creative ideas, or opportunities
              to be part of your visions.
            </p>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background-card rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-200 group"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="text-gray-300 group-hover:text-primary transition-colors">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

