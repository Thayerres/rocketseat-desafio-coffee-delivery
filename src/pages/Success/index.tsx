import { Header } from '../../components/Header'
import { useTheme } from 'styled-components'
import { ThemeType } from '../../@types/styled'
import illustrationSvg from '../../assets/illustration.svg'
import {
  SuccessContainer,
  SuccessPersonalContainer,
  SuccessPersonalData,
  SuccessPersonalInfo,
} from './styles'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCart'
import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'
import { Badge } from '../../components/Badge'

export function Success() {
  const theme = useTheme() as ThemeType
  const { checkout } = useContext(ShoppingCartContext)
  return (
    <>
      <Header />
      <SuccessContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <SuccessPersonalContainer>
          <SuccessPersonalData>
            <SuccessPersonalInfo>
              <Badge bgColor={theme['brand-purple']}>
                <MapPin size={16} weight="fill" />
              </Badge>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {checkout.rua}, {checkout.numero}{' '}
                  </strong>
                </p>
                <p>
                  {checkout.bairro} - {checkout.cidade}, {checkout.uf}
                </p>
              </div>
            </SuccessPersonalInfo>
            <SuccessPersonalInfo>
              <Badge bgColor={theme['brand-yellow']}>
                <Timer size={16} weight="fill" />
              </Badge>
              <div>
                <p>Previsão de Entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </SuccessPersonalInfo>
            <SuccessPersonalInfo>
              <Badge bgColor={theme['brand-yellow-dark']}>
                <CurrencyDollarSimple size={16} weight="regular" />
              </Badge>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{checkout.pagamento}</strong>
              </div>
            </SuccessPersonalInfo>
          </SuccessPersonalData>
          <img src={illustrationSvg} alt="" />
        </SuccessPersonalContainer>
      </SuccessContainer>
    </>
  )
}
