import { Box, useStyleConfig } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'


interface CardProps {
  children?: ReactNode
}


const Card: FC<CardProps> = (props) => {
  const { children } = props

  const styles = useStyleConfig('Card', props)

  return (
    <Box
      __css={styles}
      border="2px"
      borderRadius="base"
      mb={6}
      p={6}
      w="full"
    >
      {children}
    </Box>
  )
}

Card.defaultProps = {
  children: null,
}

export default Card
