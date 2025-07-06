import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bilal Iftikhar – Web Developer Portfolio',
  description: 'Portfolio of Bilal Iftikhar, showcasing projects built with Laravel, Next.js, Vue.js, and Shopify.',
  generator: 'v0.dev',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
