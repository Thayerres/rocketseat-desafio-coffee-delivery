import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  justify-content: space-between;
  align-items: center;
`

export const HeaderActionsContainer = styled.nav`
  display: flex;
  gap: 0.75rem;
`

const BaseButtonHeader = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  border-radius: 6px;
  border: 0;
`

export const HeaderButtonLocation = styled(BaseButtonHeader)`
  background-color: ${(props) => props.theme['brand-purple-light']};
  color: ${(props) => props.theme['brand-purple-dark']};

  svg {
    margin-right: 0.25rem;
  }
`

export const HeaderButtonCart = styled(BaseButtonHeader)`
  background-color: ${(props) => props.theme['brand-yellow-light']};
  color: ${(props) => props.theme['brand-yellow-dark']};
  cursor: pointer;
`

export const HeaderCartBadge = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  top: -8px;
  right: calc(1.25rem / -2);
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['brand-yellow-dark']};
  border-radius: 9999px;
`
