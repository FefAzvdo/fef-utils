import React from 'react'
import { StyledRow } from './styles.js'

export const Row = ({ children, position, justify, style }) => {
  return (
    <StyledRow position={position} justify={justify} style={style}>
      {children}
    </StyledRow>
  )
}
