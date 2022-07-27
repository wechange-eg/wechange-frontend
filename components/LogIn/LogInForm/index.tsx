import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
} from '@chakra-ui/react'
import axios from 'axios'
// eslint-disable-next-line sort-imports
import { FC } from 'react'
import NextLink from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// eslint-disable-next-line sort-imports
import { Authorization, AuthorizationSchema } from '../../../dtos/login/Authorization'
import { PasswordInput } from '../../Form'
import VStack from '../../../layouts/VStack'


const onLogin = async (authorization: Authorization) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_WECHANGE_BACKEND as string,
    authorization
  )
  console.log(response)
}

const LoginForm: FC = () => {
  const { register, handleSubmit } = useForm<Authorization>({
    resolver: zodResolver(AuthorizationSchema),
  })


  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <VStack
        align="stretch"
        size="sm"
      >
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Input {...register('email')} />
        </FormControl>

        {/* use password field because of the show button.
    it was not part of the original design and was added later */}
        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <PasswordInput {...register('password')} />
        </FormControl>

        <Box>
          <NextLink
            href="#"
            passHref
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link>Forgot password?</Link>
          </NextLink>
        </Box>

        <Button
          type="submit"
          variant="brand-solid"
        >
          Log In
        </Button>
      </VStack>
    </form>
  )
}

export default LoginForm
