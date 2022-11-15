import { Container, styled, TextField } from '@mui/material'
import { Colors } from '../../styles'
import { Theme as theme } from '../../styles/theme'

export const CardContainer = styled(Container)`
  border-radius: 16px;
  padding: ${theme.spacing(4)};
  max-width: 880px;
  margin: ${theme.spacing(4)};
  box-shadow: 0px 12px 20px 0px rgba(7, 20, 41, 0.04);
  margin-bottom: 8px;
  background: linear-gradient(129.66deg, rgba(67, 136, 249, 0.064) 0%, rgba(207, 155, 252, 0.016) 58.28%), #fff;
  border: 2px solid ${Colors.BluePrimary}
`
export const FileSelected = styled(TextField)`
  display: flex;
  min-width: 400px !important;
  padding: ${theme.spacing(1)};
  margin: 0 ${theme.spacing(2)} ;
`
export const CardTitle = styled('div')`
  display: flex;
  flex-direction: column;
`

export const CardContentContainer = styled('div')`
display: flex;
justify-content: space-between;
flex-direction: row;
margin: ${theme.spacing(2)};
`
