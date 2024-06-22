import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Conatiner = styled(Box)`
  .table {
    overflow-x: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    table {
      width: 424px;
    }
    td,
    th,
    table {
      border: 1px solid #dee2e6;
      border-collapse: collapse;
    }
    td,
    th {
      padding: 4px 8px;
      text-align: left;
    }
  }
`
