import { HeaderBasket } from "@components/eCommerce";
import { Badge, Navbar, Nav, Container } from "react-bootstrap";
import styles from "./styles.module.css";

const { headerContainer, headerLogo } = styles;

const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <div className={headerLogo}>
          <h1>
            <span>Our</span> <Badge bg="info">eCom</Badge>
          </h1>
        </div>

        <HeaderBasket />
      </div>
      <div>
        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          bg="dark"
          data-bs-theme="dark"
        >
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Categories</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#home">Login</Nav.Link>
                <Nav.Link href="#link">Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
