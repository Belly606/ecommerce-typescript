import { useEffect, useState, memo } from "react";
import { useAppDispatch } from "@store/hooks";
import { useNavigate } from "react-router-dom";
import { addToCart } from "@store/cart/cartSlice";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/like-fill.svg?react";
import ProductInfo from "../ProductInfo/ProductInfo";
import { Button, Spinner, Modal } from "react-bootstrap";
import { TProduct } from "@types";

import styles from "./styles.module.css";
const { maximumNotice, wishlistBtn, spinner } = styles;

const Product = memo(
  ({
    id,
    title,
    price,
    description,
    images,
    max,
    quantity,
    isLiked,
    isAuthenticated,
  }: TProduct) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity === 0 ? true : false;

    const [showModal, setShowModal] = useState(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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

    const likeToggleHandler = () => {
      if (isAuthenticated) {
        if (isLoading) return;
        setIsLoading(true);
        dispatch(actLikeToggle(id))
          .unwrap()
          .then(() => setIsLoading(false))
          .catch(() => setIsLoading(false));
      } else {
        setShowModal(true);
      }
    };

    const handleClose = () => setShowModal(false);

    return (
      <>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>

        <ProductInfo
          title={title}
          images={images}
          price={price}
          description={description}
        >
          {isLoading ? (
            <Spinner
              className={`${spinner} text-danger`}
              animation="border"
              size="sm"
            />
          ) : isLiked ? (
            <LikeFill className={wishlistBtn} onClick={likeToggleHandler} />
          ) : (
            <Like className={wishlistBtn} onClick={likeToggleHandler} />
          )}
          <p className={maximumNotice}>{`${
            quantityReachedToMax
              ? "You've reached to the limit"
              : `You have ${currentRemainingQuantity} items left`
          }`}</p>
          <Button
            onClick={addToCartHandler}
            variant="info"
            style={{ color: "white", width: "100%" }}
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
        </ProductInfo>
      </>
    );
  }
);

export default Product;
