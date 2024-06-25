import {
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import { FormSection } from './components/form'

export const Content = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Stack width='100%' gap='32px'>
      <Stack gap='8px'>
        <Typography component='h2' variant='Heading / H4 - 20'>
          Source
        </Typography>
        <Typography component='p' variant='Paragraph / P2 - 20'>
          Some tagline text for better understanding
        </Typography>
      </Stack>
      {isMobile ? (
        <Select fullWidth defaultValue={1} size='small'>
          <MenuItem value={1}>Upload</MenuItem>
        </Select>
      ) : (
        <Stack>
          <Tabs value={value} onChange={handleChange}>
            <Tab value={0} label='Upload' />
            <Tab value={1} label='GitHub' />
            <Tab value={2} label='Docker Image' />
            <Tab value={3} label='Git' />
          </Tabs>
        </Stack>
      )}

      <FormSection />
    </Stack>
  )
}
