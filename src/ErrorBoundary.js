import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error: true };
  }
  retryHandler() {
    window.location.reload();
  }
  componentDidCatch(error, info) {
    this.setState({
      error: error,
    });
    // console.log(error);
    // console.log(info);
  }
  render() {
    if (this.state.error) {
      return (
        <div className="d-flex justify-content-center align-item-center">
          <h1 className="text-center">
            {" "}
            <span>404</span>
            <br />
            Something went Wrong
            <br />
            <button onClick={this.retryHandler}>Refresh</button>
          </h1>
        </div>
      );
    }
    // console.log(this.props.children);
    return this.props.children;
  }
}
export default ErrorBoundary;
