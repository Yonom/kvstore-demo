import React, { Component } from 'react';
import Header from './Header';
import Selection from './Selection';
import Database from './Database';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    this.forceUpdate();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Selection handleUpdate={this.handleUpdate} />
        <hr />
        <h2>Database</h2>
        <Database />
      </div>
    );
  }
}

export default App;
