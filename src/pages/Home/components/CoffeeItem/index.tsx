import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Counter } from '../../../../components/Counter'
import { Coffee, ShoppingCartContext } from '../../../../contexts/ShoppingCart'
import { numberFormat } from '../../../../utils/numberFormat'
import {
  CoffeeListItem,
  CoffeeListItemImg,
  CoffeeListItemTags,
  CoffeeListItemTag,
  CoffeeListItemName,
  CoffeeListItemDescription,
  CoffeeListItemBuy,
  CoffeeListItemPrice,
  CoffeeListItemActions,
  CoffeeListItemCartButton,
} from './styles'

interface CoffeeItemProps {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const { addCartItem } = useContext(ShoppingCartContext)
  const { id, imgUrl, labels, price, subtitle, title } = coffee
  const [counter, setCounter] = useState(1)

  function handleCounterPlus() {
    setCounter((state) => state + 1)
  }

  function handleCounterMinus() {
    setCounter((state) => state - 1)
  }

  function handleAddCartItem() {
    const cart = {
      id,
      imgUrl,
      price,
      title,
      counter,
      totalPrice: 0,
    }
    addCartItem(cart)
  }

  return (
    <CoffeeListItem>
      <CoffeeListItemImg src={`coffeeImg/${imgUrl}`} alt="" />
      <CoffeeListItemTags>
        {labels.map((label) => {
          return <CoffeeListItemTag key={label}>{label}</CoffeeListItemTag>
        })}
      </CoffeeListItemTags>
      <CoffeeListItemName>{title}</CoffeeListItemName>
      <CoffeeListItemDescription>{subtitle}</CoffeeListItemDescription>
      <CoffeeListItemBuy>
        <CoffeeListItemPrice>{numberFormat.format(price)}</CoffeeListItemPrice>
        <CoffeeListItemActions>
          <Counter
            counter={counter}
            onCounterPlus={handleCounterPlus}
            onCounterMinus={handleCounterMinus}
          />
          <CoffeeListItemCartButton onClick={handleAddCartItem}>
            <ShoppingCartSimple size={22} weight="fill" />
          </CoffeeListItemCartButton>
        </CoffeeListItemActions>
      </CoffeeListItemBuy>
    </CoffeeListItem>
  )
}
