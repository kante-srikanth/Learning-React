import React, { Component } from "react";
import DOMRef from "./DOMRef";

class ForwardRef extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focus();
  };

  render() {
    return (
      <>
        <DOMRef ref={this.componentRef} />
        <button onClick={this.clickHandler}>
          Focus Input using forward ref
        </button>
      </>
    );
  }
}

export default ForwardRef;
