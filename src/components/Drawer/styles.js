import styled from 'styled-components'

export const StyledDrawerShadowMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 1;

  background-color: rgba(0, 0, 0, 0.5);

  cursor: pointer;

  transition: opacity 0.5s;

  ${(props) => (props.isOpen ? 'opacity: 1; ' : 'opacity: 0; ')};
  ${(props) => (props.isOpen ? 'visibility: visible;' : 'visibility: hidden;')};
`

export const StyledDrawerBody = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  width: 600px;
  height: ${(props) => props.height};
  min-height: 790px;

  background-color: #f9f9f8;

  position: absolute;
  top: 0;
  right: 0;

  transition: margin-right 0.5s;

  overflow: auto;

  border-left: 2px solid black;
  z-index: 2;

  ${(props) =>
    props.isOpen
      ? 'margin-right: 0px;position: absolute;'
      : 'margin-right: -602px; position: fixed;'};

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const StyledDrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #eee;
  font-size: 2em;
  text-shadow: 1px 2px 2px #ccc;
  font-weight: bold;
`
