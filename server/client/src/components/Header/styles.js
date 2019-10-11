import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  width: 100%;
  height: 8vh;
  background-color: salmon;
  padding: 0 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled(Link)`
  color: white;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 1.5em;
`

export const NavList = styled.ul`
  font-family: sans-serif;
  list-style: none;
`

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
`