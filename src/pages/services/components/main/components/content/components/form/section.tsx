import { Box, Button, Stack } from '@mui/material'
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
      gap='16px'
      component='form'
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Input
        fullWidth
        label='Image'
        required
        name='image'
        control={form.control}
        helperText='Enter a public image name from any Docker registry'
      />
      <Stack direction={{ lg: 'row' }} width='100%' gap='16px'>
        <Input
          fullWidth
          label='Username'
          name='username'
          control={form.control}
          helperText='Used for private registries'
        />
        <InputPassword
          fullWidth
          label='Password'
          name='password'
          control={form.control}
          helperText='Used for private registries'
        />
      </Stack>
      <Box>
        <Button type='submit'>Save changes</Button>
      </Box>
    </Stack>
  )
}
