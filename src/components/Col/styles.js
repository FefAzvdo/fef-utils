import styled from 'styled-components'
import { device } from '../../utils/device'

export const StyledCol = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

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

  @media (max-width: 450px) {
    flex-direction: column;
    width: 100%;
  }
`
