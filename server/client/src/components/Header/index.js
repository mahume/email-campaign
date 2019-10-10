import React, { Component } from 'react';
import { Navbar, Logo, NavList, NavLink } from './styles';

class Header extends Component {
  render() {
    return (
      <Navbar>
          <Logo>Email-campaign</Logo>
          <NavList>
            <li>
              <NavLink href="">Login With Google</NavLink>
            </li>
          </NavList>
      </Navbar>
    )
  }
}

export default Header;