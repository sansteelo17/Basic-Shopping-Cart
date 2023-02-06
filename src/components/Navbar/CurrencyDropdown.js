import { useSelector, useDispatch } from "react-redux";

import { currencyActions } from "../../store/currency-slice";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./CurrencyDropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

const CurrencyDropdown = () => {
  const dispatch = useDispatch();

  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );

  const cartIsShown = useSelector((state) => state.cart.cartIsShown);
  const dollarIsActive = useSelector((state) => state.currency.isActive.dollar);
  const euroIsActive = useSelector((state) => state.currency.isActive.euro);
  const yenIsActive = useSelector((state) => state.currency.isActive.yen);
  const currencyDropdownIsActive = useSelector(
    (state) => state.currency.isActive.currencyDropdown
  );

  const setDollarHandler = () => {
    dispatch(currencyActions.changeCurrency("$"));
    dispatch(currencyActions.toggleCurrDropdown());
  };

  const setEuroHandler = () => {
    dispatch(currencyActions.changeCurrency("€"));
    dispatch(currencyActions.toggleCurrDropdown());
  };

  const setYenHandler = () => {
    dispatch(currencyActions.changeCurrency("¥"));
    dispatch(currencyActions.toggleCurrDropdown());
  };

  const toggleCurrDropHandler = () => {
    dispatch(currencyActions.toggleCurrDropdown());
  };

  const dollarCase = (
    <Fragment>
      <div className={classes.dropdownItem} onClick={setDollarHandler}>
        $ USD
      </div>
      <div className={classes.dropdownItem} onClick={setEuroHandler}>
        € EUR
      </div>
      <div className={classes.dropdownItem} onClick={setYenHandler}>
        ¥ JPY
      </div>
    </Fragment>
  );

  const euroCase = (
    <Fragment>
      <div className={classes.dropdownItem} onClick={setEuroHandler}>
        € EUR
      </div>
      <div className={classes.dropdownItem} onClick={setDollarHandler}>
        $ USD
      </div>
      <div className={classes.dropdownItem} onClick={setYenHandler}>
        ¥ JPY
      </div>
    </Fragment>
  );

  const yenCase = (
    <Fragment>
      <div className={classes.dropdownItem} onClick={setYenHandler}>
        ¥ JPY
      </div>
      <div className={classes.dropdownItem} onClick={setDollarHandler}>
        $ USD
      </div>
      <div className={classes.dropdownItem} onClick={setEuroHandler}>
        € EUR
      </div>
    </Fragment>
  );

  const currencyDropdownDiv = (
    <div className={`${classes.slideDown} shadow-xl py-2 text-center`}>
      {dollarIsActive && dollarCase}
      {euroIsActive && euroCase}
      {yenIsActive && yenCase}
    </div>
  );

  return (
    <div className={classes.dropdown}>
      <div className="cursor-pointer" onClick={toggleCurrDropHandler}>
        <span className={classes.currency}>{selectedCurrency}</span>
        <span className="duration-150 hover:scale-105">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
      {currencyDropdownIsActive && !cartIsShown && currencyDropdownDiv}
    </div>
  );
};

export default CurrencyDropdown;
