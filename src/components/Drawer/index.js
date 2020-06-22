import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledDrawerBody = styled.div`
  width: 600px;
  min-height: ${(props) => props.minHeight};
  background-color: #f9f9f8;
  top: 0;
  right: 0;
  transition: all 0.5s;
  overflow-x: hidden;
  border-left: 2px solid black;

  ${(props) =>
    props.isOpen
      ? 'margin-right: 0px;position: absolute;'
      : 'margin-right: -602px; position: fixed;'};
`

const StyledDrawerHeader = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  background: #aaa;
  font-size: 2em;
  border-bottom: 1px solid black;
`

export const Drawer = ({
  children,
  isOpen,
  title = 'Drawer title',
  onOpen = () => {},
  onClose = () => {}
}) => {
  useEffect(() => {
    const height = window.document.body.offsetHeight + 'px'

    setHeight(height)
  })

  useEffect(() => {
    if (!isOpen) {
      return () => onOpen()
    } else return () => onClose()
  }, [isOpen])

  const [height, setHeight] = useState(0)

  return (
    <StyledDrawerBody isOpen={isOpen} minHeight={height}>
      <StyledDrawerHeader>{title}</StyledDrawerHeader>
      <div style={{ padding: '10px' }}>{children}</div>
    </StyledDrawerBody>
  )
}
