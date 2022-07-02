import { FC, ReactNode } from 'react'
import { Center } from '@chakra-ui/react'


interface FullHeightCenterProps {
  children: ReactNode
}


const FullHeightCenter: FC<FullHeightCenterProps> = (props) => {
  const { children } = props

  return (
    <Center h="full">
      {children}
    </Center>
  )
}


export default FullHeightCenter
