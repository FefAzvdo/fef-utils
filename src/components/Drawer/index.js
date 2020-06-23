import React, { useEffect, useState, Fragment } from 'react'
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
      return () => {
        onOpen()
        setIsDrawerOpen(true)
      }
    } else
      return () => {
        onClose()
        setIsDrawerOpen(false)
      }
  }, [isOpen])

  const handleOpenState = () => {
    if (!isOpen) {
      setIsDrawerOpen(true)
    } else onClose()
    setIsDrawerOpen(false)
  }

  const [height, setHeight] = useState(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <Fragment>
      <StyledDrawerShadowMask
        isOpen={(isOpen = isDrawerOpen)}
        onClick={handleOpenState}
      />
      <StyledDrawerBody isOpen={isOpen} height={height}>
        <StyledDrawerHeader>{title}</StyledDrawerHeader>
        <div style={{ padding: '10px' }}>{children}</div>
      </StyledDrawerBody>
    </Fragment>
  )
}
