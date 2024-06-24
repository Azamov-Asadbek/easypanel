import { type SidebarProps } from '@/types/sidebar'
import { ROUTER } from './router'
import { ReactComponent as IconDashboard } from '@/assets/icons/dashboard.svg'
import { ReactComponent as IconServices } from '@/assets/icons/services.svg'
import { ReactComponent as IconMonitoring } from '@/assets/icons/monitoring.svg'
import { ReactComponent as IconGetHelp } from '@/assets/icons/get-help.svg'
import { ReactComponent as IconSettings } from '@/assets/icons/settings.svg'
import { ReactComponent as IconFile } from '@/assets/icons/file.svg'
import { ReactComponent as IconCode } from '@/assets/icons/code.svg'
import { ReactComponent as IconRocets } from '@/assets/icons/rockets.svg'
import { ReactComponent as IconEnv } from '@/assets/icons/filter.svg'
import { ReactComponent as IconGlobe } from '@/assets/icons/global.svg'
import { ReactComponent as IconRedirect } from '@/assets/icons/direction.svg'
import { ReactComponent as IconSecurity } from '@/assets/icons/security.svg'
import { ReactComponent as IconChart } from '@/assets/icons/chart.svg'
import { ReactComponent as IconMountenance } from '@/assets/icons/mountine.svg'
import { ReactComponent as IconStorage } from '@/assets/icons/storage.svg'

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

export const SERVICE_DEPLOY_SIDEBAR: SidebarProps[] = [
  {
    menu: 'Overview',
    href: ROUTER.SERVICES,
    Icon: IconFile,
  },
  {
    menu: 'Source',
    href: ROUTER.DASHBOARD,
    Icon: IconCode,
  },

  {
    menu: 'Deployments',
    href: ROUTER.DASHBOARD,
    Icon: IconRocets,
  },
  {
    menu: 'Environment',
    href: ROUTER.DASHBOARD,
    Icon: IconEnv,
  },
  {
    menu: 'Domains',
    href: ROUTER.DASHBOARD,
    Icon: IconGlobe,
  },
  {
    menu: 'Redirects',
    href: ROUTER.DASHBOARD,
    Icon: IconRedirect,
  },
  {
    menu: 'Security',
    href: ROUTER.DASHBOARD,
    Icon: IconSecurity,
  },
  {
    menu: 'Resources',
    href: ROUTER.DASHBOARD,
    Icon: IconChart,
  },
  {
    menu: 'Maintenance',
    href: ROUTER.DASHBOARD,
    Icon: IconMountenance,
  },
  {
    menu: 'Storage',
    href: ROUTER.DASHBOARD,
    Icon: IconStorage,
  },
  {
    menu: 'Advanced',
    href: ROUTER.DASHBOARD,
    Icon: IconSettings,
  },
]
