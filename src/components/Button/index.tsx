'use client'
import React from 'react'
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react'

export default function Button({ children, ...rest }: ChakraButtonProps) {
  return (
    <ChakraButton w="full" {...rest}>
      {children}
    </ChakraButton>
  )
}
