import React from "react";
import "./App.css";
import ComputeLongestWord from "./Components/ComputeLongestWord";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState((prevState) => {
      return {
        show: !prevState.show,
      };
    });
    console.log("called");
  }

  render() {
    return <ComputeLongestWord />;
  }
}
export default App;
