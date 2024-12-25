import { useEffect, useState, memo } from "react";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { Button, Spinner } from "react-bootstrap";
import { TProduct } from "@cutomTypes/product";

import styles from "./styles.module.css";
const { product, productImg, productDescription, maximumNotice } = styles;

const Product = memo(
  ({ id, title, price, description, images, max, quantity }: TProduct) => {
    const dispatch = useAppDispatch();

    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity === 0 ? true : false;

    const [isBtnDisabled, setIsBtnDisabled] = useState(false);

    useEffect(() => {
      if (!isBtnDisabled) {
        return;
      }

      setIsBtnDisabled(true);

      const debounce = setTimeout(() => {
        setIsBtnDisabled(false);
      }, 300);

      return () => {
        clearTimeout(debounce);
      };
    }, [isBtnDisabled]);

    const addToCartHandler = () => {
      dispatch(addToCart(id));
      setIsBtnDisabled(true);
    };

    return (
      <div className={product}>
        <div className={productImg}>
          <img src={images[0]} alt={title} />
        </div>
        <h2 title={title}>{title}</h2>
        <p className={productDescription}>{description}</p>
        <h3>{price.toFixed(2)} EGP</h3>
        <p className={maximumNotice}>{`${
          quantityReachedToMax
            ? "You've reached to the limit"
            : `You have ${currentRemainingQuantity} items left`
        }`}</p>
        <Button
          onClick={addToCartHandler}
          variant="info"
          style={{ color: "white" }}
          disabled={isBtnDisabled || quantityReachedToMax}
        >
          {isBtnDisabled ? (
            <>
              <Spinner animation="border" size="sm" /> Loading...
            </>
          ) : (
            "Add to Cart"
          )}
        </Button>
      </div>
    );
  }
);

export default Product;
