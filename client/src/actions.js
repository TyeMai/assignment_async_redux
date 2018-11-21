// export const GET_BY_TITLE = "GET_BY_TITLE";
// export const GET_BY_AUTHOR = "GET_BY_AUTHOR";
export const GET_BOOK_FAILURE = "GET_BOOK_FAILURE";
export const GET_BOOK_SUCCESS = "GET_BOOK_SUCCESS"
export const GET_BOOK_REQUEST = "GET_BOOK_SUCCESS"

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
  //console.log('im the get book rest action')
  return(dispatch) => { //this is a thunk
    dispatch(bookRequest())
      //console.log(searchTerm, "im in actions serahc term")
    fetch('http://localhost:3000/api/books').then((response) => {
      console.log('im in fetch')
      if(!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
      //console.log(response + 'im in the response from the server clientside')
      return response //or get
    })
    .then((data) => {
      dispatch(getBookSuccess(data))
    })
    .catch((error) => {
      console.log('im an error :()')
      dispatch(getBookFailure(error))
    })
  }

}
