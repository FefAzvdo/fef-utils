import React from 'react'
import { StyledWrapper } from './styles'

export const Wrapper = ({ children, styleProps }) => (
  <StyledWrapper style={styleProps}>{children}</StyledWrapper>
)
