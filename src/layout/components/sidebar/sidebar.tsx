import { useMediaQuery, useTheme } from '@mui/material'
import { MenuContent } from './components/menu'
import { SubMenuContent } from './components/submenu'
import { Wrapper } from './style'
import { Header } from '../header'

export const Sidebar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      {isMobile ? (
        <Header />
      ) : (
        <Wrapper>
          <MenuContent />
          <SubMenuContent />
        </Wrapper>
      )}
    </>
  )
}
