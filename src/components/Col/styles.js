import styled from 'styled-components'

export const StyledCol = styled.div`
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
