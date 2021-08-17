import React from "react";
import Navbar from "../../components/common/navbar";
import ProductsList from "../../components/common/products-list";
import Header from "../../components/layout/header";
import { Route, Switch } from "react-router-dom";
import LoginForm from "../../components/common/login-form";
import RegisterForm from "../../components/common/register-form";
import Container from "../../components/base/container";
import ProfilePage from "../profilePage";
import AboutPage from "../aboutPage";
import AuthRoute from "../../components/common/auth-route";
import ProductPage from "../productPage";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsListInCart: [],
      isAuthenticated: false,
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
          <Route path="/profile">
            <Container>
              <AuthRoute isAuthenticated={this.state.isAuthenticated}>
                <ProfilePage />
              </AuthRoute>
            </Container>
          </Route>
          <Route path="/about-us">
            <Container>
              <AboutPage />
            </Container>
          </Route>
          <Route path="/register">
            <Container>
              <RegisterForm />
            </Container>
          </Route>
          <Route path="/product/:productId">
            <Container>
              <ProductPage />
            </Container>
          </Route>
        </Switch>
      </>
    );
  }
}

export default HomePage;
