import { ReactComponent as IconLink } from '@/assets/icons/link.svg'
import { Button, Stack, Typography } from '@mui/material'

export const Header = () => {
  return (
    <Stack
      width='100%'
      p='24px'
      direction='row'
      justifyContent='space-between'
      gap='16px'
      flexWrap='wrap'
    >
      <Stack gap='4px'>
        <Stack gap='8px' direction='row' alignItems='center'>
          <Typography component='h1' variant='Heading / H4 - 20'>
            Sparklens
          </Typography>
          <Typography variant='Badge-x-base'>APP</Typography>
        </Stack>

        <Typography
          variant='link'
          target='_blank'
          component='a'
          href='https://sparklens.easypanel.host/'
        >
          https://sparklens.easypanel.host/ <IconLink />
        </Typography>
      </Stack>

      <Button variant='outlined' size='small'>
        Status:{' '}
        <Typography sx={{ ml: '8px' }} variant='Heading / H5 - 16'>
          Operational
        </Typography>
      </Button>
    </Stack>
  )
}
