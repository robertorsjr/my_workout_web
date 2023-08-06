'use client'
import React from 'react'
import { Avatar, Flex } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const NavBarLayout = () => {
  return (
    <Flex
      w="full"
      p={4}
      align="center"
      justifyContent="space-between"
      boxShadow="md"
    >
      <HamburgerIcon boxSize={6} />
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
    </Flex>
  )
}

export default NavBarLayout
