import { Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'
import Image from 'next/image'


const SimpleNavBar: FC = () => (
  <Flex
    alignItems="center"
    as="nav"
    gap={2}
    h={58}
    mb={4}
    p={4}
  >
    <Image
      alt="logo"
      height={28}
      layout="fixed"
      src="/projects/default/img/logo.png"
      width={28}
    />

    <Text
      fontWeight="semibold"
    >
      WECHANGE
    </Text>

  </Flex>
)


export default SimpleNavBar
