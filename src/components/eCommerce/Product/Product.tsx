import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@cutomTypes/product";

const { product, productImg, productDescription } = styles;

const Product = ({ title, price, description, images }: TProduct) => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={images[0]} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <p className={productDescription}>{description}</p>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
