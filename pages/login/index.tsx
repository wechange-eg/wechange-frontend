import {
  Box,
  Flex,
  Link,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
// eslint-disable-next-line sort-imports
import Card from '../../components/Card'
import ColumnGrowableCenter from '../../layouts/ColumnGrowableCenter'
import FullHeightWithNavBar from '../../layouts/FullHeightWithNavBar'
import LogInForm from '../../components/LogIn/LogInForm'
import { NextPageWithLayout } from '../_app'
import SideImage from '../../components/LogIn/SideImage'
import VStack from '../../layouts/VStack'


const Login: NextPageWithLayout = () => (
  <>
    {/* the login form */}
    <ColumnGrowableCenter>
      <VStack
        w={{
          base: 'full',
          sm: 'sm',
        }}
      >
        <Box textAlign="center">
          <Text
            display="block"
            fontSize="2xl"
            fontWeight="semibold"
          >
            Log In
          </Text>

          <Text
            display="block"
            fontWeight="normal"
          >
            Welcome to wechange.de
          </Text>
        </Box>

        <Card>
          <LogInForm />
        </Card>

        <Box textAlign="center">
          <Text>{'You don\'t have an account?'}</Text>
          <NextLink
            href="/signup"
            passHref
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link>Sign Up</Link>
          </NextLink>
        </Box>
      </VStack>
    </ColumnGrowableCenter>

    <SideImage />
  </>
)

Login.getLayout = (page) => (
  <FullHeightWithNavBar>
    <Flex
      flexGrow={1}
      gap={0}
    >
      {page}
    </Flex>
  </FullHeightWithNavBar>
)


export default Login
