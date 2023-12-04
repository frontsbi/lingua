import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.scss'

const axiforma = localFont({
  src: '../public/fonts/Axiforma-Regular.woff2',
  weight: '400',
  style: 'normal',
  preload: true,
  display: 'swap',
  variable: '--primary-font',
})

export const metadata: Metadata = {
  title: 'Start project',
  description: 'Start of the project on Next.js',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={ axiforma.className }>{children}</body>
    </html>
  )
}
