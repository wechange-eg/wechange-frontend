import { z } from 'zod'


export const AuthorizationSchema = z.object({
  username: z.string().trim().email(),
  password: z.string().min(1),
})

export type Authorization = z.infer<typeof AuthorizationSchema>

export const newAuthorization = () => (AuthorizationSchema.parse({}))
