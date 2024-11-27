import Navbar from './components/navbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metadeal - Formation Médicale Continue',
  description: 'Plateforme de formation médicale continue',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
