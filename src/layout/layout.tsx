import { Suspense } from '@/components/suspense'
import { Container, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Hoc } from './hoc'
const Layout = () => (
  <Hoc>
    <Stack component='main' minHeight='100vh' width='100%'>
      <Suspense>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </Stack>
  </Hoc>
)

export default Layout
