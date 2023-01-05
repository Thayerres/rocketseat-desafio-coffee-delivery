import styled from 'styled-components'
import bgIntroImg from '../../../../assets/background2.svg'

export const MainBgContainer = styled.img`
  position: absolute;
  background: url(${bgIntroImg});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 0;
  background-size: cover;
  filter: blur(160px);
`
export const MainContainer = styled.main`
  position: relative;
`
export const MainSection = styled.section`
  display: flex;
  position: relative;
  gap: 3.5rem;
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 5.875rem;
  margin-bottom: 5.75rem;
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const IntroTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 3rem;
  line-height: 130%;
  font-weight: 800;
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 1rem;
`

export const IntroSubtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 400;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 4.125rem;
`
export const IntroItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(max-content, 1fr));
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`

export const IntroItem = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`
