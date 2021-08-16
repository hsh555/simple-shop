import React from "react";
import Navbar from "../../components/common/navbar";
import ProductsList from "../../components/common/product-list";
import Header from "../../components/layout/header";
import { Route, Switch } from "react-router-dom";
import LoginForm from "../../components/common/login-form";
import Container from "../../components/base/container";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsListInCart: [],
    };
  }

  updateProductsInCart = (productItem) => {
    if (!this.state.productsListInCart.includes(productItem)) {
      this.setState((prevState) => {
        return {
          productsListInCart: [...prevState.productsListInCart, productItem],
        };
      });
    }
  };

  removeProductsInCart = (productItem) => {
    const newList = this.state.productsListInCart.filter((item) => {
      return item.id !== productItem.id;
    });

    this.setState({
      productsListInCart: newList,
    });
  };

  render() {
    return (
      <>
        <Header>
          <Navbar
            productsCount={this.state.productsListInCart.length}
            productsListInCart={this.state.productsListInCart}
            handleRemoveFromCart={this.removeProductsInCart}
          />
        </Header>
        <Switch>
          <Route exact path="/">
            <Container>
              <ProductsList
                handleUpdateProductsInCart={this.updateProductsInCart}
              />
            </Container>
          </Route>
          <Route path="/login">
            <Container>
              <LoginForm />
            </Container>
          </Route>
        </Switch>
        {/* <ProductsList handleUpdateProductsInCart={this.updateProductsInCart} /> */}
      </>
    );
  }
}

export default HomePage;
