'use client'
import React, { ReactNode } from 'react'
import NavBarLayout from '@/components/Layout/NavBarLayout'
import { Box, Flex } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

const PublicLayout = ({ children }: Props) => {
  return (
    <Box>
      <NavBarLayout />
      <Flex h="calc(100vh - 80px)" justify="center" align="center">
        {children}
      </Flex>
    </Box>
  )
}

export default PublicLayout
