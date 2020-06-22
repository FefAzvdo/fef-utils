import React from 'react'
import { StyledTitle } from './styles'

export const Title = ({ children, styleProps, colorSetup }) => (
  <StyledTitle style={styleProps} colorSetup={colorSetup}>
    {children}
  </StyledTitle>
)
