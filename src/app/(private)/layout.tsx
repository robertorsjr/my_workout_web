import type { Metadata } from 'next'
import NavBarLayout from '../../components/Layout/NavBarLayout'

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
    <>
      <NavBarLayout />
      {children}
    </>
  )
}
