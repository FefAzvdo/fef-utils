import React, { useState, useEffect } from 'react'
import {
  ModalWrapper,
  StyledModalInnerContent,
  StyledModalShadowMask,
  StyledModalHeader,
  StyledModalBody,
  StyledModalFooter
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
    <ModalWrapper isOpen={(isOpen = isModalOpen)}>
      <StyledModalShadowMask
        isOpen={(isOpen = isModalOpen)}
        onClick={() => onClose() || setIsModalOpen(false)}
      />
      <StyledModalInnerContent isOpen={(isOpen = isModalOpen)}>
        <StyledModalHeader isOpen={(isOpen = isModalOpen)}>
          <div style={{ marginLeft: '10px' }}>{title}</div>
        </StyledModalHeader>
        <StyledModalBody isOpen={(isOpen = isModalOpen)}>
          {children}
        </StyledModalBody>
        <StyledModalFooter isOpen={(isOpen = isModalOpen)}>
          <Button
            onClick={() => onOk()}
            rounded
            icon='✅'
            colorSetup={{ firstColor: '#5cb85c', secondColor: 'white' }}
          >
            {onOkBtnText}
          </Button>
          <Button
            onClick={() => onClose() || setIsModalOpen(false)}
            rounded
            icon='❌'
            colorSetup={{ firstColor: '#fe7773', secondColor: 'white' }}
          >
            {closeBtnText}
          </Button>
        </StyledModalFooter>
      </StyledModalInnerContent>
    </ModalWrapper>
  )
}
