import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BooksContainer from './BooksContainer'
import BookSearchContainer from './BookSearchContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <div>
          <BookSearchContainer />
          <BooksContainer />



        </div>
        </header>
      </div>
    );
  }
}

export default App;
