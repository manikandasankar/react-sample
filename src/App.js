import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.App = this;
  }

  increamentFn = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <div>Hello World!!! {count}</div>
        <button onClick={this.increamentFn}>counter</button>
      </div>
    );
  }
}
export default App;
