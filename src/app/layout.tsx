import type { Metadata } from 'next'
import { IDefaultTypes } from '@/types/defaultTypes'
import localFont from 'next/font/local'
import '@/styles/reset.scss'
import '@/styles/variables.scss'
import '@/styles/globals.scss'

const axiforma = localFont({
  src: '../../public/fonts/Axiforma-Regular.woff2',
  weight: '400',
  style: 'normal',
  preload: true,
  display: 'swap',
  variable: '--primary-font',
})

export const metadata: Metadata = {
  title: 'Lingua',
  description: 'Language school',
}

export default function RootLayout({ children }: IDefaultTypes) {
  return (
    <html lang="en">
      <body className={ axiforma.className }>{children}</body>
    </html>
  )
}
