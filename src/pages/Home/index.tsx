import { CoffeeContainer, CoffeeTitle, CoffeeList } from './styles'
import { Intro } from './components/Intro'
import { Header } from '../../components/Header'
import { CoffeeItem } from './components/CoffeeItem'
import { useEffect, useState } from 'react'
import { Coffee } from '../../contexts/ShoppingCart'

const INICIAL_STATE_COFFEE: Coffee[] = [
  {
    id: 1,
    imgUrl: 'expresso.png',
    labels: ['tradicional'],
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    imgUrl: 'americano.png',
    labels: ['tradicional'],
    title: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    imgUrl: 'expresso_cremoso.png',
    labels: ['tradicional'],
    title: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    imgUrl: 'cafe_gelado.png',
    labels: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    imgUrl: 'cafe_gelado.png',
    labels: ['tradicional', 'comleite'],
    title: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    imgUrl: 'latte.png',
    labels: ['tradicional', 'comleite'],
    title: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    imgUrl: 'capuccino.png',
    labels: ['tradicional', 'comleite'],
    title: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    imgUrl: 'macchiato.png',
    labels: ['tradicional', 'comleite'],
    title: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    imgUrl: 'mochaccino.png',
    labels: ['tradicional', 'comleite'],
    title: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 10,
    imgUrl: 'chocolate_quente.png',
    labels: ['tradicional', 'comleite'],
    title: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 11,
    imgUrl: 'cubano.png',
    labels: ['especial', 'alcoolico', 'gelado'],
    title: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 12,
    imgUrl: 'havaiano.png',
    labels: ['especial'],
    title: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    imgUrl: 'arabe.png',
    labels: ['especial'],
    title: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    imgUrl: 'irlandes.png',
    labels: ['especial', 'alcoolico'],
    title: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]

export function Home() {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  useEffect(() => {
    setCoffees(INICIAL_STATE_COFFEE)
  }, [])

  return (
    <>
      <Header />
      <Intro />
      <CoffeeContainer>
        <CoffeeTitle>Nosso cafés</CoffeeTitle>
        <CoffeeList>
          {coffees &&
            coffees.map((coffee) => {
              return <CoffeeItem key={coffee.id} coffee={coffee} />
            })}
        </CoffeeList>
      </CoffeeContainer>
    </>
  )
}
