import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Counter } from '../../components/Counter'
import { Header } from '../../components/Header'
import { Cart, ShoppingCartContext } from '../../contexts/ShoppingCart'
import { numberFormat } from '../../utils/numberFormat'
import {
  ButtonContainer,
  ButtonPagamento,
  CheckoutCardEntrega,
  CheckoutCardHeaderEntrega,
  CheckoutCardHeaderPagamento,
  CheckoutCardPagamento,
  CheckoutContainer,
  CheckoutSectionTitle,
  CoffeeContainer,
  CoffeeCard,
  CoffeeDescription,
  CoffeeInfo,
  CoffeeItem,
  CoffeeSeparation,
  CoffeeValueCheckout,
  CoffeeFinallyCheckout,
  CoffeeRemoveList,
  CoffeeActions,
  CheckoutFormContainer,
  CheckoutInput1,
  CheckoutInput2,
  CheckoutInput3,
  CheckoutInput4,
} from './styles'
import { useNavigate } from 'react-router-dom'

const newCheckoutFormSchema = z.object({
  cep: z.number(),
  rua: z.string(),
  numero: z.number(),
  complemento: z.string().optional(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string(),
  pagamento: z.enum(['Cartão de Credito', 'Cartão de Débito', 'Dinheiro']),
})

type newCheckoutFormInputs = z.infer<typeof newCheckoutFormSchema>

export function Checkout() {
  const navigate = useNavigate()

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<newCheckoutFormInputs>({
    resolver: zodResolver(newCheckoutFormSchema),
  })
  const { cart, addCartItem, removeCartItem, saveCheckoutInput } =
    useContext(ShoppingCartContext)

  const priceItens = cart.reduce((acc, current) => {
    return acc + current.totalPrice
  }, 0)
  const priceDelivery = 3.5

  const priceTotal = priceItens + priceDelivery

  function handleCounterPlus(coffee: Cart) {
    coffee.counter++
    addCartItem(coffee)
  }

  function handleCounterMinus(coffee: Cart) {
    coffee.counter--
    addCartItem(coffee)
  }

  function handleRemoveCartItem(id: number) {
    removeCartItem(id)
  }

  function handleCreateNewTransaction(data: newCheckoutFormInputs) {
    const { bairro, cep, cidade, numero, pagamento, rua, uf, complemento } =
      data

    saveCheckoutInput({
      bairro,
      cep,
      cidade,
      numero,
      pagamento,
      rua,
      uf,
      complemento,
    })
    reset()
    navigate('/success')
  }

  return (
    <>
      <Header />
      <CheckoutContainer onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <section>
          <CheckoutSectionTitle>Complete seu pedido</CheckoutSectionTitle>
          <CheckoutCardEntrega>
            <CheckoutCardHeaderEntrega>
              <MapPinLine size={22} />
              <div>
                <strong>Endereço de Entrega</strong>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CheckoutCardHeaderEntrega>
            <CheckoutFormContainer>
              <CheckoutInput1>
                <input
                  type="text"
                  placeholder="CEP"
                  {...register('cep', { valueAsNumber: true })}
                />
              </CheckoutInput1>
              <CheckoutInput2>
                <input type="text" placeholder="Rua" {...register('rua')} />
              </CheckoutInput2>
              <CheckoutInput3>
                <input
                  type="text"
                  placeholder="Número"
                  {...register('numero', { valueAsNumber: true })}
                />
                <div>
                  <input
                    type="text"
                    placeholder="Complemento"
                    {...register('complemento')}
                  />
                  <span>Opcional</span>
                </div>
              </CheckoutInput3>
              <CheckoutInput4>
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register('bairro')}
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  {...register('cidade')}
                />
                <input type="text" placeholder="UF" {...register('uf')} />
              </CheckoutInput4>
            </CheckoutFormContainer>
          </CheckoutCardEntrega>
          <CheckoutCardPagamento>
            <CheckoutCardHeaderPagamento>
              <CurrencyDollar size={22} />
              <div>
                <strong>Pagamento</strong>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </CheckoutCardHeaderPagamento>
            <Controller
              control={control}
              name="pagamento"
              render={({ field }) => {
                return (
                  <ButtonContainer
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <ButtonPagamento value="Cartão de Credito">
                      <CreditCard size={22} />
                      <span>Cartão de Credito</span>
                    </ButtonPagamento>
                    <ButtonPagamento value="Cartão de Débito">
                      <Bank size={22} />
                      <span>Cartão de Débito</span>
                    </ButtonPagamento>
                    <ButtonPagamento value="Dinheiro">
                      <Money size={22} />
                      <span>Dinheiro</span>
                    </ButtonPagamento>
                  </ButtonContainer>
                )
              }}
            ></Controller>
          </CheckoutCardPagamento>
        </section>
        <section>
          <CheckoutSectionTitle>Cafés selecionados</CheckoutSectionTitle>

          <CoffeeCard>
            {cart &&
              cart.map((coffee) => {
                return (
                  <CoffeeContainer key={coffee.id}>
                    <CoffeeItem>
                      <CoffeeInfo>
                        <img src={`coffeeImg/${coffee.imgUrl}`} alt="" />
                        <CoffeeDescription>
                          <h1>{coffee.title}</h1>
                          <CoffeeActions>
                            <Counter
                              counter={coffee.counter}
                              onCounterPlus={() => handleCounterPlus(coffee)}
                              onCounterMinus={() => handleCounterMinus(coffee)}
                            />
                            <CoffeeRemoveList
                              onClick={() => handleRemoveCartItem(coffee.id)}
                            >
                              <Trash size={16} />
                              <strong>Remover</strong>
                            </CoffeeRemoveList>
                          </CoffeeActions>
                        </CoffeeDescription>
                      </CoffeeInfo>
                      <strong>{numberFormat.format(coffee.totalPrice)}</strong>
                    </CoffeeItem>

                    <CoffeeSeparation />
                  </CoffeeContainer>
                )
              })}
            <CoffeeValueCheckout>
              <li>
                <span>Total de Itens</span>
                <strong>{numberFormat.format(priceItens)}</strong>
              </li>
              <li>
                <span>Entrega</span>
                <strong>{numberFormat.format(priceDelivery)}</strong>
              </li>
              <li>
                <span>Total</span>
                <strong>{numberFormat.format(priceTotal)}</strong>
              </li>
            </CoffeeValueCheckout>
            <CoffeeFinallyCheckout disabled={isSubmitting} type="submit">
              confirmar pedido
            </CoffeeFinallyCheckout>
          </CoffeeCard>
        </section>
      </CheckoutContainer>
    </>
  )
}
