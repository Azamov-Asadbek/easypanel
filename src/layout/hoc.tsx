import { ROUTER } from '@/constants/router'
import { type HocProps } from '@/types/hoc'
import { Navigate } from 'react-router-dom'

export const Hoc = ({ children }: HocProps) => {
  const token = true
  console.log(children)

  if (token) {
    return <Navigate to={ROUTER.SERVICES} />
  } else return <>{children}</>
}
