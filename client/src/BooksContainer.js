import React, { Component } from 'react';
import { connect } from 'react-redux'
import Books from './Books'
//import
import { getBookRequest } from './actions'


class BooksContainer extends Component {
  //console.log('im in booksconters')

  // onClick = () => {
  //   console.log('hey onlickc got clicked')
  // }

  componentDidMount() {
   this.props.getBookRequest()
  }

  render() {
    const {books, isFetching, filter} = this.props
    //console.log(getBookRequest)
    console.log(books, "from bookscontainer")
    //console.log(typeof books)
    //console.log(books[0], 'first time of books')
    console.log(isFetching)
    return (
      <div>
      {
        (isFetching === 'initial')
        ? <h1>magic</h1>
        : <Books books={books} isFetching={isFetching} filter={filter}/>

      }
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state, "im the state")
  return {
    books: state.getBooks.book,
    isFetching: state.getBooks.isFetching,
    filter: state.bookFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('im dispathcing!')
  return {
    getBookRequest: () => {
      dispatch(getBookRequest())
    },
    onClick: (e) => {
      dispatch()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)
