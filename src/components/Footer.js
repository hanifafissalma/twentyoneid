import React from 'react';
const Footer = () => {
  return (
    <div className="footer">
        <div className="container pt-5">
            <div className="row m-b-50">
                <div className="col-md-4 col-sm-12 footer-padding">
                <img
                    src="./images/logo.png"
                    width="152"
                    className="big-hp m-b-30 logo-footer"
                    alt="logo"
                />
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12 footer-padding">
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12 footer-padding">
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12 text-sm-left text-center m-b-10">
                <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-facebook m-r-10 m-l-10"></i>
                </a>
                <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-instagram m-r-10 m-l-10"></i>
                </a>
                <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-linkedin-in m-r-10 m-l-10"></i>
                </a>
                </div>
                <div className="col-md-1 col-sm-1 col-xs-12 text-sm-center m-b-10"></div>
                <div className="col-md-7 col-sm-7 col-xs-12 text-sm-right text-center">
                <span className="footer-text big-hp">
                    ©Copyright {new Date().getFullYear()} Twenti.one . All Rights Reserved.
                </span>
                ​
                <span className="footer-text small-hp">
                    ©Copyright {new Date().getFullYear()} Twenti.one
                    <br />
                    All Rights Reserved.
                </span>
                ​
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
