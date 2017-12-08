import React, { Component } from 'react';

class Cell extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      // letter: ' ',
    }
  }
  onClick() {
    if (this.state.letter = " ") {
      this.setState({ letter: "K" });
      this.props.onClick(this);
    }
  }
  render() {
    return (
      <div className="cell" id={this.props.num} onClick={this.onClick}>
      <h1>{this.props.letter}</h1>
      </div>
    );
  }
}

export default Cell;
