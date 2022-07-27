import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalProps,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { Dispatch, FC } from 'react'
import VStack from '../../../../../layouts/VStack'

// todo: get the color variables from theme
const colors: string[] = [
  '#4FD1C5',
  '#63B3ED',
  '#68D391',
  '#76E4F7',
  '#0987A0',
  '#A7ABB0',
  '#B794F4',
  '#CBD5E0',
  '#F687B3',
  '#F6AD55',
  '#F6E05E',
  '#FC8181',
]

interface AvatarModalProps extends Omit<ModalProps, 'children'> {
  avatarBackgroundColor: string
  onPickAvatarBackgroundColor: Dispatch<string>
}

const AvatarModal: FC<AvatarModalProps> = (props) => {
  const { avatarBackgroundColor, onPickAvatarBackgroundColor, isOpen, onClose } = props

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{
        base: 'full',
        sm: 'xs',
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody
          p={6}
        >
          <VStack
            alignItems="center"
          >
            <Avatar
              backgroundColor={avatarBackgroundColor}
              color="white"
              name="Teal White"
              size="xl"
            />

            <Button
              alignSelf="stretch"
              variant="outline"
            >
              Upload Image
            </Button>

            <Text
              fontSize="sm"
            >
              or select a color
            </Text>

            <Wrap
              justify="center"
              spacing={6}
            >
              {
                colors.map((color) => (
                  <WrapItem
                    backgroundColor={color}
                    borderRadius="full"
                    h="40px"
                    key={`avatar-color-${color}`}
                    onClick={() => { onPickAvatarBackgroundColor(color) }}
                    w="40px"
                  />
                ))
              }
            </Wrap>

          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            mr={4}
            onClick={onClose}
            variant="outline"
          >
            Cancel
          </Button>
          <Button
            onClick={onClose}
            variant="brand-solid"
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}


export default AvatarModal
