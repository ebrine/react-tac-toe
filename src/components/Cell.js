import React, { Component } from 'react';

class Cell extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      letter: ' ',
    }
  }
  onClick() {
    if (this.state.letter = " ") {
      this.setState({ letter: "K" });
    }
  }
  render() {
    return (
      <div className="cell" id={this.props.num} onClick={this.onClick}>
      <h1>{this.state.letter}</h1>
      </div>
    );
  }
}

export default Cell;
