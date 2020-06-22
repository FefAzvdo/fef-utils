import React from 'react'
import { StyledParagraph } from './styles'

export const Text = ({
  children,
  styleProps,
  colorSetup,
  shouldCapitalizeFirstLetter
}) => (
  <StyledParagraph
    style={styleProps}
    colorSetup={colorSetup}
    shouldCapitalizeFirstLetter={shouldCapitalizeFirstLetter}
  >
    {children}
  </StyledParagraph>
)
