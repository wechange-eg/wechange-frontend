import { Button, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'


const ToggleColorModeButton: FC = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Button
      bottom={4}
      onClick={toggleColorMode}
      position="fixed"
      right={4}
      size="sm"
      variant="solid"
    >
      Toggle Color Mode
    </Button>
  )
}

export default ToggleColorModeButton
