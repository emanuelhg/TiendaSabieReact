import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Links from "./Links"
import CartWidget from './CartWidget'


const SiteNav = () => {

    
    // console.log(resultado)

    return (
        <Navbar id="test" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <NavLink to="/" exact>
                    <img src="/banner_logo.png" height="35" alt="" />
                </NavLink>
                <Navbar.Brand>
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
