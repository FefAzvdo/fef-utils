import React from 'react'
import styled from 'styled-components'

const titleLogo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ITunes_12.2_logo.png/600px-ITunes_12.2_logo.png'

const StyledNavbarItem = styled.li`
  margin: 5px;
  padding: 10px 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  background: #00f;

  cursor: pointer;

  &:hover > ul.subMenu {
    height: auto;
    opacity: 1;
    visibility: visible;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  ul.subMenu {
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    background: #f00;
    width: fit-content;

    &:hover {
      height: auto;
      opacity: 1;
      visibility: visible;
    }

    padding-inline-start: 0px;

    transition: opacity 1s;

    height: 0;
    opacity: 0;
    visibility: hidden;

    position: fixed;
    top: 55px;

    padding-top: 20px;

    li {
      margin: 10px;

      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      background: #ff0;
      color: purple;
      font-weight: bolder;
    }
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
        <img src={titleLogo} alt='Brand' style={{ maxHeight: 50 }} />
      </div>
      <div>
        <ul
          style={{ listStyle: 'none', display: 'flex', flexDirection: 'row' }}
        >
          <StyledNavbarItem>
            <div>
              <div>©</div>
              <div>Home</div>
            </div>
            {/* <ul className='subMenu'>
              <li>
                <div>™</div>
                <div>Home submenu 1</div>
              </li>
              <li>
                <div>™</div>
                <div>Home submenu 2</div>
              </li>
              <li>
                <div>™</div>
                <div>Home submenu 3</div>
              </li>
            </ul> */}
          </StyledNavbarItem>
          <StyledNavbarItem>
            <div>
              <div>©</div>
              <div>Quem somos</div>
            </div>
            <ul className='subMenu'>
              <li>
                <div>™</div>
                <div>Quem somos submenu 1</div>
              </li>
              <li>
                <div>™</div>
                <div>Quem somos submenu 2</div>
              </li>
              <li>
                <div>™</div>
                <div>Quem somos submenu 3</div>
              </li>
            </ul>
          </StyledNavbarItem>
          <StyledNavbarItem>
            <div>
              <div>©</div>
              <div>Fale conosco</div>
            </div>
            <ul className='subMenu'>
              <li>
                <div>™</div>
                <div>Fale conosco submenu 1</div>
              </li>
              <li>
                <div>™</div>
                <div>Fale conosco submenu 2</div>
              </li>
              <li>
                <div>™</div>
                <div>Fale conosco submenu 3</div>
              </li>
            </ul>
          </StyledNavbarItem>
          <StyledNavbarItem>
            <div>
              <div>©</div>
              <div>Contato</div>
            </div>
            <ul className='subMenu'>
              <li>
                <div>™</div>
                <div>Contato submenu 1</div>
              </li>
              <li>
                <div>™</div>
                <div>Contato submenu 2</div>
              </li>
              <li>
                <div>™</div>
                <div>Contato submenu 3</div>
              </li>
            </ul>
          </StyledNavbarItem>
        </ul>
      </div>
    </div>
  )
}
