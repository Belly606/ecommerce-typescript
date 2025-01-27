import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import HeaderCounter from "../HeaderCounter/HeaderCounter";
import CartIcon from "@assets/svg/cart.svg?react";
import WishlistIcon from "@assets/svg/wishlist.svg?react";

import styles from "./styles.module.css";

const HeaderLeftBar = () => {
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );

  return (
    <div className={styles.headerLeftBar}>
      <HeaderCounter
        totalQuantity={wishlistTotalQuantity}
        to="/wishlist"
        title="Wishlist"
        svgIcon={<WishlistIcon title="wishlist" />}
      />
      <HeaderCounter
        totalQuantity={cartTotalQuantity}
        to="/cart"
        title="Cart"
        svgIcon={<CartIcon title="cart" />}
      />
    </div>
  );
};

export default HeaderLeftBar;
