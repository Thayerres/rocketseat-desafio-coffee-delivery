import { ReactNode } from 'react'
import { BadgeItem } from './styles'

interface BadgeProps {
  bgColor: string
  children: ReactNode
}

export function Badge({ bgColor, children }: BadgeProps) {
  return <BadgeItem bgColor={bgColor}>{children}</BadgeItem>
}
