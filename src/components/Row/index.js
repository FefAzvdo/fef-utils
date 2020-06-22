import React from 'react'
import { StyledRow } from './styles.js'

export const Row = ({ children, position }) => {
  return <StyledRow position={position}>{children}</StyledRow>
}
