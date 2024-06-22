import { mixed, object, string, type InferType } from 'yup'

export const schema = object().shape({
  name: string().nullable().default(''),
  region: mixed().default(''),
  start_date: string().nullable().default(''),
  end_date: string().nullable().default(''),
})

export type SchemaType = InferType<typeof schema>
