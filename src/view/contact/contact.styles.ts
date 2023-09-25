import styled from "styled-components";
import { theme } from "../../theme.ts";
import LoadingButton from '@mui/lab/LoadingButton';

export const Form = styled.form`
  padding: ${theme['spacing-regular']};
  box-shadow: ${theme['shadow-primary']};
  border-radius: ${theme['border-radius-primary']};
  transition: 0.4s;
`

export const CustomButton = styled(LoadingButton)`
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;
`

export const InfoContactBox = styled.div`
  margin-bottom: ${theme["spacing-small"]};
`

export const InfoContactBoxFlex = styled.div`
  display: flex;
  margin-bottom: ${theme["spacing-extra-small"]};
`

export const InfoTitle = styled.span`
  font-weight: 600;
`
