import { Button, InputRightElement } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { InputGroup, InputProps } from '@chakra-ui/input'
// eslint-disable-next-line sort-imports
import Input from '../Input'


interface PasswordInputProps extends InputProps {}

const PasswordInput: FC<PasswordInputProps> = (props) => {
  const [show, setShow] = useState<boolean>(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup>
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Input
        py={1.5}
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
}


export default PasswordInput
