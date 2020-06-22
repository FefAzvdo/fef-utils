import React, { useEffect, useState, Fragment } from 'react'
import { Row, Col, Button } from 'fef-utils'
import {
  StyledDrawerShadowMask,
  StyledDrawerBody,
  StyledDrawerHeader
} from './styles'

export const Drawer = ({
  children,
  isOpen,
  title = 'Drawer title',
  onOpen = () => {},
  onClose = () => {}
}) => {
  useEffect(() => {
    const iH = window.innerHeight
    const oH = window.document.body.offsetHeight

    if (iH > oH) {
      const h = iH + 'px'
      setHeight(h)
    } else {
      const h = oH + 'px'
      setHeight(h)
    }
  })

  useEffect(() => {
    if (!isOpen) {
      return () => onOpen()
    } else return () => onClose()
  }, [isOpen])

  const [height, setHeight] = useState(0)

  return (
    <Fragment>
      <StyledDrawerShadowMask isOpen={isOpen} />
      <StyledDrawerBody isOpen={isOpen} height={height}>
        <StyledDrawerHeader>{title}</StyledDrawerHeader>
        <div style={{ padding: '10px' }}>{children}</div>
      </StyledDrawerBody>
    </Fragment>
  )
}
