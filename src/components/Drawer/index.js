import React, { useEffect, useState, Fragment } from 'react'
import {
  StyledDrawerShadowMask,
  StyledDrawerBody,
  StyledDrawerHeader
} from './styles'

import { Button } from 'fef-utils'

export const Drawer = ({
  children,
  isOpen,
  title = 'Drawer title',
  onOpen = () => {},
  onClose = () => {},
  onShadowClick = () => {},
  closeBtnText = 'Close'
}) => {
  const [height, setHeight] = useState(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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
  }, [isOpen, isDrawerOpen])

  return (
    <Fragment>
      <StyledDrawerShadowMask
        isOpen={(isOpen = isDrawerOpen)}
        onClick={() => onClose() || setIsDrawerOpen(false)}
      />
      <StyledDrawerBody isOpen={(isOpen = isDrawerOpen)} height={height}>
        <StyledDrawerHeader>
          <div style={{ margin: '10px' }}>{title}</div>
          <div style={{ marginRight: '10px' }}>
            <Button
              onClick={() => onClose() || setIsDrawerOpen(false)}
              rounded
              icon='❌'
              colorSetup={{
                firstColor: '#F03A17',
                secondColor: '#fff'
              }}
            >
              {closeBtnText}
            </Button>
          </div>
        </StyledDrawerHeader>
        <div style={{ padding: '10px' }}>{children}</div>
      </StyledDrawerBody>
    </Fragment>
  )
}
