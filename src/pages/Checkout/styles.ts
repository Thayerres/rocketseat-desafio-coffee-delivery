import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CheckoutContainer = styled.form`
  display: flex;
  position: relative;
  gap: 2rem;
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 2.5rem;
`

export const CheckoutSectionTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  line-height: 130%;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
`

const BaseCard = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

const BaseCardHeader = styled.div`
  display: flex;
  column-gap: 0.5rem;
  margin-bottom: 2rem;

  strong {
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CheckoutCardEntrega = styled(BaseCard)`
  margin-top: 1rem;
`

export const CheckoutCardHeaderEntrega = styled(BaseCardHeader)`
  svg {
    color: ${(props) => props.theme['brand-yellow-dark']};
  }
`

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
    padding: 0.75rem;
    outline: none;
    width: 100%;

    &:focus,
    &:active {
      border: 1px solid ${(props) => props.theme['brand-yellow-dark']};
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
const BaseFormInput = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const CheckoutInput1 = styled(BaseFormInput)`
  width: 12.5rem;
`

export const CheckoutInput2 = styled(BaseFormInput)`
  width: 100%;
`

export const CheckoutInput3 = styled(BaseFormInput)`
  input {
    &:nth-child(1) {
      flex-basis: 12.5rem;
    }
  }
  div {
    display: flex;
    position: relative;
    flex: 1;
    align-items: center;

    input {
      flex: 1;
      position: relative;
      padding-right: 3.875rem;
    }

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      font-style: italic;
      line-height: 130%;
      color: ${(props) => props.theme['base-label']};
      position: absolute;
      right: 0.75rem;
    }
  }
`

export const CheckoutInput4 = styled(BaseFormInput)`
  input {
    &:nth-child(1) {
      flex-basis: 12.5rem;
    }
    &:nth-child(2) {
      flex: 1;
    }
    &:nth-child(3) {
      flex-basis: 5rem;
    }
  }
`

export const CheckoutCardPagamento = styled(BaseCard)`
  margin-top: 0.75rem;
`

export const CheckoutCardHeaderPagamento = styled(BaseCardHeader)`
  svg {
    color: ${(props) => props.theme['brand-purple']};
  }
`

export const ButtonContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-top: 2rem;
`

export const ButtonPagamento = styled(RadioGroup.Item)`
  background: ${(props) => props.theme['base-button']};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 51px;
  gap: 0.75rem;
  padding: 0 1rem;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid transparent;
  color: ${(props) => props.theme['base-text']};

  span {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 0.75rem;
    line-height: 160%;
    inline-size: max-content;
  }

  svg {
    color: ${(props) => props.theme['brand-purple']};
  }

  &[data-state='checked'] {
    border: 1px solid ${(props) => props.theme['brand-purple']};
  }

  &[data-state='unchecked']:hover {
    transition: background 0.2s;
    background: ${(props) => props.theme['base-hover']};
  }
`

export const CoffeeCard = styled(BaseCard)`
  margin-top: 1rem;
  width: 100%;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CoffeeItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 3.125rem;
`

export const CoffeeInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.25rem;

  img {
    height: 64px;
    width: 64px;
  }
`

export const CoffeeActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: 0.5rem;
`

export const CoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }
`

export const CoffeeRemoveList = styled.button`
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid transparent;
  color: ${(props) => props.theme['base-text']};

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  strong {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 0.75rem;
    line-height: 160%;
  }

  svg {
    color: ${(props) => props.theme['brand-purple']};
  }
`

export const CoffeeSeparation = styled.hr`
  border-top: 1px solid ${(props) => props.theme['base-button']};
  margin: 1.5rem 0;
`

export const CoffeeValueCheckout = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;

    strong {
      font-weight: 400;
      font-size: 1rem;
    }

    &:last-child {
      font-weight: 700;

      strong {
        font-weight: 700;
      }
    }
  }

  li + li {
    margin-top: 0.75rem;
  }
`

export const CoffeeFinallyCheckout = styled.button`
  background: ${(props) => props.theme['brand-yellow']};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  text-align: center;
  border-radius: 6px;
  padding: 0.75rem;
  width: 100%;
  border: 0;
  cursor: pointer;
  margin-top: 1.5rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['brand-yellow-dark']};
  }
`
