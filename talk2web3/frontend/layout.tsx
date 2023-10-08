import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './styles/globals.css'

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Talk2Web3',
  description: 'Talk2Web3 with AI',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          {children}
        </body>
      </html>
  )
}
