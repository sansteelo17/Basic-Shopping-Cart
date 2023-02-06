import { Fragment } from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";

import classes from "./Modal.module.css";

const Backdrop = () => {
  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return <div className={classes.backdrop} onClick={closeCartHandler} />;
};

const Modal = () => {
  return (
    <Fragment>
      <Backdrop />
    </Fragment>
  );
};

export default Modal;
