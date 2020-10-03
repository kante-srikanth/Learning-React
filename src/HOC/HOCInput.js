import React from "react";

const hOCInput = (WrappedComponent) => {
  class HOCInput extends React.Component {
    constructor(props) {
      super(props);
      this.componentRef = React.createRef();
      this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
      // console.log(this.componentRef);
      this.componentRef.current.focus();
    }

    render() {
      return (
        <WrappedComponent
          ref={this.componentRef}
          onClickHandler={this.clickHandler}
        />
      );
    }
  }
  return HOCInput;
};
export default hOCInput;
