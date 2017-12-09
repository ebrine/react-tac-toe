import React, { Component } from 'react';

class Cell extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
    }
  }
  onClick(event) {
    if (this.props.letter === " " && this.props.canMove) {
      this.props.onClick(event);
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
