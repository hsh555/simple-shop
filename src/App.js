import React from "react";
import "./App.css";
import Input from "./components/input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "salam",
      showEl: true,
    };
  }

  handleOnChange = (e) => {
    this.setState(
      {
        inputValue: e.target.value,
      },
      () => console.log(e.target.value)
    );
  };

  handleHideEl = () => {
    this.setState((prevState) => {
      return {
        showEl: !prevState.showEl,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Input
          handleOnChange={this.handleOnChange}
          handleHideEl={this.handleHideEl}
          showEl={this.state.showEl}
        />
      </div>
    );
  }
}

export default App;
