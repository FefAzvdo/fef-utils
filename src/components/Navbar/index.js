import React, { useState, useEffect, Fragment } from 'react'

import { StyledNavbarWraper, StyledNavbarItem } from './styles'

const titleLogo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ITunes_12.2_logo.png/600px-ITunes_12.2_logo.png'

const menuMobile =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'

export const Navbar = ({ showMenuMobile, mobileBreakpoint = 780 }) => {
  const [showMenu, setShowMenu] = useState(true)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth)

      if (window.innerWidth > mobileBreakpoint) {
        setShowMenu(true)
      } else {
        setShowMenu(false)
      }
    })
  }, [])

  return (
    <Fragment>
      {innerWidth <= mobileBreakpoint && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            background: showMenu ? '#44c199' : 'transparent',
            marginLeft: showMenu ? 0 : '-100%',
            transition: 'margin-left, 0.5s'
          }}
        >
          <button
            style={{
              position: showMenu ? 'static' : 'absolute',
              left: 5,
              top: 5,
              transition: 'position 0.5s',
              margin: 5
            }}
            onClick={() => setShowMenu(!showMenu)}
          >
            <img src={menuMobile} style={{ width: 20, height: 20 }} />
          </button>
        </div>
      )}
      <StyledNavbarWraper
        showMenuMobile={(showMenuMobile = showMenu)}
        mobileBreakpoint={mobileBreakpoint}
      >
        <div className='brand'>
          <img
            src={titleLogo}
            alt='Brand'
            style={{ maxHeight: 50, marginRight: 15 }}
          />
        </div>
        <div style={{ width: '100%' }}>
          <ul className='styled_ul'>
            <StyledNavbarItem mobileBreakpoint={mobileBreakpoint}>
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
                            <div className='subItemIcon'>
                              {submenuItem.icon}
                            </div>
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
    </Fragment>
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
  },
  {
    icon: '©',
    menuTitle: 'Small menu',
    submenu: [
      {
        icon: 'ℹ',
        submenuTitle: 'Small 1'
      },
      {
        icon: 'ℹ',
        submenuTitle: 'Small submenu 2'
      }
    ]
  }
]
