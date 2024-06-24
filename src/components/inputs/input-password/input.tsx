import { useBoolean } from '@/hooks/useBoolean'
import { type InputPasswordProps } from '@/types/components'
import { type FieldValues } from 'react-hook-form'
import { Input } from '../input'

export const InputPassword = <T extends FieldValues>(props: InputPasswordProps<T>) => {
  const { value, toggle } = useBoolean()

  return (
    <Input
      {...props}
      autoComplete='current-password'
      type={value ? 'text' : 'password'}
      InputProps={{
        ...props.InputProps,
      }}
    />
  )
}
