import React, { Component } from "react";
import DOMRef from "./DOMRef";

class ComponentRef extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <>
        <DOMRef ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </>
    );
  }
}

export default ComponentRef;
