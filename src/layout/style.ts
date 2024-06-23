import { styled } from '@mui/material/styles'

export const Container = styled('div')`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
`
export const Wrapper = styled('div')`
  width: 100%;
  height: calc(100% - 24px);
  flex-grow: 1;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-top-left-radius: 24px;
  border: ${({ theme }) => `1px solid ${theme.palette.colors['Grayscale-Border']}`};
`
