import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";

import HeaderCounter from "../HeaderCounter/HeaderCounter";
import WishlistIcon from "@assets/svg/wishlist.svg?react";
import CartIcon from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";

const HeaderLeftBar = () => {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);
  return (
    <div className={styles.leftBar}>
      <HeaderCounter
        title="Wishlist"
        page="wishlist"
        totalQuantity={wishlistTotalQuantity}
        svgIcon={<WishlistIcon title="Wishlist" />}
      />
      <HeaderCounter
        title="Cart"
        page="cart"
        totalQuantity={cartTotalQuantity}
        svgIcon={<CartIcon title="Shopping Cart" />}
      />
    </div>
  );
};

export default HeaderLeftBar;
