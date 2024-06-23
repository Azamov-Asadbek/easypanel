import { Divider, IconButton, MenuItem, Select, Stack, Typography } from '@mui/material'
import { ReactComponent as IconFilter } from '@/assets/icons/filter.svg'
import { ReactComponent as IconAdd } from '@/assets/icons/add.svg'

export const SubMenuContent = () => {
  return (
    <Stack p='24px' gap='24px' width='300px'>
      <Stack width='100%' gap='8px' direction='row'>
        <Select fullWidth placeholder='Project name' defaultValue={10} size='small'>
          <MenuItem value={10}>Jam’s project</MenuItem>
        </Select>
        <IconButton>
          <IconFilter />
        </IconButton>
      </Stack>
      <Divider />
      <Stack gap='12px' width='100%'>
        <Stack
          direction='row'
          gap='8px'
          alignItems='center'
          justifyContent='space-between'
          width='100%'
        >
          <Typography variant='Caps / Caps 2 - 12 Regular'>Services</Typography>
          <IconButton size='small'>
            <IconAdd />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
