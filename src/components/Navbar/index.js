import React from 'react'
import styled from 'styled-components'

const titleLogo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ITunes_12.2_logo.png/600px-ITunes_12.2_logo.png'

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
    margin: 5px;
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
    margin-right: 15px;
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
    padding-top: 20px;
  }

  @media (max-width: 560px) {
    .subMenu {
      position: static;
    }

    .menuItem {
      width: 95%;
      background: red;
    }
  }

  .subMenu:hover {
    width: max-content;
    min-width: 100%;
    height: auto;
    opacity: 1;
    visibility: visible;
  }
`

export const Navbar = () => {
  return (
    <div
      style={{
        width: '100%',
        background: '#44c199',
        minHeight: '30px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}
    >
      <div>
        <img
          src={titleLogo}
          alt='Brand'
          style={{ maxHeight: 50, marginRight: 15 }}
        />
      </div>
      <div>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingInlineStart: 0
          }}
        >
          <StyledNavbarItem>
            {navbarItems.map((menuItem, index) => (
              <div key={index} className='mainWrapper'>
                <div className='menuItemWrapper'>
                  <div className='menuItem'>
                    <div className='menuIcon'>{menuItem.icon}</div>
                    <div>{menuItem.menuTitle}</div>
                  </div>

                  {menuItem.submenu !== undefined && (
                    <ul className='subMenu' style={{ margin: '5px' }}>
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
    </div>
  )
}

const navbarItems = [
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
  },
  {
    icon: '©',
    menuTitle: 'HOME'
  }
]
