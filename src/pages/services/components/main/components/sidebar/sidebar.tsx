import { SERVICE_DEPLOY_SIDEBAR } from '@/constants/sidebar'
import { Button, MenuItem, Select, Stack, useMediaQuery, useTheme } from '@mui/material'

export const Sidebar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      {isMobile ? (
        <Stack pt='8px'>
          <Select fullWidth defaultValue={1} size='small'>
            {SERVICE_DEPLOY_SIDEBAR.map(({ menu, Icon }, i: number) => (
              <MenuItem key={i} value={i}>
                <Stack width='100%' alignItems='center' direction='row' gap='8px'>
                  <Icon /> {menu}
                </Stack>
              </MenuItem>
            ))}
          </Select>
        </Stack>
      ) : (
        <Stack width='254px' gap='4px'>
          {SERVICE_DEPLOY_SIDEBAR.map(({ menu, Icon }, i: number) => (
            <Button variant={i === 1 ? 'active-text' : 'text'} key={i} startIcon={<Icon />}>
              {menu}
            </Button>
          ))}
        </Stack>
      )}
    </>
  )
}
