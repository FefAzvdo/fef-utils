import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  align-items: center;

  width: 100%;
`

export const Row = ({ children, position }) => {
  return <StyledRow position={position}>{children}</StyledRow>
}
