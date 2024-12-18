// src/StyledComponent.js

import React, { Component } from 'react';

class StyledComponent extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome to React</h1>
        <p className="paragraph">
          React is a JavaScript library for building user interfaces. It makes UI creation simple and efficient through reusable components.
        </p>

        {/* Adding HTML-like Elements */}
        <ul className="list">
          <li>Reusable Components</li>
          <li>State Management</li>
          <li>Virtual DOM</li>
        </ul>

        <button className="button">Click Me!</button>
      </div>
    );
  }
}

export default StyledComponent;

