import styled, { css } from 'styled-components'

export type buttonsVariant = 'primary' | 'secondary' | 'danger' | 'warning'

interface ButtonsContainerProps {
  variant: buttonsVariant
}

const buttonsVariant = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  warning: 'yellow',
}

export const ButtonContainer = styled.button<ButtonsContainerProps>`
  width: 80px;
  height: 50px;
  border-radius: 8px;
  margin: 10px;
  border: 0;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  /* 
  ${(props) => {
    return css`
      background-color: ${buttonsVariant[props.variant]};
    `
  }} */
`
