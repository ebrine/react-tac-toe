import React, { Component } from 'react';
import $ from 'jquery'

class Cell extends Component {
  constructor() {
    super();
    this.getColor = this.getColor.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
    }
  }
  onClick(event) {
    if (this.props.letter === " " && this.props.canMove) {
      this.props.onClick(event);
    }
  }
  getColor() {
    if (this.props.letter === ' ') {
      return '#B4A7AF'
    }
    else if (this.props.letter === 'x') {
      return '#BECBCD'
    }
    else if (this.props.letter === 'o') {
      return '#96AA8F'
    }
  }

  render() {
    return (
      <div className="cell" id={this.props.num} onClick={this.onClick}
      style={{backgroundColor: this.getColor()}}>
      <h1>{this.props.letter}</h1>
      </div>
    );
  }
}

export default Cell;
