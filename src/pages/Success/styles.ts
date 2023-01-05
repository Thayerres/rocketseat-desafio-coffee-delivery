import styled from 'styled-components'

export const SuccessContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 5rem;

  h1 {
    font-family: 'Baloo2', cursive;
    font-weight: 900;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['brand-yellow-dark']};
    margin-bottom: 0.25rem;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 2.5rem;
  }
`

export const SuccessPersonalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.375rem;
`

export const SuccessPersonalData = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
  padding: 2.5rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  background: ${({ theme }) => theme['base-background']};

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-top-left-radius: 7px;
    border-top-right-radius: 37px;
    border-bottom-left-radius: 37px;
    border-bottom-right-radius: 7px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    z-index: -1;
  }
`
export const SuccessPersonalInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['base-text']};
`
