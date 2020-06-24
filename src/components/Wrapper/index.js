import React from 'react'
import { StyledWrapper } from './styles'

export const Wrapper = ({ children, style }) => (
  <StyledWrapper style={style}>{children}</StyledWrapper>
)
