import React from 'react'
import { StyledCol } from './styles'

export const Col = ({ children, size, justify, bgColor, style }) => {
  return (
    <StyledCol size={size} justify={justify} bgColor={bgColor} style={style}>
      {children}
    </StyledCol>
  )
}
