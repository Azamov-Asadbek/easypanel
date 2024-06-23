import { Suspense } from '@/components/suspense'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/sidebar/sidebar'
import { Container, Wrapper } from './style'
const Layout = () => (
  // <Hoc>
  <Container>
    <Sidebar />
    <Wrapper>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  </Container>
  // </Hoc>
)

export default Layout
