import styled from 'styled-components'

export const StyledNavbarWraper = styled.div`
  width: 100%;
  background: #44c199;
  min-height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  .styled_ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-inline-start: 0;
  }

  transition: margin-left 0.5s;

  ${(props) =>
    props.showMenuMobile ? 'margin-left: 0; ' : 'margin-left: -100%; '};

  @media (max-width: ${(props) => `${props.mobileBreakpoint}px`}) {
    .brand {
      display: none;
    }

    .styled_ul {
      width: 100%;
    }
  }
`

export const StyledNavbarItem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .mainWrapper {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .menuItem,
  .subMenuItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    padding: 5px;
  }

  .menuItemWrapper:hover > ul.subMenu {
    width: max-content;
    min-width: 100%;
    height: auto;
    opacity: 1;
    visibility: visible;
  }

  .menuIcon,
  .subItemIcon {
    padding-right: 15px;
  }

  .subMenu {
    list-style: none;

    height: 0;
    opacity: 0;
    visibility: hidden;

    transition: opacity 0.5s;

    position: absolute;
    top: 23px;

    background: #44c199;

    width: max-content;
    min-width: 100%;

    padding-inline-start: 0px;
    padding-top: 24px;

    border-radius: 5px;
  }

  @media (max-width: ${(props) => `${props.mobileBreakpoint}px`}) {
    .subMenu {
      position: static;
      flex-direction: column;
      padding-top: 10px;
    }

    .subMenuItem {
      border-bottom: 1px solid black;
      padding: 8px;
      margin: 0px;
    }

    .subMenuItem:first-child {
      border-top: 1px solid black;
    }

    display: list-item;
    width: 100%;

    .menuItemWrapper:hover > ul.subMenu {
      width: auto;
    }
  }

  .subMenu:hover {
    width: max-content;
    min-width: 100%;
    height: auto;
    opacity: 1;
    visibility: visible;
  }

  .subMenuItem:hover {
    transition: background-color 1s;
    background-color: #44c100a1;
  }
`
