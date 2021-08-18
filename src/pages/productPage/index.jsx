import React from "react";
import { withRouter } from "react-router-dom";
import Loader from "../../components/common/loader";
import "./style.css";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productItem: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match } = this.props;
    const { params } = match;
    const { productId } = params;

    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      if (res.ok) {
        const productJson = await res.json();
        this.setState({
          productItem: productJson,
          isLoading: false,
        });
        return true;
      }
      throw new Error(res.status);
    } catch (error) {
      console.log(error);
      this.props.history.push("/not-found");
    }
  };

  render() {
    const { productItem, isLoading } = this.state;

    return isLoading ? (
      <Loader />
    ) : (
      <div className="productSinglePage">
        <div className="image-area">
          <img src={productItem.image} alt="" />
        </div>
        <div className="content-area">
          <h3 className="title">{productItem.title}</h3>
          {false ? (
            <p className="price">
              <s>{productItem.price}</s>
              <span>{productItem.price} تومان</span>
            </p>
          ) : (
            <p className="price">
              <span className="no-offed">
                {productItem.price} تومان
              </span>
            </p>
          )}

          {true  && (
            <p className="off">20% off</p>
          )}
          <p className="description">{productItem.description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductPage);
