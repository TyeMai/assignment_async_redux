import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//this will contain the results after a search
import BooksContainer from './BooksContainer'
//imports the container for the search form and search button
import BookSearchContainer from './BookSearchContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

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
