import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1rem;
  font-weight: bold;

  transition: all 0.5s;
  outline: 0px;

  ${(props) => {
    if (props.colorSetup && !props.disabled) {
      return `background: ${props.colorSetup.secondColor};color: ${props.colorSetup.firstColor};border: 2px solid ${props.colorSetup.firstColor};`
    } else return 'background: white;color: black;border: 2px solid black;'
  }};

  ${(props) => {
    if (props.rounded) {
      return 'border-radius: 25px;'
    }
  }}

  ${(props) => {
    if (props.block) {
      return 'width: 100%;'
    }
  }}

 &:hover {
    ${(props) => {
      if (props.colorSetup && !props.disabled) {
        return `background: ${props.colorSetup.firstColor};color: ${props.colorSetup.secondColor};border: 2px solid ${props.colorSetup.secondColor}; cursor: pointer`
      } else if (!props.disabled)
        return `background: black;color: white;border: 2px solid white; cursor: pointer`
    }}
  }

  ${(props) => {
    if (props.disabled) {
      return 'background: rgba(0, 0, 0, 0.3);color: #ccc;border: 2px dashed #f9f9f9;cursor:not-allowed;'
    }
  }}

  &:hover {
    ${(props) => {
      if (props.disabled) {
        return `cursor: disabled`
      }
    }}
  }
`
