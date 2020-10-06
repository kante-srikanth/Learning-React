import React from "react";
import "./App.css";
import FactsWidget from "./Components/FactsWidget";

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
    return <FactsWidget />;
  }
}
export default App;
