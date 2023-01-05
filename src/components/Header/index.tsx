import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  HeaderContainer,
  HeaderActionsContainer,
  HeaderButtonLocation,
  HeaderButtonCart,
  HeaderCartBadge,
} from './styles'
import logoHeader from '../../assets/logo.svg'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCart'
import { Link } from 'react-router-dom'

export function Header() {
  const { cart } = useContext(ShoppingCartContext)

  const cartAmount = cart.reduce((acc, current) => {
    return acc + current.counter
  }, 0)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoHeader} alt="Coffee Delivery" />
      </Link>
      <HeaderActionsContainer>
        <HeaderButtonLocation>
          <MapPin size={22} weight="fill" />
          Rio de Janeiro, RJ
        </HeaderButtonLocation>
        <Link to="/checkout">
          <HeaderButtonCart>
            <ShoppingCart size={22} weight="fill" />
            {cart?.length > 0 && (
              <HeaderCartBadge>{cartAmount}</HeaderCartBadge>
            )}
          </HeaderButtonCart>
        </Link>
      </HeaderActionsContainer>
    </HeaderContainer>
  )
}
