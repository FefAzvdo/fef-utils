import styled from 'styled-components'

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  align-items: center;

  width: 100%;

  ${(props) => {
    if (props.justify) {
      return `justify-content: ${props.justify}`
    } else return `justify-content: center`
  }};
`
