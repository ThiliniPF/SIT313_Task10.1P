import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className="container">
            <div className="footer-section">
            <div className="footer-block">
                <h3> For Dev </h3>
                <footerlink><a href="#"> How it works </a></footerlink>
                <footerlink><a href="#"> How to create a profile </a></footerlink>
                <footerlink><a href="#"> Find jobs </a></footerlink>
            </div>

            <div className="footer-block">
                <h3> For Clients </h3>
                <footerlink><a href="#"> How it works </a></footerlink>
                <footerlink><a href="#"> How to post a job </a></footerlink>
                <footerlink><a href="#"> Find dev </a></footerlink>
            </div>

            <div classname="footer-block">
                <h3> Stay Connected </h3>
                <div className="social-media">
                    <a href="#"><img src="facebook.png"/></a>
                    <a href="#"><img src="twitter.png"/></a>
                    <a href="#"><img src="instagram.png"/></a>
                </div>
            </div>
            </div>

            <div className="footer-info">
                <h3> DEV LINK </h3> 
                <div className="footerinfolink">
                    <footerinfolink><a href="#"> Privacy Policy </a></footerinfolink>
                    <footerinfolink><a href="#"> Terms </a></footerinfolink>
                    <footerinfolink><a href="#"> Code of Conduct </a></footerinfolink>
                </div>
            </div>
        </div>
    )
}
export default Footer;