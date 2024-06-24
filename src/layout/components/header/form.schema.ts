import { object, string, type InferType } from 'yup'

export const schema = object().shape({
  search: string().notRequired(),
})

export type SchemaType = InferType<typeof schema>
