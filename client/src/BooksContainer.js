import React, { Component } from 'react';
import { connect } from 'react-redux'
import Books from './Books'
//import
import { getBookRequest } from './actions'


class BooksContainer extends Component {
  //console.log('im in booksconters')
  componentDidMount() {
   this.props.getBookRequest()
  }

  render() {
    const {books, isFetching} = this.props
    return (
      <Books books={books} isFetching={isFetching} />)
  }
}

const mapStateToProps = (state) => {
  console.log(state, "im the staet")
  return {
    books: state.json,
    // isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('im dispathcing!')
  return {
    getBookRequest: () => {
      dispatch(getBookRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)
