import { memo, useEffect, useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/like-fill.svg?react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { TProduct } from "@types";

import styles from "./styles.module.css";
const { product, productImg, maximumNotice, wishlistBtn } = styles;

const Product = memo(
  ({
    id,
    title,
    image,
    price,
    max,
    quantity,
    isLiked,
    isAuthenticated,
  }: TProduct) => {
    const dispatch = useAppDispatch();

    const [isBtnClicked, setIsBtnClicked] = useState(0);

    const [showModal, setShowModal] = useState(false);

    const [isBtnDisabled, setIsBtnDisabled] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

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

    const likeToggleHandler = () => {
      if (isAuthenticated) {
        if (!isLoading) {
          setIsLoading(true);
          dispatch(actLikeToggle(id))
            .unwrap()
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));
        }
      } else {
        setShowModal(true);
      }
    };

    return (
      <>
        <Modal
          show={showModal}
          onHide={() => {
            setShowModal(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Login required</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You need to login first to add this item to your wishlist.
          </Modal.Body>
        </Modal>
        <div className={product}>
          <div className={wishlistBtn} onClick={likeToggleHandler}>
            {isLoading ? (
              <Spinner animation="border" size="sm" variant="danger" />
            ) : isLiked ? (
              <LikeFill />
            ) : (
              <Like />
            )}
          </div>
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
      </>
    );
  }
);

export default Product;
