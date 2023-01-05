import styled from 'styled-components'

export const CoffeeListItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;
`

export const CoffeeListItemImg = styled.img`
  margin-top: -20px;
  width: 7.5rem;
  height: 7.5rem;
`

export const CoffeeListItemTags = styled.div`
  display: flex;
  margin-top: 0.75rem;
  margin: 1.25rem;
  gap: 0.25rem;
`

export const CoffeeListItemTag = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  line-height: 130%;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme['brand-yellow-light']};
  color: ${(props) => props.theme['brand-yellow-dark']};
  border-radius: 9999px;
  text-transform: uppercase;
`

export const CoffeeListItemName = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 0.5rem;
`

export const CoffeeListItemDescription = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  margin-bottom: 2rem;
  text-align: center;
  color: ${(props) => props.theme['base-label']};
`

export const CoffeeListItemBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const CoffeeListItemPrice = styled.span`
  font-size: 1.5rem;
  line-height: 130%;
  font-weight: 700;
  color: ${(props) => props.theme['base-text']};
`

export const CoffeeListItemActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: 0.5rem;
`

export const CoffeeListItemCartButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 0;
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  background: ${(props) => props.theme['brand-purple-dark']};
  &:hover {
    transition: background 0.2s;
    background: ${(props) => props.theme['brand-purple']};
  }
`
