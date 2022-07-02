import { Button, Input, InputRightElement } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { InputGroup } from '@chakra-ui/input'


const PasswordInput: FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup>
      <Input
        py={1.5}
        type={show ? 'text' : 'password'}
      />
      <InputRightElement
        mr={1}
        w={14}
      >
        <Button
          onClick={handleClick}
          variant="formAddon"
        >
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}


export default PasswordInput
