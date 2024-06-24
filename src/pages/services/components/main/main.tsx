import { Button, Stack } from '@mui/material'
import { ReactComponent as IconDeploy } from '@/assets/icons/rocket.svg'
import { ReactComponent as IconStop } from '@/assets/icons/stop.svg'
import { ReactComponent as IconLogs } from '@/assets/icons/logs.svg'
import { ReactComponent as IconConsole } from '@/assets/icons/terminal.svg'
import { ReactComponent as IconBuild } from '@/assets/icons/force-build.svg'
import { ReactComponent as IconDestroy } from '@/assets/icons/delete.svg'

const buttons = [
  { name: 'Deploy', Icon: IconDeploy, isActive: true },
  { name: 'Stop', Icon: IconStop },
  { name: 'Logs', Icon: IconLogs },
  { name: 'Console', Icon: IconConsole },
  { name: 'Force rebuild', Icon: IconBuild },
  { name: 'Destroy', Icon: IconDestroy },
]
export const MainContent = () => {
  return (
    <Stack p='24px' width='100%' gap='24px'>
      <Stack direction='row' alignItems='center' gap='16px'>
        {buttons?.map(({ name, Icon, isActive }) => (
          <Button
            size='small'
            variant={isActive ? 'contained' : 'outlined'}
            key={name}
            startIcon={!isActive && <Icon />}
          >
            {name}
          </Button>
        ))}
      </Stack>
    </Stack>
  )
}
