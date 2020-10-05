import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Body from './components/Body';

class App extends Component {
  render() {
    return <main className="app">
      <header>
        <Header />
      </header>
      <hr />
      <Body />
    </main>;
  }
}

export default App;
