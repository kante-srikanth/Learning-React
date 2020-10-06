import { render } from "@testing-library/react";
import React from "react";

class CallbackRef extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = null;

    this.setInputRef = (element) => {
      this.inputRef = element;
    };
  }

  focusInputHandler = () => {
    this.inputRef.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.setInputRef} />
        <button onClick={this.focusInputHandler}>Focus Input</button>
      </div>
    );
  }
}

export default CallbackRef;
