import { Minus, Plus } from 'phosphor-react'
import {
  CoffeeListItemCounter,
  CoffeeListItemCounterButton,
  CoffeeListItemCounterNumber,
} from './styles'

interface CounterProps {
  counter: number
  onCounterMinus: () => void
  onCounterPlus: () => void
}
export function Counter({
  counter,
  onCounterMinus,
  onCounterPlus,
}: CounterProps) {
  return (
    <CoffeeListItemCounter>
      <CoffeeListItemCounterButton
        disabled={counter === 1}
        onClick={onCounterMinus}
      >
        <Minus size={14} weight="bold" />
      </CoffeeListItemCounterButton>
      <CoffeeListItemCounterNumber>{counter}</CoffeeListItemCounterNumber>
      <CoffeeListItemCounterButton onClick={onCounterPlus}>
        <Plus size={14} weight="bold" />
      </CoffeeListItemCounterButton>
    </CoffeeListItemCounter>
  )
}
