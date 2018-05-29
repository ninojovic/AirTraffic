import React from 'react';

import logo from "./../../assets/img/logo.png";

const Header = () => 
    <nav>
        <div className="nav-wrapper blue-grey">
            <div className="container row">
                <div className="col sm3 s4">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="col sm6 s8">
                    <h4>Air Traffic Radar</h4>
                </div>
            </div>
        </div>
    </nav>
;

export default Header;