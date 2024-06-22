import { ROUTER } from '@/constants/router'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// LAYOUT
const Layout = lazy(async () => await import('@/layout'))

// ADMIN
const Services = lazy(async () => await import('@/pages/services'))

export const router = createBrowserRouter([
  {
    path: ROUTER.HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTER.SERVICES,
        element: <Services />,
      },
    ],
  },
])
