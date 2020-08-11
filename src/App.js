import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header';
import Container from "./component/Container";

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header/>
        <Container/>
      </main>
    );
  }
}

export default App;
