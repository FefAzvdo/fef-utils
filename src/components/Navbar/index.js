import React from 'react'
import styled from 'styled-components'

const titleLogo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ITunes_12.2_logo.png/600px-ITunes_12.2_logo.png'

const StyledNavbarWraper = styled.div`
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

  @media (max-width: 780px) {
    .brand {
      display: none;
    }

    .styled_ul {
      width: 100%;
    }
  }
`

const StyledNavbarItem = styled.li`
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
    cursor: pointer;
    padding: 5px;
  }

  .menuItemWrapper:hover > ul.subMenu {
    width: max-content;
    min-width: 100%;
    height: auto;
    width: auto;
    opacity: 1;
    visibility: visible;
  }

  .menuIcon,
  .subItemIcon {
    padding-right: 15px;
  }

  .subMenu {
    list-style: none;

    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;

    transition: opacity 0.5s;

    position: absolute;
    top: 23px;

    background: #44c199;
    padding-inline-start: 0px;
    padding-top: 24px;
  }

  @media (max-width: 780px) {
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
  }

  .subMenu:hover {
    width: max-content;
    min-width: 100%;
    height: auto;
    opacity: 1;
    visibility: visible;
    width: auto;
  }

  .subMenuItem:hover {
    transition: background-color 1s;
    background-color: #44c100a1;
  }
`

export const Navbar = () => {
  return (
    <StyledNavbarWraper>
      <div className='brand'>
        <img
          src={titleLogo}
          alt='Brand'
          style={{ maxHeight: 50, marginRight: 15 }}
        />
      </div>
      <div style={{ width: '100%' }}>
        <ul className='styled_ul'>
          <StyledNavbarItem>
            {navbarItems.map((menuItem, index) => (
              <div key={index} className='mainWrapper'>
                <div className='menuItemWrapper'>
                  <div className='menuItem'>
                    <div className='menuIcon'>{menuItem.icon}</div>
                    <div>{menuItem.menuTitle}</div>
                  </div>

                  {menuItem.submenu !== undefined && (
                    <ul className='subMenu'>
                      {menuItem.submenu.map((submenuItem, index) => (
                        <li key={index} className='subMenuItem'>
                          <div className='subItemIcon'>{submenuItem.icon}</div>
                          <div>{submenuItem.submenuTitle}</div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </StyledNavbarItem>
        </ul>
      </div>
    </StyledNavbarWraper>
  )
}

const navbarItems = [
  {
    icon: '©',
    menuTitle: 'HOME'
  },
  {
    icon: '©',
    menuTitle: 'Sobre a empresa',
    submenu: [
      {
        icon: 'ℹ',
        submenuTitle: 'Sobre a empresa submenu submenu submenu 1'
      },
      {
        icon: 'ℹ',
        submenuTitle: 'Sobre a empresa submenu 2'
      },
      {
        icon: 'ℹ',
        submenuTitle: 'Sobre a empresa submenu 3'
      }
    ]
  },
  {
    icon: '©',
    menuTitle: 'Fale conosco',
    submenu: [
      {
        icon: 'ℹ',
        submenuTitle: 'Fale conosco submenu 1'
      },
      {
        icon: 'ℹ',
        submenuTitle: 'Fale conosco submenu 2'
      },
      {
        icon: 'ℹ',
        submenuTitle: 'Fale conosco submenu 3'
      }
    ]
  },
  {
    icon: '©',
    menuTitle: 'Conheça um pouco sobre nossa história',
    submenu: [
      {
        icon: 'ℹ',
        submenuTitle: 'Conheça submenu 1'
      },
      {
        icon: 'ℹ',
        submenuTitle: 'Conheça submenu 2'
      }
    ]
  }
]
