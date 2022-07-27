import { FC } from 'react'
import {
  FormControl,
  FormLabel,
  Tag, TagCloseButton,
  TagLabel,
  useStyleConfig,
  Wrap,
} from '@chakra-ui/react'
import { useImmerReducer } from 'use-immer'
import { useForm } from 'react-hook-form'
import { Input } from '../../../../Form'


const CustomTags: FC = () => {
  const tagStyle = useStyleConfig('Tag')

  const [tags, dispatch] = useImmerReducer<string[]>(
    (draft, action: { type: string, payload: string }) => {
      switch (action.type) {
        case 'add':
          if (action.payload && !draft.includes(action.payload)) {
            draft.push(action.payload)
          }
          break
        case 'remove':
          draft.splice(draft.indexOf(action.payload), 1)
          break
        default:
          break
      }
    },
    [],
  )

  const { register, handleSubmit } = useForm()

  return (
    <>
      {
        Boolean(tags.length) && (
          <Wrap
            spacingX={2}
            spacingY={4}
          >
            {
              tags.map((tag) => (
                <Tag
                  key={tag}
                  sx={tagStyle}
                  variant="solid"
                >
                  <TagLabel>
                    {tag}
                  </TagLabel>

                  <TagCloseButton
                    m={0}
                    onClick={() => {
                      dispatch({
                        type: 'remove',
                        payload: tag,
                      })
                    }}
                  />

                </Tag>
              ))
            }
          </Wrap>
        )
      }

      <form
        onSubmit={handleSubmit((values) => {
          dispatch({ type: 'add', payload: values.newTag as string })
        })}
        style={{ alignSelf: 'stretch' }}
      >
        <FormControl>
          <FormLabel>Add more topics</FormLabel>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Input {...register('newTag')} />
        </FormControl>
      </form>

    </>
  )
}


export default CustomTags
