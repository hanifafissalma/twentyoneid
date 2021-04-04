import React from 'react';
import {NavLink,Link } from "react-router-dom";
import '../static/scss/_core.scss';

const Nav = () => { 
    return(
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
                <div id="logo">
                    <Link to="/"><img src={"./images/logo.png"} alt="" style={{maxWidth:'80px', margin:'10px'}}/></Link>
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><NavLink  to="/service" className="nav-link scrollto" activeClassName="nav-link scrollto active">Service</NavLink ></li>
                        <li><NavLink  to="/project" className="nav-link scrollto" activeClassName="nav-link scrollto active">Project</NavLink ></li>
                        <li><NavLink  to="/client" className="nav-link scrollto" activeClassName="nav-link scrollto active">Client</NavLink ></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}
export default Nav;