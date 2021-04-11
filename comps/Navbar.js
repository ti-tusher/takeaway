import React from 'react';
import { Navbar,NavDropdown,Nav,Container,Row,Col } from 'react-bootstrap';
import Social from './Social'
import Link from 'next/link';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Navigation = () => {
    return ( 
<div className="topNav">
        <div className="top-social">
                <Container>
                    <Row>
                        <Col xs={7}>
                            <Social />
                        </Col>
                        <Col xs={5}>
                            <p className="top-phone text-right">
                            <FontAwesomeIcon icon={faPhoneAlt} className="phoneicon" /> <Link href="tel:01462851230"><a>01462851230</a></Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
        </div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <div className="container">
                <Navbar.Brand href="/">
                <Image src="/main-logo.png" width={175} height={70} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <NavDropdown title="Menu" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/">A La Carte</NavDropdown.Item>
                        <NavDropdown.Item href="/">Dine In Menu</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link href="#">Order Online</Nav.Link>
                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </div>
        </Navbar>
</div>
    );
}
 
export default Navigation;