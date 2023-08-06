import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/app/providers'
import NavBarLayout from '../../components/Layout/NavBarLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Workout Web',
  description: 'Manage your workout',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Providers>
          <NavBarLayout />
          {children}
        </Providers>
      </body>
    </html>
  )
}
