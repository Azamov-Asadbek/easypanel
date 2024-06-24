import { object, string, type InferType } from 'yup'

export const schema = object().shape({
  password: string().notRequired(),
  image: string().required('reuired field').default(''),
  username: string().notRequired(),
})

export type SchemaType = InferType<typeof schema>
