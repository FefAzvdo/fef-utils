import React from 'react'
import { StyledCol } from './styles'

export const Col = ({ children, size, justify, bgColor }) => {
  return (
    <StyledCol size={size} justify={justify} bgColor={bgColor}>
      {children}
    </StyledCol>
  )
}
