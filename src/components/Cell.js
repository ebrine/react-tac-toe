import React, { Component } from 'react';

class Cell extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="cell" id={this.props.num} onClick={this.props.onClick}>
      </div>
    );
  }
}

export default Cell;
