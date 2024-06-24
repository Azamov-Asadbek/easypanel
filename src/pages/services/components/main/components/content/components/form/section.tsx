import { Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { type SchemaType, schema } from './form.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputPassword } from '@/components/inputs/input-password'
import { Input } from '@/components/inputs/input'

export const FormSection = () => {
  const form = useForm<SchemaType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  function onSubmit(data: SchemaType) {
    alert(data)
  }
  return (
    <Stack
      bgcolor={theme => theme.palette.background.default}
      p='16px'
      borderRadius='8px'
      gap='24px'
      component='form'
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Input
        fullWidth
        label='Image *'
        name='image'
        control={form.control}
        helperText='Enter a public image name from any Docker registry'
      />
      {/* <InputPassword fullWidth label='Salom' name='password' control={form.control} /> */}
    </Stack>
  )
}
