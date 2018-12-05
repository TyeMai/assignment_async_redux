import React, { Component } from 'react';
import { connect } from 'react-redux'
import Books from './Books'
//import
import { getBookRequest, setFilter } from './actions'


class BooksContainer extends Component {
  //console.log('im in booksconters')

  // onClick = () => {
  //   console.log('hey onlickc got clicked')
  // }

  componentDidMount() {
   this.props.getBookRequest()
  }

  render() {
    const {books, isFetching, filter, onPicClick} = this.props
    //console.log(getBookRequest)
    //console.log(books, "from bookscontainer")
    //console.log(typeof books)
    //console.log(books[0], 'first time of books')
    //console.log(isFetching)
    return (
      <div>
      {
        (isFetching === 'initial')
        ? <h1>magic</h1>
        : <Books books={books} isFetching={isFetching} filter={filter} onPicClick={onPicClick}/>

      }
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state, "im the state")
 //set books here.
 let booksToShow;
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
  //console.log('im dispathcing!')
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
