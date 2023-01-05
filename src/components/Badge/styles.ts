import styled from 'styled-components'

interface BadgeItemProps {
  bgColor: string
}

export const BadgeItem = styled.div<BadgeItemProps>`
  display: flex;
  align-items: center;

  padding: 0.5rem;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.theme.white};
  margin-right: 0.75rem;
  border-radius: 9999px;
`
