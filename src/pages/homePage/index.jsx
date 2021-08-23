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
import NotFound from "../../components/common/not-found";

const HomePage = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Switch>
        <Route exact path="/">
          <Container>
            <ProductsList />
          </Container>
        </Route>
        <Route exact path="/login">
          <Container>
            <LoginForm />
          </Container>
        </Route>
        <Route exact path="/profile">
          <Container>
            <AuthRoute isAuthenticated={false}>
              <ProfilePage />
            </AuthRoute>
          </Container>
        </Route>
        <Route exact path="/about-us">
          <Container>
            <AboutPage />
          </Container>
        </Route>
        <Route exact path="/register">
          <Container>
            <RegisterForm />
          </Container>
        </Route>
        <Route exact path="/product/:productId">
          <Container>
            <ProductPage />
          </Container>
        </Route>
        <Route path="*">
          <Container>
            <NotFound />
          </Container>
        </Route>
      </Switch>
    </>
  );
};

export default HomePage;
