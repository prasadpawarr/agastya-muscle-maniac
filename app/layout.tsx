import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import localFont from 'next/font/local'
import './globals.css'

const abaddon = localFont({
  src: '../public/abaddon.ttf',
  variable: '--font-abaddon',
})

export const metadata: Metadata = {
  title: 'AGASTYA MUSCLE MANIAC - Premium Gym & Fitness',
  description: 'Transform your body and mind at AGASTYA MUSCLE MANIAC. Premium gym facility with expert trainers, modern equipment, and proven training programs.',
  keywords: ['gym', 'fitness', 'training', 'bodybuilding', 'agastya'],
  icons: {
    icon: '/logo-final.png',
    shortcut: '/logo-final.png',
    apple: '/logo-final.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#c0392b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${abaddon.variable} bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
