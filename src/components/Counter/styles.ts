import styled from 'styled-components'

export const CoffeeListItemCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
`

export const CoffeeListItemCounterButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 0;
  background: transparent;
  color: ${(props) => props.theme['brand-purple']};

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transition: color 0.2s;
    color: ${(props) => props.theme['brand-purple-dark']};
  }
`

export const CoffeeListItemCounterNumber = styled.span`
  font-size: 1rem;
  line-height: 130%;
  font-weight: 400;
  color: ${(props) => props.theme['base-title']};
`
