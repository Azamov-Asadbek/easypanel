import { SERVICE_DEPLOY_SIDEBAR } from '@/constants/sidebar'
import { Button, Stack } from '@mui/material'

export const Sidebar = () => {
  return (
    <Stack width='254px' gap='4px'>
      {SERVICE_DEPLOY_SIDEBAR.map(({ menu, Icon }, i: number) => (
        <Button variant={i === 1 ? 'active-text' : 'text'} key={i} startIcon={<Icon />}>
          {menu}
        </Button>
      ))}
    </Stack>
  )
}
