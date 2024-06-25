import { Divider, Stack } from '@mui/material'
import { Header } from './components/header'
import { MainContent } from './components/main'

const Services = () => {
  return (
    <Stack width='100%' p={{ xs: '16px', md: 0 }}>
      <Header />
      <Divider />
      <MainContent />
    </Stack>
  )
}
export default Services
