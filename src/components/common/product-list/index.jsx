import React from "react";
import getProducts from "../../../server";
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
    let result = await getProducts();
    this.setState({
      productsList: result,
      isLoading: false,
    });
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
            <p className="card-title">{item.productTitle}</p>
            <p className="card-price">{item.productPrice} تومان</p>
            {item.off > 0 && (
              <p className="card-off">
                <span className="card-badge">{item.off}%</span> تخفیف
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
