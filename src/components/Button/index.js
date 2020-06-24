import React, { Fragment } from 'react'
import { StyledButton } from './styles'

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
  colorSetup,
  onClick,
  disabled,
  icon,
  invertedIcon,
  rounded,
  block,
  style
}) => (
  <StyledButton
    style={style}
    colorSetup={colorSetup}
    onClick={() => {
      if (!disabled && onClick) {
        return onClick()
      }
    }}
    rounded={rounded}
    block={block}
    disabled={disabled}
  >
    <ChildrenButton
      icon={icon}
      invertedIcon={invertedIcon}
      children={children}
    />
  </StyledButton>
)
