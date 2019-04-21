import * as Actions from './actions' //what is this?
import {combineReducers} from 'redux'

const initialState = {
  book: {},
  isFetching: 'initial',
  error: null
}

function getBooks(state = initialState, action) {
  //console.log(action, "im the fucntion action")
  switch (action.type) {
    case Actions.GET_BOOK_SUCCESS:
      return {
        ...state,
        book: action.data,
        isFetching: false
      }
    case Actions.GET_BOOK_REQUEST:
    //console.log("im in get book reqest reducer")
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case Actions.GET_BOOK_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}

function bookFilter(state='SHOW_ALL', action){
  switch(action.type) {
    case Actions.SET_FILTER_BY_ID:
      return action.data
      default:
      return state
  }
}

export const booksApp = combineReducers({
  bookFilter, getBooks
})
