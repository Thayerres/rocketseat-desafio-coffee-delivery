import { createContext, ReactNode, useState } from 'react'

export interface Coffee {
  id: number
  imgUrl: string
  labels: string[]
  title: string
  subtitle: string
  price: number
}

export interface Cart {
  id: number
  imgUrl: string
  price: number
  title: string
  counter: number
  totalPrice: number
}

interface CheckoutForm {
  complemento?: string | undefined
  cep: number
  rua: string
  numero: number
  bairro: string
  cidade: string
  uf: string
  pagamento: 'Cartão de Credito' | 'Cartão de Débito' | 'Dinheiro'
}

interface ShoppingCartContextType {
  cart: Cart[]
  checkout: CheckoutForm
  addCartItem: (dados: Cart) => void
  removeCartItem: (id: number) => void
  saveCheckoutInput: (dados: CheckoutForm) => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

interface ShoppingCartProviderProps {
  children: ReactNode
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cart, setCart] = useState<Cart[]>([])
  const [checkout, setCheckout] = useState<CheckoutForm>({} as CheckoutForm)

  function addCartItem(dados: Cart) {
    const newCart = cart

    const CoffeeExistInCart = newCart.findIndex(
      (coffee) => coffee.id === dados.id,
    )

    if (CoffeeExistInCart >= 0) {
      const coffee = newCart[CoffeeExistInCart]
      coffee.totalPrice = dados.price * dados.counter
      coffee.counter = dados.counter
    } else {
      dados.totalPrice = dados.price * dados.counter
      newCart.push(dados)
    }

    setCart([...newCart])
  }

  function removeCartItem(id: number) {
    setCart((state) => state.filter((coffee) => coffee.id !== id))
  }

  function saveCheckoutInput(dados: CheckoutForm) {
    setCheckout(dados)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        checkout,
        addCartItem,
        removeCartItem,
        saveCheckoutInput,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
