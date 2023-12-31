import type { Metadata } from 'next'
import PublicLayout from '@/components/Layout/PublicLayout'

export const metadata: Metadata = {
  title: 'Workout Web',
  description: 'Manage your workout',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PublicLayout>{children}</PublicLayout>
}
