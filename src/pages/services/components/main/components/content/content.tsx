import { Grid, Stack, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'

export const Content = () => {
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
      <Stack>
        <Tabs value={value} onChange={handleChange}>
          <Tab value={0} label='Upload' />
          <Tab value={1} label='Upload' />
          <Tab value={2} label='Docker Image' />
          <Tab value={3} label='Git' />
        </Tabs>
      </Stack>
      <Stack p='16px' borderRadius='8px' gap='24px'>
        <Grid container></Grid>
      </Stack>
    </Stack>
  )
}
