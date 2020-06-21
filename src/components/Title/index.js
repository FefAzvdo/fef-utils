import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 3.5em;
  text-shadow: 1px 3px 1px black;

  ${(props) => {
    switch (props.colorSetup) {
      case 'success':
        return 'color: #5cb85c'
      case 'info':
        return 'color: #5bc0de'
      case 'warning':
        return 'color: #f0ad4e'
      case 'danger':
        return 'color: #d9534f'
    }

    return 'color: black'
  }}
`

export const Title = ({ children, styleProps, colorSetup }) => (
  <StyledTitle style={styleProps} colorSetup={colorSetup}>
    {children}
  </StyledTitle>
)
