'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { customTheme } from '@/theme'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider resetCSS theme={customTheme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
