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
          <h1>im a book!!</h1>
          <BooksContainer />
          <BookSearchContainer />
        </div>
        </header>
      </div>
    );
  }
}

export default App;
