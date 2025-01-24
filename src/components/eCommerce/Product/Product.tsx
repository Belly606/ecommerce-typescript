import { memo, useEffect, useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { Button, Spinner } from "react-bootstrap";
import { TProduct } from "@cutomTypes/product";

import styles from "./styles.module.css";
const { product, productImg, maximumNotice } = styles;

const Product = memo(({ id, title, image, price, max, quantity }: TProduct) => {
  const dispatch = useAppDispatch();
  const [isBtnClicked, setIsBtnClicked] = useState(0);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity == 0 ? true : false;

  useEffect(() => {
    if (!isBtnClicked) {
      return;
    }

    setIsBtnDisabled(true);

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isBtnClicked]);
  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBtnClicked((prev) => prev + 1);
  };
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={image} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price.toFixed(2)} EGP</h3>
      <p className={maximumNotice}>
        {quantityReachedToMax
          ? "Out of stock"
          : `Remaining: ${currentRemainingQuantity}`}
      </p>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || quantityReachedToMax}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" /> Loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
});

export default Product;
