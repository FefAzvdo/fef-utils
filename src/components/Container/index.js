import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2em;
  background: #ccc;
`

export const Container = ({ children, styleProps }) => (
  <StyledContainer style={styleProps}>{children}</StyledContainer>
)
