import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'PHILSS - Travel & Shop',
  description: 'Discover amazing activities and premium travel products. Book your next adventure with PHILSS.',
  generator: 'v0.app',
  icons: {
    icon: '/philss-logo.svg',
    apple: '/philss-logo.svg',
    shortcut: '/philss-logo.svg',
  },
  openGraph: {
    title: 'PHILSS - Travel & Shop',
    description: 'Discover amazing activities and premium travel products',
    type: 'website',
    url: 'https://philss.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
