import styled from 'styled-components'

export const CoffeeContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 10rem;
`

export const CoffeeTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  line-height: 130%;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 3.375rem;
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`
