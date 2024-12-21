import Cart from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";

const { basketContainer, basketQuantity } = styles;
const HeaderCart = () => {
  return (
    <div className={basketContainer}>
      <Cart title="Cart" />
      <div className={basketQuantity}>0</div>
    </div>
  );
};

export default HeaderCart;
