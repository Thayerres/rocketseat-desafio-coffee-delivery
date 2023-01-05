import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { ThemeType } from '../../../../@types/styled'
import coffeeDeliveryImg from '../../../../assets/coffee_delivery.png'
import {
  MainBgContainer,
  MainContainer,
  MainSection,
  IntroContainer,
  IntroTitle,
  IntroSubtitle,
  IntroItemContainer,
  IntroItem,
} from './styles'
import { Badge } from '../../../../components/Badge'

export function Intro() {
  const theme = useTheme() as ThemeType
  return (
    <MainContainer>
      <MainBgContainer />
      <MainSection>
        <IntroContainer>
          <IntroTitle>
            Encontre o café perfeito para qualquer hora do dia
          </IntroTitle>
          <IntroSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </IntroSubtitle>
          <IntroItemContainer>
            <IntroItem>
              <Badge bgColor={theme['brand-yellow-dark']}>
                <ShoppingCart size={16} weight="fill" />
              </Badge>
              <span>Compra simples e segura</span>
            </IntroItem>
            <IntroItem>
              <Badge bgColor={theme['base-text']}>
                <Timer size={16} weight="fill" />
              </Badge>
              <span>Embalagem mantém o café intacto</span>
            </IntroItem>
            <IntroItem>
              <Badge bgColor={theme['brand-yellow']}>
                <Package size={16} weight="fill" />
              </Badge>
              <span>Entrega rápida e rastreada</span>
            </IntroItem>
            <IntroItem>
              <Badge bgColor={theme['brand-purple']}>
                <Coffee size={16} weight="fill" />
              </Badge>
              <span>O café chega fresquinho até você</span>
            </IntroItem>
          </IntroItemContainer>
        </IntroContainer>
        <img src={coffeeDeliveryImg} alt="" />
      </MainSection>
    </MainContainer>
  )
}
