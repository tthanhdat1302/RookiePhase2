import React from 'react'
import '../../css/fragments_css/left_session.css'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'

export default function LeftSession() {
    return (
        <div className="row" id="left_session">
            <div className="col-2"></div>
            <div className="col-8">
                <img src='/images/Logo_lk.png' alt="Rookie_logo" id="rookie_logo"></img>
                <label id="lbl_left_session" className="translate_left_session">Online Asset Management</label>
                <div className="menu">
                    <Link to="/"><button className="menuBtn">Home</button></Link>
                    <Link to="/user"><button className="menuBtn">Manage User</button></Link>
                    <Link to="/asset"><button className="menuBtn">Manage Asset</button></Link>
                    <Link to="/assignment"><button className="menuBtn">Manage Assignment</button></Link>
                    <Link to="/return"><button className="menuBtn">Request for Returning</button></Link>
                    <Link to="/report"><button className="menuBtn">Report</button></Link>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
    )
}
