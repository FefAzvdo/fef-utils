import styled from 'styled-components'

export const StyledDrawerBody = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  width: 600px;
  height: ${(props) => props.height};
  min-height: 790px;
  background-color: #f9f9f8;
  top: 0;
  right: 0;
  transition: all 0.5s;
  overflow-x: hidden;
  border-left: 2px solid black;
  z-index: 3;

  ${(props) =>
    props.isOpen
      ? 'margin-right: 0px;position: absolute;'
      : 'margin-right: -602px; position: fixed;'};
`

export const StyledDrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  background: #aaa;
  font-size: 2em;
  border-bottom: 1px solid black;
`

export const StyledDrawerShadowMask = styled.div`
  position: fixed;
  width: 100%
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;

  ${(props) => (props.isOpen ? 'display: block;' : 'display: none;')};
`