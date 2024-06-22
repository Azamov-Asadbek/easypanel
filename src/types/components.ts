import { type TextFieldProps } from '@mui/material/TextField'
import type { Control, FieldValues, Path, UseControllerProps } from 'react-hook-form'

export interface OptionProps {
  value: string | number
  label: string | number
  description?: string | null
}

export interface ControlProps<T extends FieldValues> extends UseControllerProps<T> {
  name: Path<T>
  control: Control<T>
}

export type InputProps<T extends FieldValues> = Omit<TextFieldProps, 'variant' | 'id'> &
  ControlProps<T>

export type InputPasswordProps<T extends FieldValues> = Omit<
  TextFieldProps,
  'type' | 'autoComplete' | 'id'
> &
  ControlProps<T>
