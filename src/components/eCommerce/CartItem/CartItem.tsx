import { memo } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";
import { Button, Form } from "react-bootstrap";
import { TProduct } from "@types";

import styles from "./styles.module.css";
const { cartItem, cartItemSelection } = styles;

type TCartItem = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const CartItem = memo(
  ({
    id,
    title,
    price,
    image,
    max,
    quantity,
    changeQuantityHandler,
    removeItemHandler,
  }: TCartItem) => {
    const renderOptions = Array(max)
      .fill(0)
      .map((_, idx) => {
        const quantity = ++idx;
        return <option value={quantity}>{quantity}</option>;
      });

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = +event.target.value;
      changeQuantityHandler(id, quantity);
    };

    return (
      <div className={cartItem}>
        <ProductInfo title={title} img={image} price={price}>
          <Button
            variant="secondary"
            style={{ color: "white" }}
            className="mt-auto"
            onClick={() => removeItemHandler(id)}
          >
            Remove
          </Button>
        </ProductInfo>

        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select value={quantity} onChange={changeQuantity}>
            {renderOptions}
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default CartItem;
