import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chloe Lubin | Personal Website',
  description: 'Personal website showcasing projects, experience, and contact information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

