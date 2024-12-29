import { memo } from "react";
import { Form, Button } from "react-bootstrap";
import { TProduct } from "@types";

import styles from "./styles.module.css";
import React from "react";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

type TShoppingCartItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const ShoppingCartItem = memo(
  ({
    id,
    title,
    images,
    price,
    max,
    quantity,
    changeQuantityHandler,
    removeItemHandler,
  }: TShoppingCartItemProps) => {
    // Render options List
    const renderOption = Array(max)
      .fill(0)
      .map((_, idx) => {
        const quantity = ++idx;
        return (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = Number(event.target.value);
      changeQuantityHandler(id, quantity);
    };

    return (
      <div className={cartItem}>
        <div className={product}>
          <div className={productImg}>
            <img src={images[0]} alt={title} />
          </div>
          <div className={productInfo}>
            <h2>{title}</h2>
            <h3>{price.toFixed(2)} EGP</h3>
            <Button
              variant="secondary"
              style={{ color: "white" }}
              className="mt-auto"
              onClick={() => removeItemHandler(id)}
            >
              Remove
            </Button>
          </div>
        </div>

        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select value={quantity} onChange={changeQuantity}>
            {renderOption}
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default ShoppingCartItem;
