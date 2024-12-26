import { useEffect, useState } from "react";
import { useAppSelector } from "@store/hooks";
import { useNavigate } from "react-router-dom";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import Cart from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";

const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } =
  styles;
const HeaderCart = () => {
  const navigate = useNavigate();

  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

  useEffect(() => {
    // Don't animate if there is no quantity
    if (!totalQuantity) {
      return;
    }

    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [totalQuantity]);

  return (
    <div className={basketContainer} onClick={() => navigate("/cart")}>
      <div className={basketCart}>
        <Cart title="Cart" />
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderCart;
