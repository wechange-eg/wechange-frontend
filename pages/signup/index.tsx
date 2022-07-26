import {
  Box,
  Link,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
// eslint-disable-next-line sort-imports
import Card from '../../components/Card'
import FullHeightCenterWithNavBar from '../../layouts/FullHeightCenterWithNavBar'
import { NextPageWithLayout } from '../_app'
import SingUpForm from '../../components/SignUp/SingUpForm'
import VStack from '../../layouts/VStack'


const Signup: NextPageWithLayout = () => (
  <>
    <Text
      display="block"
      fontSize="2xl"
      fontWeight="semibold"
    >
      Sign Up
    </Text>

    <Card>
      <SingUpForm />
    </Card>

    <Box textAlign="center">
      <Text>Already have an account?</Text>
      <NextLink
        href="/login"
        passHref
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link>Log in</Link>
      </NextLink>
    </Box>
  </>
)


Signup.getLayout = (page) => (
  <FullHeightCenterWithNavBar>
    <VStack
      w={{
        base: 'full',
        sm: 'sm',
      }}
    >
      {page}
    </VStack>
  </FullHeightCenterWithNavBar>
)

export default Signup
