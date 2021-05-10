import React from "react";
import { Navbar } from "react-bootstrap";
import '../../css/login_css/index.css'

export default function Index() {
  return (
    <div>
      <Navbar id="navbar_login">
        <Navbar.Brand id="navbrand_login">
          <img src="/images/Logo_lk@2x.png" alt="React Bootstrap logo" id="navimg_login"/>{" "}
          <label id="navlbl_login">Online Asset Management</label>
        </Navbar.Brand>
      </Navbar>
      <div className="login_size">
        <div className="login_form">
            <div className="row">
                <div className="col-12 login_form_row1">
                    <label>Welcome to Online Asset Management</label>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-3">Username</div>
                    <div className="col-7"><input type="text" style={{width:'100%'}}/></div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-3">Passowrd</div>
                    <div className="col-7"><input type="text" style={{width:'100%'}}/></div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-2"><button style={{width:'100%'}}>Login</button></div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
