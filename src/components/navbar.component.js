import React, { Component } from "react";

import { MDBNavbar,
     MDBNavbarBrand,
      MDBNavbarNav, MDBNavItem,
       MDBNavLink, MDBNavbarToggler,
        MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Styles from './nav.module.css'


class NavbarPage extends Component {

state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

clickHandler() {
    console.log('Increment Clicked')
}

render() {
  return (
    <Router>
      <MDBNavbar className={Styles.Horizon} sticky={'top'} dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text" onClick={this.clickHandler}><i>EME</i></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav center>
            <MDBNavItem active>
              <MDBNavLink to="#!" onClick={this.clickHandler}>Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" onClick={this.clickHandler}>Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" onClick={this.clickHandler}>Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" onClick={this.clickHandler}>About</MDBNavLink>
            </MDBNavItem>
            {/*<MDBNavItem>
              <MDBNavLink to="#!">Machines</MDBNavLink>
            </MDBNavItem>*/}
            <MDBNavItem>
              <MDBNavLink to="#!" onClick={this.clickHandler}>Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline" onClick={this.clickHandler}>Equipments</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Equipment 01</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Equipment 02</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Equipment 03</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Equipment 04</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline" onClick={this.clickHandler}>Machines</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Machine 01</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Machine 02</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Machine 03</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Machine 04</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="linkedin" onClick={this.clickHandler}/>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="instagram" onClick={this.clickHandler}/>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="facebook" onClick={this.clickHandler}/>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon icon="user" onClick={this.clickHandler}/>
                </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;