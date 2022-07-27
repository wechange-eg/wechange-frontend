import { Button, InputRightElement, forwardRef } from '@chakra-ui/react'
import { InputGroup, InputProps } from '@chakra-ui/input'
import { useState } from 'react'
// eslint-disable-next-line sort-imports
import Input from '../Input'


interface PasswordInputProps extends InputProps {}


const PasswordInput = forwardRef<PasswordInputProps, 'input'>((props, ref) => {
  const [show, setShow] = useState<boolean>(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Input
        py={1.5}
        ref={ref}
        type={show ? 'text' : 'password'}
        {...props}
      />
      {/* eslint-disable react/jsx-props-no-spreading */}

      <InputRightElement
        mr={1}
        w={14}
      >
        <Button
          onClick={handleClick}
          variant="inputRightElement"
        >
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
})


export default PasswordInput
