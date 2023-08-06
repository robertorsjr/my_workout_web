'use client'
import React from 'react'
import { Avatar, Flex, Link } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const NavBarLayout = () => {
  return (
    <Flex
      w="full"
      p={4}
      align="center"
      justifyContent="space-between"
      boxShadow="md"
      position="sticky"
    >
      <HamburgerIcon boxSize={6} />
      <Flex w="30%" justify="space-around" align="center">
        <Link>Home</Link>
        <Link>Management</Link>
        <Link>About</Link>
      </Flex>
      <Avatar size="md" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
    </Flex>
  )
}

export default NavBarLayout
