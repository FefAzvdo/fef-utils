import styled from 'styled-components'

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${(props) => (props.isOpen ? 'z-index: 10;' : 'z-index: -10;')};
`

export const StyledModalShadowMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 1;

  background-color: rgba(0, 0, 0, 0.5);

  cursor: pointer;

  ${(props) => (props.isOpen ? 'display: flex;' : 'display: none;')};
`

export const StyledModalInnerContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  max-width: 800px;
  margin: 0 auto;

  background: #fff;
  border: 2px solid #000;

  transition: opacity 0.5s ease-in-out;

  z-index: 3;

  max-height: 500px;

  ${(props) => (props.isOpen ? 'opacity: 1; ' : 'opacity: 0; ')};
  ${(props) => (props.isOpen ? 'visibility: visible;' : 'visibility: hidden;')};
  ${(props) => (props.isOpen ? 'height: auto' : 'height: 0;')}
`

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  font-size: 2em;
  text-shadow: 1px 2px 2px #ccc;
  font-weight: bold;
  padding: 10px 0px;

  ${(props) => (props.isOpen ? 'display: flex;' : 'display: none;')};
`

export const StyledModalBody = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  padding: 20px;
  display: block;
  overflow-y: scroll;

  ${(props) => (props.isOpen ? 'display: block;' : 'display: none;')};
`

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #eee;
  padding: 10px 0px;

  ${(props) => (props.isOpen ? 'display: flex;' : 'display: none;')};
`
