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
import { useRouter } from 'next/router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMount } from 'react-use'
import { Authorization, AuthorizationSchema } from '../../../dtos/login/Authorization'
import { PasswordInput } from '../../Form'
import VStack from '../../../layouts/VStack'


const LoginForm: FC = () => {
  const router = useRouter()

  const { register, handleSubmit } = useForm<Authorization>({
    resolver: zodResolver(AuthorizationSchema),
  })

  useMount(() => {
    // const token = ls('token')
    //
    // if ()
  })


  const onLogin = async (authorization: any) => {
    await router.push('/dashboard')

    // todo: add adaptor for sender and receiver
    // const payload: LoginRequest = authorization as LoginRequest
    //
    // const url = `${process.env.NEXT_PUBLIC_WECHANGE_BACKEND}/login/`
    //
    // let response: LoginResponse | null = null
    //
    // try {
    //   const { data } = await axios.post(
    //     url,
    //     payload,
    //   )
    //
    //   response = data
    // } catch (e) {
    //   // console.error(e)
    // }
    //
    // // console.log(response)
    // if (response) {
    //   ls('token', response.data.access)
    //   await router.push('/dashboard')
    // }
  }

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <VStack
        align="stretch"
        size="sm"
      >
        <FormControl isRequired>
          <FormLabel htmlFor="username">Email</FormLabel>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Input {...register('username')} />
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
