import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

export const PaperWrapper = styled(Stack)`
  width: 100%;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => `${theme.palette.allColors.GREY30}`};
  --mui-palette-text-primary: ${({ theme }) => `${theme.palette.allColors.GREY20}`};
  text {
    --mui-palette-text-primary: ${({ theme }) => `${theme.palette.allColors.GREY10}`};
  }
`
