import styled from 'styled-components'

export const StyledModalShadowMask = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 1;

  background-color: rgba(0, 0, 0, 0.5);

  cursor: pointer;

  ${(props) => (props.isOpen ? 'display: flex;' : 'display: none;')};
  justify-content: center;
  align-items: center;
`

export const StyledModalInnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  background: #fff;
  border: 2px solid #000;
  transition: opacity 0.5s ease-in-out;

  z-index: 3;

  ${(props) => (props.isOpen ? 'opacity: 1; ' : 'opacity: 0; ')};
  ${(props) => (props.isOpen ? 'visibility: visible;' : 'visibility: hidden;')};
  ${(props) => (props.isOpen ? 'height: auto;' : 'height: 0;')};
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
  padding: 10px 0px;
`

export const StyledModalBody = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
`

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #eee;
  padding: 10px 0px;
`
