import {
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { FC, useState } from 'react'
import { useDebounce } from 'react-use'
import AvatarInput from './AvatarInput'
import VStack from '../../../../layouts/VStack'


const INITIAL_NAME = 'W E'

const ProfileForm: FC = () => {
  const [displayName, setDisplayName] = useState<string>(INITIAL_NAME)
  const [avatarName, setAvatarName] = useState<string>(INITIAL_NAME)

  useDebounce(
    () => {
      setAvatarName(displayName)
    },
    500,
    [displayName],
  )

  return (
    <VStack
      size="lg"
    >
      <FormControl>
        <FormLabel>Avatar</FormLabel>
        <HStack
          alignItems="center"
          gap={6}
        >
          <AvatarInput
            avatarName={avatarName}
          />

          <FormHelperText>
            {/* eslint-disable-next-line max-len */}
            Click on the image to choose a color for your profile or upload a picture to make it
            easier for others to recognize you.
          </FormHelperText>
        </HStack>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Display name</FormLabel>
        <Input
          name="display_name"
          onChange={(e) => { setDisplayName(e.target.value) }}
        />
      </FormControl>

      <FormControl>
        <FormLabel>About me</FormLabel>
        <Textarea />
        <FormHelperText>
          Let others get to know who you are and what motivates you.
        </FormHelperText>
      </FormControl>
    </VStack>
  )
}

export default ProfileForm
