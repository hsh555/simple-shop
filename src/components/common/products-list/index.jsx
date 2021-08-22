import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductsFromApiAction } from "../../../store/action";
import { Link } from "react-router-dom";
import Loader from "../loader";
import "./style.css";

const ProductsList = (props) => {
  const { productsList, isLoading } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsFromApiAction("https://fakestoreapi.com/products"));
  }, [dispatch]);

  const handleUpdateProductsInCart = (item) => {
    props.handleUpdateProductsInCart(item);
  };

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
            onClick={() => handleUpdateProductsInCart(item)}
          >
            افزودن به سبد خرید
          </button>
        </div>
      );
    })
  );
};

export default ProductsList;
