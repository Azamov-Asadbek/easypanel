import { type HocProps } from '@/types/hoc'

export const Hoc = ({ children }: HocProps) => {
  const token = true
  if (token) {
    return <>{children}</>
  } else return <h1>Not token</h1>
}
