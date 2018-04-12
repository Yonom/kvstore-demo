import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="blog-header py-3">
        <div className="row align-items-end">
          <div className="col-4 text-left">
          </div>
          <div className="col-4 text-center">
            <span className="blog-header-logo text-dark">LocalStorage Demo</span>
          </div>
          <div className="col-4 text-right logo">            
          </div>
        </div>
      </header>
    );
  }
}

export default Header;