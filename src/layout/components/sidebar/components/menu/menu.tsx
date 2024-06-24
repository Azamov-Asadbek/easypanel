import { ReactComponent as IconDarkMode } from '@/assets/icons/dark.svg'
import { ReactComponent as IconExit } from '@/assets/icons/exit.svg'
import { ReactComponent as IconLightLogo } from '@/assets/icons/lightlogo.svg'
import { ReactComponent as IconDarkLogo } from '@/assets/icons/darkLogo.svg'
import { ReactComponent as IconSearch } from '@/assets/icons/search.svg'
import { SIDEBAR } from '@/constants/sidebar'
import { IconButton, Stack, useColorScheme } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

export const MenuContent = () => {
  const { pathname } = useLocation()
  const { mode, setMode } = useColorScheme()
  const handleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark'
    setMode(newMode)
  }
  return (
    <Stack
      justifyContent='space-between'
      p='24px 16px'
      gap='64px'
      borderRight={theme => `1px solid${theme.palette.colors['Grayscale-Border']}`}
      sx={{ overflowY: 'auto' }}
    >
      <Stack gap='48px' width='100%' alignItems='center'>
        <Link to='/'>{mode === 'light' ? <IconLightLogo /> : <IconDarkLogo />}</Link>
        <Stack gap='32px' alignItems='center'>
          {SIDEBAR.map(({ href, Icon }) => (
            <IconButton
              component={Link}
              to={href}
              key={href}
              color={pathname === href ? 'white' : 'default'}
            >
              <Icon />
            </IconButton>
          ))}
        </Stack>
      </Stack>

      <Stack width='100%' gap='24px' alignItems='center'>
        <IconButton>
          <IconSearch />
        </IconButton>

        <IconButton onClick={handleMode}>
          <IconDarkMode />
        </IconButton>

        <IconButton>
          <IconExit />
        </IconButton>
      </Stack>
    </Stack>
  )
}
