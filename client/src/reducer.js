import * as Actions from './actions' //what is this?

const initialState = {
  book: {},
  isFetching: false,
  error: null
}

export function getBooks(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_BOOK_SUCCESS:
      return {
        ...state,
        book: action.data,
        isFetching: false
      }
    case Actions.GET_BOOK_REQUEST:
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
