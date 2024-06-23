import { type SidebarProps } from '@/types/sidebar'
import { ROUTER } from './router'
import { ReactComponent as IconDashboard } from '@/assets/icons/dashboard.svg'
import { ReactComponent as IconServices } from '@/assets/icons/services.svg'
import { ReactComponent as IconMonitoring } from '@/assets/icons/monitoring.svg'
import { ReactComponent as IconGetHelp } from '@/assets/icons/get-help.svg'
import { ReactComponent as IconSettings } from '@/assets/icons/settings.svg'

export const SIDEBAR: SidebarProps[] = [
  {
    menu: 'Dashboard',
    href: ROUTER.DASHBOARD,
    Icon: IconDashboard,
  },
  {
    menu: 'Services',
    href: ROUTER.SERVICES,
    Icon: IconServices,
    // IconActive: IconCategoryActive,
  },
  {
    menu: 'Monitoring',
    href: ROUTER.MONITORING,
    Icon: IconMonitoring,
  },
  {
    menu: 'Get Help',
    href: ROUTER.GETHELP,
    Icon: IconGetHelp,
  },
  {
    menu: 'Settings',
    href: ROUTER.SETTINGS,
    Icon: IconSettings,
  },
]
