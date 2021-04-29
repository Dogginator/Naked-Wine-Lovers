import React from 'react'
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { RiFacebookCircleLine } from 'react-icons/ri';
 
const Footer = () => {
    return (
        <>
        
        <footer>
        <div class="footer-container">
        <section className="footers" id="footer">
           
            <h1 className="Footerh1"> KONTAKT </h1>
            <ul className="footer-ul">
                <li><p> Mejl: nakedwinelovers(@)gmail.com </p></li>
                <li><p>Tel: 08 123 456</p></li>
                <li>Saltholmen, Stockholm <br />
                Vinvägen 7<br />
                Box 1234 56 </li>
                </ul>
                </section>
                <h2 className="Footerh2"> FÖLJ OSS </h2> 
                <div className="footer-social">
                <ul className="footer-social-list" >
                <li><SiInstagram className="FooterInsta"/></li>
                <li><RiFacebookCircleLine className="FooterFB"/></li>
                <li><FiTwitter className="FooterTwitter"/></li>
                </ul>
                </div>
                <section className="lowtext">
                    <ul> 
                        <li>Naked Wine Lovers 2021</li> 
                        </ul>
                </section>

                </div>
        </footer>
        
        </>
    )
}

export default Footer;
