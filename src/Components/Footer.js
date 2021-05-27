import React from 'react'
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { RiFacebookCircleLine } from 'react-icons/ri';
 
const Footer = () => {
    return (
        <>
        <div className="footer-container">
        <footer className="TheFooter">
        
        <section className="footer-section" id="footer">
           
            
            <ul className="footer-ul">
            <h1 className="Footerh1"> KONTAKT </h1>
                <li><p> Mejl: nakedwinelovers(@)gmail.com </p></li>
                <li><p>Tel: 08 123 456</p></li>
                <li>Saltholmen, Stockholm <br />
                Vinvägen 7<br />
                Box 1234 56 </li>
                </ul>
                </section>
                <div className="footer-social">
                <h2 className="Footerh2"> FÖLJ OSS </h2> 
                <ul className="footer-social-list" >
                <li><SiInstagram className="FooterInsta"/></li>
                <li><RiFacebookCircleLine className="FooterFB"/></li>
                <li><FiTwitter className="FooterTwitter"/></li>
                </ul>
                </div>
                <div className="lowtext">
                    <ul> 
                        <li>Naked Wine Lovers 2021</li> 
                        </ul>
                </div>

                
        </footer>
        </div>
        </>
    )
}

export default Footer;
