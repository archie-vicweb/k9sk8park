import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'K9SK8park - Dog Daycare & Grooming | Langford, BC',
  description: 'We are a Dog Daycare & Grooming service located in beautiful Langford, Victoria BC Canada. Indoor off-leash dog park with ramps, tunnels, and professional grooming services.',
  keywords: 'Dog, Daycare, Groomer, Doggy, Grooming, Langford, grooming, cat, westshore, clip, victoria, parkway, canine, k9, nails, bath, fun, park, feline, play, colwood',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
