import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Links from "./Links"
import CartWidget from './CartWidget'

const SiteNav = () => {
    return (
        <Navbar id="test" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <img src="banner_logo.png" height="35" alt="" />
                <Navbar.Brand href="#home">
                    Sa<span id="colorBie">Bie</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="ml-auto">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Links />
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SiteNav
