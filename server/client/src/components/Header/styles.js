import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: salmon;
  padding: 0 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.a`
  color: white;
  font-family: sans-serif;
`

export const NavList = styled.ul`
  font-family: sans-serif;
  list-style: none;
`

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
`