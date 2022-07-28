import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
// eslint-disable-next-line sort-imports
import { FormHelperText, PasswordInput } from '../../Form'
import VStack from '../../../layouts/VStack'


const SignUpForm: FC = () => (
  <VStack
    align="stretch"
    size="sm"
  >
    <FormControl isRequired>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input id="email" />
    </FormControl>

    <FormControl isRequired>
      <FormLabel htmlFor="password">Password</FormLabel>
      <PasswordInput />
      {/* todo: uncomment */}
      {/* <FormHelperText variant="success">Password is strong</FormHelperText> */}
    </FormControl>

    <NextLink href="/signup/profile">
      <Button variant="brand-solid">Continue</Button>
    </NextLink>

    <Box>
      <Text mb={4}>
        {/* eslint-disable-next-line max-len */}
        The use of wechange.de is free of charge. However, we ask you to support the maintenance and further development of the platform with a voluntary contribution after completing registration.
      </Text>

      <NextLink
        href="#"
        passHref
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link>Learn more</Link>
      </NextLink>
    </Box>
  </VStack>
)


export default SignUpForm
