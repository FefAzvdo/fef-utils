import React, { useState, useEffect, Fragment } from 'react'
import {
  StyledModalInnerContent,
  StyledModalShadowMask,
  StyledModalHeader,
  StyledModalBody,
  StyledModalFooter,
  StyledModalPositioner
} from './styles'

import { Button } from 'fef-utils'

export const Modal = ({
  isOpen,
  children,
  onClose = () => {},
  onOpen = () => {},
  onOk = () => {},
  title = 'Modal title',
  closeBtnText = 'Close',
  onOkBtnText = 'OK'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      return () => {
        onOpen()
        setIsModalOpen(true)
      }
    } else {
      return () => {
        onClose()
        setIsModalOpen(false)
      }
    }
  }, [isOpen, isModalOpen])

  return (
    <Fragment>
      <StyledModalShadowMask
        isOpen={(isOpen = isModalOpen)}
        onClick={() => onClose() || setIsModalOpen(false)}
      />
      <StyledModalPositioner isOpen={(isOpen = isModalOpen)}>
        <StyledModalInnerContent isOpen={(isOpen = isModalOpen)}>
          <StyledModalHeader>
            <div style={{ marginLeft: '10px' }}>{title}</div>
          </StyledModalHeader>
          <StyledModalBody>{children}</StyledModalBody>
          <StyledModalFooter>
            <div>
              <Button
                onClick={() => onOk()}
                rounded
                icon='✅'
                colorSetup={{ firstColor: '#5cb85c', secondColor: 'white' }}
              >
                {onOkBtnText}
              </Button>
            </div>
            <div>
              <Button
                onClick={() => onClose() || setIsModalOpen(false)}
                rounded
                icon='❌'
                colorSetup={{ firstColor: '#fe7773', secondColor: 'white' }}
              >
                {closeBtnText}
              </Button>
            </div>
          </StyledModalFooter>
        </StyledModalInnerContent>
      </StyledModalPositioner>
    </Fragment>
  )
}
