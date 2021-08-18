import React from "react";
import { Link } from "react-router-dom";
import Loader from "../loader";
import "./style.css";

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (res.ok) {
        const resJson = await res.json();
        this.setState({
          productsList: resJson,
          isLoading: false,
        });
        return true;
      }
      throw new Error(res.status);
    } catch (error) {
      if (error.message === "404") {
        console.log("not found");
      }
    }
  };

  handleUpdateProductsInCart = (item) => {
    this.props.handleUpdateProductsInCart(item);
  };

  render() {
    const { productsList, isLoading } = this.state;
    return isLoading ? (
      <Loader />
    ) : (
      productsList.map((item) => {
        return (
          <div className="card" key={item.id} id={item.id}>
            <Link to={`/product/${item.id}`} className="card-title">
              {item.title}
            </Link>
            <p className="card-price">{item.price} تومان</p>
            {true && (
              <p className="card-off">
                <span className="card-badge">20%</span> off
              </p>
            )}
            <button
              className="add-to-card-btn"
              onClick={() => this.handleUpdateProductsInCart(item)}
            >
              افزودن به سبد خرید
            </button>
          </div>
        );
      })
    );
  }
}

export default ProductsList;
