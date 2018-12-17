import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark">
        <a href="" className="nav-link text-white">
          { this.props.titulo }
        </a>
      </nav>
    )
  }
}

export default Navigation;
