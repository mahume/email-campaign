import React, { Component } from 'react';
import { connect } from "react-redux";
import Payments from "../Payments/index";
import { Navbar, Logo, NavList, NavLink } from './styles';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <NavLink href="/auth/google">Login With Google</NavLink>
      default:
        return [
          <NavLink key="1"><Payments /></NavLink>,
          <NavLink key="2">Credits: {this.props.auth.credits}</NavLink>,
          <NavLink key="3" href="/api/logout">Logout</NavLink>
        ];
    }
  }
  render() {
    return (
      <Navbar>
          <Logo 
            to={this.props.auth ? '/surveys' : '/'}
          >
            Email-campaign
          </Logo>
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