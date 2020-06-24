import styled from 'styled-components'

export const StyledTitle = styled.h1`
  font-size: 2.5em;
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
