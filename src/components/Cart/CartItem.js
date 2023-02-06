import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { name, quantity, total, price, id } = props.item;

  const reduceItemQuantityHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const increaseItemQuantityHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={reduceItemQuantityHandler}>-</button>
          <button onClick={increaseItemQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
