import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addProductInCartAction,
  getProductsFromApiAction,
} from "../../../store/action";
import { Link } from "react-router-dom";
import Loader from "../loader";
import "./style.css";
import Toast from "../toast";
import { useState } from "react";

const ProductsList = (props) => {
  const [toggleToast, setToggleToast] = useState(false);
  const [toastType, setToastType] = useState("success");
  const { productsList, isLoading, productsInCart } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsFromApiAction("https://fakestoreapi.com/products"));
  }, [dispatch]);

  const handleAddProductsInCart = (item) => {
    setToggleToast(true);
    if (!productsInCart.includes(item)) {
      dispatch(addProductInCartAction(item));
      setToastType("success");
    } else {
      setToastType("danger");
    }
    setTimeout(() => {
      setToggleToast(false);
    }, 5000);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {productsList.map((item) => {
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
              onClick={() => handleAddProductsInCart(item)}
            >
              افزودن به سبد خرید
            </button>
          </div>
        );
      })}
      {toggleToast && <Toast toastType={toastType} />}
    </>
  );
};

export default ProductsList;
