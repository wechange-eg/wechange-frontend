import { FC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import FullHeightCenter from './FullHeightCenter'
import Index from '../components/SimpleNavBar'


interface FullHeightCenterWithNavBarProps {
  children?: ReactNode
}


const FullHeightCenterWithNavBar: FC<FullHeightCenterWithNavBarProps> = (props) => {
  const { children } = props

  return (
    <Box
      h="100vh"
    >
      <Index />
      <FullHeightCenter>
        {children}
      </FullHeightCenter>
    </Box>
  )
}

FullHeightCenterWithNavBar.defaultProps = {
  children: null,
}

export default FullHeightCenterWithNavBar
