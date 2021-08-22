import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from "../../components/common/loader";
import { getProductFromApiAction } from "../../store/action";
import "./style.css";

const ProductPage = (props) => {
  const { productItem, isLoading } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    const { params } = match;
    const { productId } = params;

    dispatch(
      getProductFromApiAction(`https://fakestoreapi.com/products/${productId}`)
    );
  }, [props, dispatch]);

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
            <span className="no-offed">{productItem.price} تومان</span>
          </p>
        )}

        {true && <p className="off">20% off</p>}
        <p className="description">{productItem.description}</p>
      </div>
    </div>
  );
};

export default withRouter(ProductPage);
