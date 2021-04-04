import React from 'react';
import {Link} from "react-router-dom";
import '../static/scss/_core.scss';

const Nav = () => { 
    return(
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
            <div className="container d-flex justify-content-between align-items-center">
            <div id="logo">
                <Link to="/"><img src={"../../public/images/logo.png"} alt=""/></Link>
            </div>
            <nav id="navbar" className="navbar">
                <ul>
                    <li><Link to="/about" className="nav-link scrollto">About</Link></li>
                    <li><Link to="/service" className="nav-link scrollto">Service</Link></li>
                    <li><Link to="/project" className="nav-link scrollto">Project</Link></li>
                    <li><Link to="/client" className="nav-link scrollto">Client</Link></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
            </div>
        </header>
    )
}
export default Nav;