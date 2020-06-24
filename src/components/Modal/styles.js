import styled from 'styled-components'

export const StyledModalInnerContent = styled.div`
  width: 500px;
  height: 300px;
  background: #fff;
  border: 2px solid #000;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;

  ${(props) => (props.isOpen ? 'opacity: 1; ' : 'opacity: 0; ')};
`

export const StyledModalShadowMask = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  ${(props) => (props.isOpen ? 'display: flex;' : 'display: none;')};
`

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #eee;
  font-size: 2em;
  text-shadow: 1px 2px 2px #ccc;
  font-weight: bold;
`

export const StyledModalBody = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background: #eee;
  position: relative;
  left: 0;
  bottom: 0;
`

/**
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
  overflow: auto;
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
  align-items: center;
  padding: 10px;
  width: 100%;
  background: #eee;
  font-size: 2em;
  text-shadow: 1px 2px 2px #ccc;
  font-weight: bold;
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
 */
