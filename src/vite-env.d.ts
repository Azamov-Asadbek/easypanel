/// <reference types="vite/client" />
/// <reference types="unplugin-fonts/client" />
/// <reference types="vite-plugin-svgr/client" />

import { type SxProps } from '@mui/material/styles'

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '@tanstack/table-core' {
  interface ColumnMeta<TData extends RowData, TValue> {
    getCellContext: (context: CellContext<TData, TValue>) => { sx?: SxProps }
  }
  interface CellContext<TData extends RowData, TValue> {
    dragRef: ConnectDragSource
    dropRef: ConnectDropTarget
    isDragging: boolean
  }
}
