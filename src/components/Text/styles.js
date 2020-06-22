import styled from 'styled-components'

export const StyledParagraph = styled.p`
  font-size: 1.2em;
  line-height: 2.3em;
  color: black;

  &::first-letter {
    ${(props) => {
      if (props.shouldCapitalizeFirstLetter) {
        return 'font-size: 6rem; text-shadow: 1px 3px 1px black;text-transform: uppercase'
      }
    }}
  }

  &::first-letter {
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
    }}
  }
`
