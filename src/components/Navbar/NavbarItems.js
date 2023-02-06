import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/cart-slice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Modal from "../UI/Modal";
import CartDropdown from "../Cart/CartDropdown";
import classes from "./NavbarItems.module.css";
import CurrencyDropdown from "./CurrencyDropdown";

const NavbarItems = () => {
  const dispatch = useDispatch();
  const cartIsShown = useSelector((state) => state.cart.cartIsShown);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  const navLinkStyles = "pb-3 px-2 duration-150";

  const nav = (
    <nav className="flex justify-between px-8 pt-3 max-h-16">
      <div>
        <ul>
          <li className="inline ml-3">
            <button
              className={`${navLinkStyles} border-b-2 border-green-500 text-green-500 hover:text-green-700 hover:border-green-700 hover:scale-105 text-2xl`}
            >
              STEELO
            </button>
          </li>
        </ul>
      </div>
      <div>
        <img
          src="https://media.istockphoto.com/id/466687438/photo/eco-friendly-shopping-icon.jpg?b=1&s=170667a&w=0&k=20&c=uqJL4naiUTMd_dlP2vMIJyXVXXZTZU8TV90yGaTmQC0="
          className="h-14 pb-4 ml-12"
          alt="Logo"
        />
      </div>
      <div className="flex-column w-72">
        <div className="flex w-72 justify-end">
          <CurrencyDropdown />
          <div className="flex mr-2">
            <span>
              <button
                className={`${navLinkStyles} ${classes["cart-icon"]} ${classes.icons}`}
                onClick={toggleCartHandler}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </span>
            <div className="mb-4">
              <span className={`${classes["total-quantity"]} text-white`}>
                <span className={`${classes["total-quantity__text"]} bg-black`}>
                  {totalQuantity}
                </span>
              </span>
            </div>
          </div>
        </div>
        {cartIsShown && <Modal />}
        {cartIsShown && <CartDropdown />}
      </div>
    </nav>
  );

  return <Fragment>{nav}</Fragment>;
};

export default NavbarItems;
