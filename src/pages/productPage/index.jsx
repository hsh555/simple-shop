import React from "react";
import { withRouter } from "react-router-dom";
import image from "../../assets/images/1.jpg";
import Loader from "../../components/common/loader";
import { getSingleProduct } from "../../server";
import "./style.css";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productItem: null,
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

    let res = await getSingleProduct(Number(productId));
    this.setState({
      productItem: res[0],
      isLoading: false,
    });
  };

  render() {
    const { productItem, isLoading } = this.state;

    return isLoading ? (
      <Loader />
    ) : (
      <div className="productSinglePage">
        <div className="image-area">
          <img src={image} alt="" />
        </div>
        <div className="content-area">
          <h3 className="title">{productItem.productTitle}</h3>
          {productItem.off > 1 ? (
            <p className="price">
              <s>{productItem.productPrice}</s>
              <span>{productItem.productOffedPrice} تومان</span>
            </p>
          ) : (
            <p className="price">
              <span className="no-offed">
                {productItem.productOffedPrice} تومان
              </span>
            </p>
          )}

          {productItem.off > 1 && (
            <p className="off">{productItem.off}% تخفیف</p>
          )}
          <p className="description">{productItem.productDesc}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductPage);
