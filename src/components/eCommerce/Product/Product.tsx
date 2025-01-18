import { Button } from "react-bootstrap";
import { TProduct } from "@cutomTypes/product";
import styles from "./styles.module.css";
const { product, productImg } = styles;

const Product = ({ id, title, image, price }: TProduct) => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={image} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
