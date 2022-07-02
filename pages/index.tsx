import {
  Button,
  Text,
  VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import type { NextPage } from 'next'
// eslint-disable-next-line sort-imports
import Card from '../components/Card'
import CredentialsForm from '../components/SignUp/CredentialsForm'
import FullHeightCenterWithNavBar from '../layouts/FullHeightCenterWithNavBar'
import ToggleColorModeButton from '../components/ToggleColorModeButton'


const Home: NextPage = () => (
  <>
    <FullHeightCenterWithNavBar>
      <VStack
        spacing={6}
        w={{
          base: 'full',
          sm: 'sm',
        }}
      >
        <Text
          display="block"
          fontSize="2xl"
          fontWeight="semibold"
        >
          Sign Up
        </Text>

        <Card>
          <CredentialsForm />
        </Card>

        <VStack>
          <Text>Already have an account?</Text>
          <NextLink
            href="#"
            passHref
          >
            <Button variant="link">Log in</Button>
          </NextLink>
        </VStack>

      </VStack>
    </FullHeightCenterWithNavBar>

    <ToggleColorModeButton />
  </>
)


export default Home
