import React, { Component } from 'react';
import { connect } from 'react-redux'
import Books from './Books'
import { getBookRequest, setFilter } from './actions'


class BooksContainer extends Component {
  // onClick = () => {
  //   console.log('hey onlickc got clicked')
  // }

  // componentDidMount() {
  //  //this.props.getBookRequest()
  // }

  render() {
    const {books, isFetching, filter, onPicClick} = this.props
    return (
      <div>
      {
        //while the request is being made, "looking for books" will show up in the browser
        //once the request is complete the books should show up.
        (isFetching === 'initial')
        ? null
        : <Books books={books} isFetching={isFetching} filter={filter} onPicClick={onPicClick}/>

      }
    </div>
    )
  }
}

const mapStateToProps = (state) => {
 //console.log(state, "im the state")
 let booksToShow;
 //if a book is clicked on, all other books will be filterd out
 if (state.bookFilter === "SHOW_ALL"){
   booksToShow = state.getBooks.book
 } else {
   booksToShow = state.getBooks.book.filter(book => book.id === state.bookFilter)
 }
  return {
    books: booksToShow,
    isFetching: state.getBooks.isFetching,
    filter: state.bookFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBookRequest: () => {
      dispatch(getBookRequest())
    },
    onPicClick: (id) => {
      //e.preventDefault
      //console.log('onpickclick done!!', id)
      dispatch(setFilter(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)
