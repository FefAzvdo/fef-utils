import React from 'react'
import { StyledCol } from './styles'

export const Col = ({
  children,
  size,
  justify,
  bgColor,
  style,
  breakpoint
}) => {
  return (
    <StyledCol
      size={size}
      justify={justify}
      bgColor={bgColor}
      style={style}
      breakpoint={breakpoint}
    >
      {children}
    </StyledCol>
  )
}
