import React, { Component } from 'react';
import { connect } from "react-redux";
import { Navbar, Logo, NavList, NavLink } from './styles';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <NavLink href="/auth/google">Login With Google</NavLink>
      default:
        return <NavLink href="/api/logout">Logout</NavLink>
    }
  }
  render() {
    return (
      <Navbar>
          <Logo>Email-campaign</Logo>
          <NavList>
            <li>
              {this.renderContent()}
            </li>
          </NavList>
      </Navbar>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);