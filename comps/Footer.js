import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer id="site-footer">
            <Container>
                <div className="footer-nner">
                    <Row>
                        
                        <Col xs={12} md={4}>
                            <div className="footer-widget widget">
                                <h3 className="widget-title">Henlow Tandoori</h3>

                                <ul className="footer-menu">
                                    <li>Tel: <Link href="tel:01462851230"><a>01462851230</a></Link></li>
                                    <li>
                                        302 Hitchin Road, Henlow Camp, Henlow SG16 6DP
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col xs={12} md={4}>
                            <div className="footer-widget widget">
                                <h3 className="widget-title">Food Hygiene Rating</h3>
                                <Link href="#">
                                <a>
                                    <Image className="rateimg" src="/h5.png" alt="Food Hygiene Rating" height={100} width={200}></Image>
                                </a>
                                </Link>
                            </div>
                        </Col>

                        <Col xs={12} md={4}>
                            <div className="footer-widget widget open_close">
                                <h3 className="widget-title">Opening Hours</h3>

                                <ul className="footer-menu">
                                    <li>Monday - Sunday: 5:00 PM - 11:00 PM</li>
                                </ul>
                            </div>
                        </Col>

                    </Row>

                </div>
            
            </Container>
           

            <Container>
                <div className="site-info">
                    <p className="copy-right">ChefOnline Partner Restaurant<br/>Copyright &copy; 2021 chefonline.co.uk</p>
                </div>
            </Container>
        </footer>
    );
}
 
export default Footer;