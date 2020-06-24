import React from 'react'
import { StyledRow } from './styles.js'

export const Row = ({ children, position, justify }) => {
  return (
    <StyledRow position={position} justify={justify}>
      {children}
    </StyledRow>
  )
}
