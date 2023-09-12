import styled from "styled-components";
import { theme } from "../../theme.ts";
import { Box, Button } from "@mui/material";

export const Form = styled(Box)`
  width: 100%;
  padding: ${theme['spacing-regular']};
  box-shadow: ${theme['shadow-primary']};
  border-radius: ${theme['border-radius-primary']};
  transition: 0.4s;

  & .MuiTextField-root {
    margin-bottom: ${theme ["spacing-small"]};
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const FomItem = styled.div`
  width: 100%;
`

export const CustomButton = styled(Button)`
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;

  & .MuiButtonBase-root {
    cursor: not-allowed !important;
  }

`
