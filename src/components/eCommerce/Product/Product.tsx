import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const { product, productImg } = styles;

const Product = () => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src="https://placecats.com/bella/300/300"
          alt="Bella Cat Placeholder"
        />
      </div>
      <h2>Title</h2>
      <h3>10 EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
