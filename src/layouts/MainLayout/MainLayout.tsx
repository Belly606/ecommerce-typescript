import { Header, Footer } from "@components/common";
import { Container } from "react-bootstrap";

import styles from "./styles.module.css";
const { container, wrapper } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}></div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
