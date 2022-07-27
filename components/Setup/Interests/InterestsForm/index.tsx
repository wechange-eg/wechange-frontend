import {
  FormControl,
  FormLabel,
  Text,
  Wrap,
} from '@chakra-ui/react'
import { FC } from 'react'
import { Input } from '../../../Form'
import PredefinedTopics from './PredefinedTopics'
import CustomTags from './CustomTags'


const InterestsForm: FC = () => (
  <>
    <Text fontWeight="semibold">Topics</Text>

    {/* eslint-disable-next-line max-len */}
    <Text>Choose topics that interest you to make it easier for you to network with like-minded people.</Text>

    <PredefinedTopics />

    <CustomTags />
  </>
)


export default InterestsForm
