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
import ProfileForm from '../../components/SignUp/ProfileForm'
import VStack from '../../layouts/VStack'


const Profile: NextPageWithLayout = () => (
  <>
    <Text
      display="block"
      fontSize="2xl"
      fontWeight="semibold"
    >
      Sign Up
    </Text>

    {/* todo: uncomment */}
    {/* <Closable> */}
    {/*   <Alert */}
    {/*     status="error" */}
    {/*     variant="solid" */}
    {/*   > */}
    {/*     <AlertIcon /> */}
    {/*     <Box> */}
    {/*       <AlertTitle>Log In not possible</AlertTitle> */}
    {/*       <AlertDescription> */}
    {/*         The e-mail/password you entered is not correct, please try again. */}
    {/*       </AlertDescription> */}
    {/*     </Box> */}
    {/*   </Alert> */}
    {/* </Closable> */}

    <Card>
      <ProfileForm />
    </Card>

    <Box textAlign="center">
      <Text>Already have an account?</Text>
      <NextLink
        href="#"
        passHref
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link>Log in</Link>
      </NextLink>
    </Box>
  </>
)


Profile.getLayout = (page) => (
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


export default Profile
