import { MenuContent } from './components/menu'
import { SubMenuContent } from './components/submenu'
import { Wrapper } from './style'

export const Sidebar = () => {
  return (
    <Wrapper>
      <MenuContent />
      <SubMenuContent />
    </Wrapper>
  )
}
