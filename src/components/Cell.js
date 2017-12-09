import React, { Component } from 'react';
import $ from 'jquery'

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
      $(`#${event.target.id}`).css('color', 'red')
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
