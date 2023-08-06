'use client'

import React from 'react'
import { Card, Flex, Text } from '@chakra-ui/react'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default function Login() {
  return (
    <Card w="400px" h="500px" bgColor="transparent" gridGap={8}>
      <Input id="name" name="email" label="E-mail" />
      <Input id="name" name="password" label="Password" type="password" />
      <Flex px={20} w="full">
        <Button w="full">
          <Text>Login</Text>
        </Button>
      </Flex>
    </Card>
  )
}
