import React from 'react';

import logo from "./../../assets/img/logo.png";

const Header = () => 
    <nav>
        <div className="nav-wrapper blue-grey darken-4">
            <div className="container row">
                <div className="col s4">
                    <a href="/"><img src={logo} alt="logo"/></a>
                </div>
                <div className="col">
                    <h4>Air Traffic Radar</h4>
                </div>
            </div>
        </div>
    </nav>
;

export default Header;