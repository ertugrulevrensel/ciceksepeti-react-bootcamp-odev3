import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="d-flex space-between width90">
        <a href="https://github.com/ertugrulevrensel">
          <i className="c-pointer fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/ertugrulevrensel/">
          <i className="c-pointer fab fa-linkedin fa-2x"></i>
        </a>
      </footer>
    );
  }
}

export default Footer;
