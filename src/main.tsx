import { CssBaseline } from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Suspense } from './components/suspense'
import { theme } from './configs/material'
import './index.css'
import { router } from './router'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </CssVarsProvider>
  </Suspense>,
)
