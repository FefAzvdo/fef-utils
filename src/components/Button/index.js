import React, { Fragment } from 'react'
import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 10px;
  margin: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1rem;
  font-weight: bold;

  transition: all 0.5s;
  outline: 0px;

  ${(props) => {
    switch (props.colorSetup) {
      case 'success':
        return 'background: white;color: #5cb85c;border: 2px solid #5cb85c;'
      case 'info':
        return 'background: white;color: #5bc0de;border: 2px solid #5bc0de;'
      case 'warning':
        return 'background: white;color: #f0ad4e;border: 2px solid #f0ad4e;'
      case 'danger':
        return 'background: white;color: #d9534f;border: 2px solid #d9534f;'
    }

    return 'background: white;color: black;border: 2px solid black;'
  }}

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
      switch (props.colorSetup) {
        case 'success':
          return 'background: #5cb85c;color: white;border: 2px solid white;'
        case 'info':
          return 'background: #5bc0de;color: white;border: 2px solid white;'
        case 'warning':
          return 'background: #f0ad4e;color: white;border: 2px solid white;'
        case 'danger':
          return 'background: #d9534f;color: white;border: 2px solid white;'
      }

      return 'background: black;color: white;border: 2px solid white;'
    }}

    cursor:pointer;
  }
`

const ChildrenButton = ({ icon, invertedIcon, children }) => {
  if (!icon) {
    return <div>{children}</div>
  } else {
    if (!invertedIcon) {
      return (
        <Fragment>
          <div style={{ marginRight: '20px' }}>{icon}</div>
          <div>{children}</div>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <div>{children}</div>
          <div style={{ marginLeft: '20px' }}>{icon}</div>
        </Fragment>
      )
    }
  }
}

export const Button = ({
  children,
  styleProps,
  colorSetup,
  onClick,
  icon,
  invertedIcon,
  rounded,
  block
}) => (
  <StyledButton
    style={{ styleProps }}
    colorSetup={colorSetup}
    onClick={onClick}
    rounded={rounded}
    block={block}
  >
    <ChildrenButton
      icon={icon}
      invertedIcon={invertedIcon}
      children={children}
    />
  </StyledButton>
)
