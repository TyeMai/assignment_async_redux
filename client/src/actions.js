// export const GET_BY_TITLE = "GET_BY_TITLE";
// export const GET_BY_AUTHOR = "GET_BY_AUTHOR";
export const GET_BOOK_FAILURE = "GET_BOOK_FAILURE";
export const GET_BOOK_SUCCESS = "GET_BOOK_SUCCESS"
export const GET_BOOK_REQUEST = "GET_BOOK_REQUEST"
export const SET_FILTER_BY_ID = "SET_FILTER_BY_ID"

export function getBookSuccess(data) {
  return {type: GET_BOOK_SUCCESS, data}
}

export function getBookFailure(error) {
  return {type: GET_BOOK_FAILURE, error}
}

export function bookRequest(data) {
  return {type: GET_BOOK_REQUEST, data}
}

export function getBookRequest(searchTerm) { //
  // this is the thunk
  return(dispatch) => {
    dispatch(bookRequest())
    if (searchTerm){
      fetch(`/api/books/search?q=${searchTerm}`).then((response) => {
        // we want to make sure that we got an ok response.
        if(!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`)
        }
        //parses the response into json
        return response.json() 
      })
      //were dispatching an action
      .then((data) => {
        dispatch(getBookSuccess(data))
      })
      .catch((error) => {
        console.log('im an error :(')
        dispatch(getBookFailure(error))
      })
    }
  }
}
// this is added for a future filerting feature
export function setFilter(id) {
  console.log('im set filter')
  return {
    type: SET_FILTER_BY_ID,
    data: id,
  }
}
