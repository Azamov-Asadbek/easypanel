import { ReactComponent as IconLink } from '@/assets/icons/link.svg'
import { ReactComponent as IconAlert } from '@/assets/icons/alert.svg'
import { ReactComponent as IconClose } from '@/assets/icons/close.svg'
import { ReactComponent as IconGlobus } from '@/assets/icons/global.svg'
import {
  Alert,
  Button,
  Collapse,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useState } from 'react'

export const Header = () => {
  const [open, setOpen] = useState(true)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Stack
      width='100%'
      p={{ xs: '0 0 32px', md: '24px' }}
      direction={{ md: 'row' }}
      justifyContent='space-between'
      gap={{ xs: '32px', md: '16px' }}
      flexWrap='wrap'
    >
      {isMobile && (
        <Collapse in={open}>
          <Alert
            icon={<IconAlert />}
            severity='info'
            action={
              <IconButton
                size='small'
                onClick={() => {
                  setOpen(false)
                }}
              >
                <IconClose />
              </IconButton>
            }
          >
            To use all features of Easypanel, we recommend using the desktop version
          </Alert>
        </Collapse>
      )}

      <Stack gap={{ md: '4px', xs: '16px' }}>
        <Stack gap='8px' direction='row' alignItems='center'>
          {isMobile ? (
            <>
              <Select fullWidth placeholder='Project name' defaultValue={10} size='small'>
                <MenuItem value={10}>Jam’s project</MenuItem>
              </Select>
              <Typography
                textAlign='center'
                width='24px'
                color={theme => theme.palette.colors['Grayscale-Border']}
              >
                /
              </Typography>
              <Select fullWidth placeholder='Project name' defaultValue={10} size='small'>
                <MenuItem value={10}>Jam’s project</MenuItem>
              </Select>
            </>
          ) : (
            <>
              <Typography component='h1' variant='Heading / H4 - 20'>
                Sparklens
              </Typography>
              <Typography variant='Badge-x-base'>APP</Typography>
            </>
          )}
        </Stack>

        <Typography
          variant='link'
          target='_blank'
          component='a'
          href='https://sparklens.easypanel.host/'
        >
          {isMobile && <IconGlobus />} https://sparklens.easypanel.host/ <IconLink />
        </Typography>
      </Stack>
      {!isMobile && (
        <Button variant='outlined' size='small'>
          Status:{' '}
          <Typography sx={{ ml: '8px' }} variant='Heading / H5 - 16'>
            Operational
          </Typography>
        </Button>
      )}
    </Stack>
  )
}
