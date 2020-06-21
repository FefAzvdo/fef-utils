import React from 'react'
import styled from 'styled-components'

const StyledCol = styled.div`
  display: flex;
  align-items: center;

  ${(props) => {
    if (props.bgColor) {
      return `background-color: ${props.bgColor}`
    } else return 'none'
  }};

  ${(props) => {
    if (props.justify) {
      return `justify-content: ${props.justify}`
    } else return `justify-content: center`
  }};

  ${(props) => {
    if (props.size) {
      return `width: ${props.size}`
    } else return `width: 100%`
  }};
`

export const Col = ({ children, size, justify, bgColor }) => {
  return (
    <StyledCol size={size} justify={justify} bgColor={bgColor}>
      {children}
    </StyledCol>
  )
}
