import { ButtonContainer, buttonsVariant } from './Button.styles'

interface ButtonsProps {
  variant?: buttonsVariant
}

export function Button({ variant = 'primary' }: ButtonsProps) {
  return (
    <>
      <ButtonContainer variant={variant}>Enviar</ButtonContainer>
    </>
  )
}
