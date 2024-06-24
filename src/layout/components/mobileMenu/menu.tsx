import { ReactComponent as IconClose } from '@/assets/icons/close.svg'
import { ReactComponent as IconDarkMode } from '@/assets/icons/dark.svg'
import { ReactComponent as IconDarkLogo } from '@/assets/icons/darkLogo.svg'
import { ReactComponent as IconExit } from '@/assets/icons/exit.svg'
import { ReactComponent as IconLightLogo } from '@/assets/icons/lightlogo.svg'
import { ReactComponent as IconMenu } from '@/assets/icons/menu.svg'
import { ReactComponent as IconSearch } from '@/assets/icons/search.svg'
import { SIDEBAR } from '@/constants/sidebar'
import { useBoolean } from '@/hooks/useBoolean'

import {
  Button,
  IconButton,
  Stack,
  SwipeableDrawer,
  Switch,
  Typography,
  useColorScheme,
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

export const Menu = () => {
  const { value, setTrue, setFalse } = useBoolean()
  const { pathname } = useLocation()
  const { mode, setMode } = useColorScheme()
  const handleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark'
    setMode(newMode)
  }
  return (
    <>
      <IconButton onClick={setTrue}>
        <IconMenu />
      </IconButton>

      <SwipeableDrawer open={value} anchor='right' onOpen={setTrue} onClose={setFalse}>
        <Stack width='100%' alignItems='center' direction='row' gap='16px'>
          <Stack component={Link} to='/'>
            {mode === 'light' ? <IconLightLogo /> : <IconDarkLogo />}
          </Stack>
          <Stack>
            <Typography
              component='h3'
              variant='Heading / H5 - 16'
              color={theme => theme.palette.colors['Grayscale-Content-1']}
            >
              Easypanel
            </Typography>

            <Typography component='p' variant='Paragraph / P3 - 13'>
              1.35.0 (Canary)
            </Typography>
          </Stack>
          <IconButton sx={{ ml: 'auto' }} onClick={setFalse}>
            <IconClose />
          </IconButton>
        </Stack>

        <Stack gap='16px' mt='24px' width='100%' alignItems='center'>
          {SIDEBAR.map(({ Icon, menu, href }) => (
            <Button
              fullWidth
              variant={pathname === href ? 'white' : 'text'}
              sx={{
                path: {
                  fill: theme => (pathname === href ? theme.palette.colors.Brand : undefined),
                },
              }}
              startIcon={<Icon />}
              key={menu}
            >
              {menu}
            </Button>
          ))}
          <Button variant='text' fullWidth startIcon={<IconSearch />}>
            Quick actions
          </Button>
          <Button variant='text' fullWidth startIcon={<IconDarkMode />} onClick={handleMode}>
            <Stack direction='row' width='100%' alignItems='center' justifyContent='space-between'>
              Dark mode
              <Switch checked={mode === 'dark'} />
            </Stack>
          </Button>
          <Button variant='text' fullWidth startIcon={<IconExit />}>
            Log out
          </Button>
        </Stack>
      </SwipeableDrawer>
    </>
  )
}
