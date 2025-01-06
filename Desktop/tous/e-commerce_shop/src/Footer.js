import React from 'react';
import './Footer.css';



function Footer() {
    return (
        <div className="navLeftFooter nav-sprite-v1" id="navFooter">
            <a href="javascript:void(0)" id="navBackToTop" aria-label="Back-to-top">
                <div className="navFooterBackToTop">
                    <span className="NavFooterBackToTopText">Back To Top</span>
                </div>
            </a>
            <div className="navFooterVerticalColumn navAccessibility" role="presentation">
                <div className="footerRow">
                    {/* Première section */}
                    <div className="navFotterColhead" role="heading" aria-level="6">
                        Get to Know Us
                    </div>
                    <ul>
                        <li className="nav_a">Careers</li>
                        <li className="nav_a">Blog</li>
                        <li className="nav_a">About</li>
                    </ul>
                    {/* Deuxième section */}
                    <div className="navFotterNexthead" role="heading" aria-level="6">
                        Contact
                    </div>
                    <ul>
                        <li className="nav_b">bilelbilel@gmail.com</li>
                        <li className="nav_b">26565936</li>
                        <li className="nav_b">bilel099</li>
                    </ul>
                </div>
                {/* Section Social Media */}
                <div className="col-lg-3 item social">
                    <a href="#" className="social-link">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-snapchat-ghost"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
