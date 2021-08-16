import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class RouteHandler extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about/me">About Me</Link>
          <Switch>
            <Route
              exact
              path="/about"
              render={(routeProps) => (
                <About someProps={"Hello Page!"} routeProps={routeProps} />
              )}
            />
            <Route path="/profile" component={Profile} />
            <Route path="/about/me" component={AboutMe} />
          </Switch>
        </Router>
      </div>
    );
  }
}

class About extends React.Component {
  handleOnClick = () => {
    //   console.log(this.props.history)
    const { history } = this.props.routeProps;
    history.goBack();
  };

  render() {
    return (
      <React.Fragment>
        <p>About Page</p>
        <p>{this.props.someProps}</p>
        <button onClick={this.handleOnClick}>go forward</button>
        {console.log(this.props.routeProps)}
      </React.Fragment>
    );
  }
}

class Profile extends React.Component {
  render() {
    return <p>Profile Page</p>;
  }
}

class AboutMe extends React.Component {
  render() {
    return <p>About Me Page</p>;
  }
}

export default RouteHandler;
