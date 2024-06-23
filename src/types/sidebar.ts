import { type FunctionComponent, type SVGProps } from 'react'

export interface SidebarProps {
  menu: string
  href: string
  children?: Array<{
    href: string
    menu: string
    Icon: FunctionComponent<
      SVGProps<SVGSVGElement> & {
        title?: string | undefined
      }
    >
  }>
  Icon: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  IconActive?: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
}
