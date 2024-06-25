import { ReactComponent as IconDestroy } from '@/assets/icons/delete.svg'
import { ReactComponent as IconBuild } from '@/assets/icons/force-build.svg'
import { ReactComponent as IconLogs } from '@/assets/icons/logs.svg'
import { ReactComponent as IconDeploy } from '@/assets/icons/rocket.svg'
import { ReactComponent as IconStop } from '@/assets/icons/stop.svg'
import { ReactComponent as IconConsole } from '@/assets/icons/terminal.svg'
import {
  Button,
  Divider,
  IconButton,
  MenuItem,
  Select,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import { Content } from './components/content'
import { Sidebar } from './components/sidebar'

const buttons = [
  { name: 'Deploy', Icon: IconDeploy, isActive: true },
  { name: 'Stop', Icon: IconStop },
  { name: 'Logs', Icon: IconLogs },
  { name: 'Console', Icon: IconConsole },
  { name: 'Force rebuild', Icon: IconBuild },
  { name: 'Destroy', Icon: IconDestroy },
]
export const MainContent = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Stack p={{ xs: '32px 0', md: '24px' }} width='100%' gap='16px'>
      <Stack
        direction='row'
        alignItems='center'
        gap={{ xs: '14px', md: '16px' }}
        flexWrap={{ md: 'wrap' }}
        pb={{ md: '24px' }}
      >
        {buttons?.slice(0, isMobile ? 3 : buttons.length).map(({ name, Icon, isActive }) => (
          <Fragment key={name}>
            {isMobile ? (
              <IconButton
                sx={{ width: '40px', height: '40px', borderRadius: '8px' }}
                color={isActive ? 'filled' : 'contained'}
              >
                <Icon />
              </IconButton>
            ) : (
              <Button
                size='small'
                variant={isActive ? 'contained' : 'outlined'}
                startIcon={!isActive && <Icon />}
              >
                {name}
              </Button>
            )}
          </Fragment>
        ))}
        {isMobile && (
          <Select fullWidth placeholder='More actions' defaultValue={10} size='small'>
            <MenuItem value={10}>More actions</MenuItem>
          </Select>
        )}
      </Stack>

      <Stack direction={{ md: 'row' }} gap={{ xs: '32px', md: '24px' }}>
        <Sidebar />
        {isMobile && <Divider />}
        <Content />
      </Stack>
    </Stack>
  )
}
