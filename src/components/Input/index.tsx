'use client'

import {
  InputProps as ChakraInputProps,
  Input as ChakraInput,
  InputGroup,
  FormControl,
  FormLabel,
  InputRightElement,
  IconButton,
  Tooltip,
} from '@chakra-ui/react'

import { WarningIcon } from '@chakra-ui/icons'

type InputProps = ChakraInputProps & {
  name: string
  label?: string
  isBold?: boolean
  error?: string
}

export default function Input({
  label,
  error,
  maxW,
  isBold = false,
  ...rest
}: InputProps): JSX.Element {
  return (
    <FormControl isInvalid={!!error} {...(maxW && { maxW })}>
      {label && (
        <FormLabel color="gray.50" fontWeight={isBold ? 'bold' : 'normal'}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        <ChakraInput bgColor="gray.50" {...rest} />
        {!!error && (
          <InputRightElement>
            <Tooltip
              hasArrow
              arrowSize={15}
              label={error}
              px="2"
              py="1"
              placement="top-end"
              aria-label="Error tooltip"
            >
              <IconButton
                display="flex"
                icon={<WarningIcon />}
                fontSize="22"
                variant="unstyled"
                aria-label="Open error message"
                color="red.500"
              />
            </Tooltip>
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  )
}
