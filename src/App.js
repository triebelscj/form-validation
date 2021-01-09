import React, { Component } from 'react';
import Form from './components/Form'
import './App.css';

class App extends Component {
  state = {
    visable: true
  };

  render() {
    return (
      <div className="App" >
        <Form />
      </div>
    );
  }
}

export default App;
