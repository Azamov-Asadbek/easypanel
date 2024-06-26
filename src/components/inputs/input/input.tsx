import TextField from '@mui/material/TextField'
import { type InputProps } from '@/types/components'
import { type FieldValues, useController } from 'react-hook-form'
import { Stack, styled } from '@mui/material'
import { ReactComponent as IconError } from '@/assets/icons/error.svg'

const RequiredAsterisk = styled('span')(({ theme }) => ({
  color: theme.palette.error.main,
  marginLeft: 4,
  fontWeight: 'bold',
}))
export const Input = <T extends FieldValues>({
  label,
  name,
  control,
  required,
  ...props
}: InputProps<T>) => {
  const {
    field: { ref, disabled, onChange, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  })
  return (
    <TextField
      {...props}
      {...inputProps}
      id={name}
      label={
        <>
          {label}
          {required && <RequiredAsterisk>*</RequiredAsterisk>}
        </>
      }
      error={invalid}
      variant='outlined'
      FormHelperTextProps={{ className: error?.message ? 'error' : '' }}
      helperText={
        error?.message ? (
          <Stack mt='6px' alignItems='center' direction='row' gap='4px'>
            <IconError />
            {error?.message}
          </Stack>
        ) : (
          props.helperText
        )
      }
      value={inputProps?.value ?? ''}
      inputRef={props.inputRef ?? ref}
      InputLabelProps={{ shrink: true }}
      onChange={e => {
        onChange(e)
        if (props.onChange) {
          props.onChange(e)
        }
      }}
    />
  )
}
