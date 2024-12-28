import { HeaderCart, HeaderWishlist } from "@components/eCommerce";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

const { headerContainer, headerLogo, leftIcons } = styles;

const Header = () => {
  return (
    <Container>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          Our{" "}
          <span>
            <Badge bg="info">Ecom</Badge>
          </span>
        </h1>
        <div className={leftIcons}>
          <HeaderWishlist />
          <HeaderCart />
        </div>
      </div>
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
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="about-us">
                About Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
