import { create } from '@/configs/zustand'
interface SidebarStoreProps {
  value: boolean
  setValue: (value: boolean) => void
}

export const useSidebarStore = create<SidebarStoreProps>(set => ({
  value: true,
  setValue: value => {
    set({ value })
  },
}))
