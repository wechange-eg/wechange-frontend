import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
} from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// eslint-disable-next-line sort-imports
import { Authorization, AuthorizationSchema } from '../../../dtos/login/Authorization'
import { PasswordInput } from '../../Form'
import VStack from '../../../layouts/VStack'


const LoginForm: FC = () => {
  const { register, handleSubmit } = useForm<Authorization>({
    resolver: zodResolver(AuthorizationSchema),
  })
  const onSubmit = (data: Authorization) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
