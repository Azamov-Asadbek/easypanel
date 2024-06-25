import { ReactComponent as IconLogo } from '@/assets/icons/original-logo.svg'
import { ReactComponent as IconSearch } from '@/assets/icons/search.svg'
import { Input } from '@/components/inputs/input'
import { ROUTER } from '@/constants/router'
import { yupResolver } from '@hookform/resolvers/yup'
import { Divider, InputAdornment, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Menu } from '../mobileMenu'
import { schema, type SchemaType } from './form.schema'

export const Header = () => {
  const form = useForm<SchemaType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  function onSubmit(data: SchemaType) {
    alert(data)
  }
  return (
    <>
      <Stack
        component='form'
        onSubmit={form.handleSubmit(onSubmit)}
        p='24px 16px'
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        gap='24px'
        bgcolor={theme => theme.palette.background.paper}
      >
        <Link to={ROUTER.HOME}>
          <IconLogo />
        </Link>
        <Input
          fullWidth
          placeholder='Search services ...'
          name='search'
          control={form.control}
          className='header'
          InputProps={{
            startAdornment: (
              <InputAdornment sx={{ width: '20px' }} position='start'>
                <IconSearch />
              </InputAdornment>
            ),
          }}
        />
        <Menu />
      </Stack>

      <Divider />
    </>
  )
}
