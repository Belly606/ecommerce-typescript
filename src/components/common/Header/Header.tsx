import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authLogout } from "@store/auth/authSlice";
import { NavLink } from "react-router-dom";
import HeaderLeftBar from "./HeaderLeftBar/HeaderLeftBar";
import { Badge, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import styles from "./styles.module.css";
import { actGetWishlist } from "@store/wishlist/wishlistSlice";

const { headerContainer, headerLogo } = styles;

const Header = () => {
  const dispatch = useAppDispatch();

  const { user, accessToken } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("ProductIds"));
    }
  }, [dispatch, accessToken]);

  return (
    <header>
      <div className={headerContainer}>
        <div className={headerLogo}>
          <h1>
            <span>Our</span> <Badge bg="info">eCom</Badge>
          </h1>
        </div>
        <HeaderLeftBar />
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
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="categories">
                  Categories
                </Nav.Link>
                <Nav.Link as={NavLink} to="about-us">
                  About
                </Nav.Link>
              </Nav>
              <Nav>
                {!accessToken ? (
                  <>
                    <Nav>
                      <Nav.Link as={NavLink} to="login">
                        Login
                      </Nav.Link>
                      <Nav.Link as={NavLink} to="register">
                        Register
                      </Nav.Link>
                    </Nav>
                  </>
                ) : (
                  <NavDropdown
                    title={`Welcome: ${user?.firstName} ${user?.lastName}`}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item as={NavLink} to="/profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={NavLink}
                      to="/"
                      onClick={() => {
                        dispatch(authLogout());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
