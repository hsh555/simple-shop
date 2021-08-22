import React, { useState } from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleShowDropDown = (e) => {
    if (e.target.id === "dropDownCart") {
      setShowDropDown((prevState) => !prevState);
    }
  };

  const handleRemoveFromCart = (productItem) => {
    props.handleRemoveFromCart(productItem);
  };

  return (
    <div className="nav">
      <button
        className="cart-btn"
        id="dropDownCart"
        onClick={handleShowDropDown}
      >
        <i className="fas fa-cart-plus">
          <span className="cart-badge">{props.productsCount}</span>
        </i>
        سبد خرید
        <div className={`dropdown-cart ${showDropDown ? "show" : "hide"}`}>
          {props.productsListInCart.length < 1 ? (
            <span
              style={{
                textAlign: "center",
                lineHeight: "50px",
                fontWeight: "700",
              }}
            >
              Empty
            </span>
          ) : (
            props.productsListInCart.map((item) => {
              return (
                <div className="productItem" key={item.id}>
                  <span
                    className="close"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    &times;
                  </span>
                  <p className="id">{item.id}-</p>
                  <p className="title">{item.title}</p>
                  <p className="price">{item.price} تومان</p>
                </div>
              );
            })
          )}
        </div>
      </button>
      <nav className="inner-nav">
        <NavLink
          exact
          to="/"
          className="inner-nav-item"
          activeClassName="active"
        >
          خانه
        </NavLink>
        <NavLink
          to="/profile"
          className="inner-nav-item"
          activeClassName="active"
        >
          پروفایل
        </NavLink>
        <NavLink
          to="/about-us"
          className="inner-nav-item"
          activeClassName="active"
        >
          درباره ما
        </NavLink>
      </nav>
      <Link to="/login" className="auth-btn">
        وارد شوید
      </Link>
    </div>
  );
};

export default Navbar;
