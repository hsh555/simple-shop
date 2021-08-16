import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
    };
  }

  handleShowDropDown = (e) => {
    if(e.target.id === "dropDownCart") {
      this.setState((prevState) => {
        return {
          showDropDown: !prevState.showDropDown,
        };
      });
    }
  };

  handleRemoveFromCart = (productItem) => {
    this.props.handleRemoveFromCart(productItem);
  }

  render() {
    const { productsCount, productsListInCart } = this.props;
    return (
      <div className="nav">
        <button className="cart-btn" id="dropDownCart" onClick={this.handleShowDropDown}>
          <i className="fas fa-cart-plus">
            <span className="cart-badge">{productsCount}</span>
          </i>
          سبد خرید
          <div
            className={`dropdown-cart ${
              this.state.showDropDown ? "show" : "hide"
            }`}
          >
            {productsListInCart.length < 1 ? (
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
              productsListInCart.map((item) => {
                return (
                  <div className="productItem" key={item.id}>
                    <span className="close" onClick={() =>this.handleRemoveFromCart(item)}>&times;</span>
                    <p className="id">{item.id}-</p>
                    <p className="title">{item.productTitle}</p>
                    <p className="price">{item.productPrice} تومان</p>
                  </div>
                );
              })
            )}
          </div>
        </button>
        {/* <button className="auth-btn">ورود</button> */}
        <Link to="/login" className="auth-btn">وارد شوید</Link>
      </div>
    );
  }
}

export default Navbar;
