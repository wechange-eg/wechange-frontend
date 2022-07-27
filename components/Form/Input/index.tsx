import { Input as ChackraInput, InputProps as ChakraInputProps, forwardRef } from '@chakra-ui/react'


interface InputProps extends ChakraInputProps {

}


const Input = forwardRef<InputProps, 'input'>((props, ref) => (
  <>
    {/* eslint-disable react/jsx-props-no-spreading */}
    <ChackraInput
      {...props}
      ref={ref}
    />
    {/* eslint-enable react/jsx-props-no-spreading */}
  </>
))

// for some reasons eslint cannot understand the props are extended from InputOptions
/* eslint-disable react/default-props-match-prop-types */
Input.defaultProps = {
  errorBorderColor: 'red.600',
  focusBorderColor: 'blue.500',
}
/* eslint-enable react/default-props-match-prop-types */

export default Input
