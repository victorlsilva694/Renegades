import './Header.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Renegades</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Playlists</Nav.Link>
                        <NavDropdown title="Playlists" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Estudos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Musicas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Jogos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Mais opções</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="http://localhost:1213/login">Entrar agora </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;