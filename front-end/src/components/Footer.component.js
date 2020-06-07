import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, 
    MDBNavLink, MDBIcon } from "mdbreact";

import Styles from './footer.module.css'

const FooterPage = () => {
  return (
    <MDBFooter className={Styles.Horizon}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className={Styles.content}>Footer Content</h5>
            <p>
              EME is serving it's service in Pakistan since 2000
              <br/>
              Working together for a healthier Pakistan.
            </p>
            <h6>ADDRESS</h6>
            <p>D-7 Rafah-e-aam society malir halt, Karachi</p>
            <h6>Whatsapp  <MDBIcon fab icon="whatsapp"/>  </h6>
            <p>0300 7037007, 03002500690</p>
            <div><h5 className={Styles.content}> STAY IN THE LOOP? </h5>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="linkedin"/>
              </MDBNavLink>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="instagram"/>
              </MDBNavLink>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="facebook"/>
              </MDBNavLink>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter"/>
              </MDBNavLink></div>
          
          </MDBCol>
          <MDBCol md="6">
            <h5 className={Styles.content}>Pages</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Store</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Instruments</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Elctro Medical Enterprises </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;