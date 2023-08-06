import { extendTheme } from '@chakra-ui/react'

const themeConfig = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
}

const themeOptions = {
  colors: {
    primary: {
      500: '#fff1ff',
    },
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  styles: {
    global: {
      body: {
        color: 'gray.600',
        backgroundColor: 'primary.500',
        maxWidth: '100vw',
        overflowX: 'hidden',
      },
    },
    ...themeConfig,
  },
}
export const customTheme = extendTheme(themeOptions)
