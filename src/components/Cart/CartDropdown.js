import { useSelector } from "react-redux";

import classes from "../UI/Modal.module.css";
import styles from "./CartDropdown.module.css";
import CartItem from "./CartItem";

import Card from "../UI/Card";

const CartDropdown = () => {
  const cartIsEmpty = useSelector((state) => state.cart.cartIsEmpty);
  const itemsArray = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className={`${classes.modal}`}>
      {cartIsEmpty && <p className="text-center">Your cart is empty.</p>}
      {!cartIsEmpty && (
        <Card className={styles.cart}>
          <h2>My Bag: {totalQuantity} item(s)</h2>
          <ul>
            {itemsArray.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  name: item.name,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price,
                }}
              />
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};

export default CartDropdown;
