import { FC, useState } from 'react'
import { Avatar, useDisclosure } from '@chakra-ui/react'
import AvatarModal from '../AvatarModal'


interface AvatarInputProps {
  avatarName: string
}


const AvatarInput: FC<AvatarInputProps> = (props) => {
  const { avatarName } = props

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [avatarBackgroundColor, setAvatarBackgroundColor] = useState<string>('#B794F4')

  return (
    <>
      <Avatar
        backgroundColor={avatarBackgroundColor}
        color="white"
        name={avatarName}
        onClick={onOpen}
        size="xl"
      />

      <AvatarModal
        avatarBackgroundColor={avatarBackgroundColor}
        isOpen={isOpen}
        onClose={onClose}
        onPickAvatarBackgroundColor={setAvatarBackgroundColor}
      />
    </>
  )
}


export default AvatarInput
