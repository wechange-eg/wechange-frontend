import { Button, Text } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
import VStack from '../../../layouts/VStack'


const Welcome: FC = () => (
  <VStack spacing="sm">
    {/* todo: uncomment  Please open the link in the email to complete the registration */}
    <Text>
      {/* eslint-disable-next-line max-len */}
      We have sent you an email to verify your account.
    </Text>

    <Text>
      Next we will guide you through the most important profile settings.
    </Text>

    <NextLink href="/setup/profile">
      <Button variant="brand-solid">Get started</Button>
    </NextLink>
  </VStack>
)


export default Welcome
