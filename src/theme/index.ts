import { extendTheme } from '@chakra-ui/react'

const themeConfig = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
}

const themeOptions = {
  colors: {
    primary: {
      500: '#4b1955',
      600: '#5d3066',
    },
    secondary: {
      500: '#000000',
      600: '#1a1a1a',
    },
  },
  styles: {
    global: {
      body: {
        h: '100vh',
        color: 'gray.50',
        bgGradient:
          'linear-gradient(17deg, rgba(75,25,85,1) 0%, rgba(0,0,0,1) 44%)',
        maxWidth: '100vw',
      },
    },
    ...themeConfig,
  },
}
export const customTheme = extendTheme(themeOptions)
