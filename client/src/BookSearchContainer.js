// Import the connect function from React-Redux
import {connect} from 'react-redux'
// Import serialize to get the serialized form data
import serialize from 'form-serialize'
//Import the createPuppy action creator
import {getBookRequest} from './actions'
// Import the presentational component
import BookSearchForm from './BookSearchForm'

//import {createItem} from "../actions"


// Map dispatch to props to create a submit function that
// dispatches creating a puppy

const mapStateToProps = (state) => {
  //console.log(state)
  return state
}
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    onSubmit: (e) => {
      e.preventDefault()
      const form = e.target
      const data = serialize(form, {hash: true})
      console.log(data.searchTerm , 'im the form data!')
      dispatch(getBookRequest(data.searchTerm))
      form.reset()
    }
  }
}

// Generate the AddPuppyContainer which renders AddPuppy
// with all the new props. We don't need to map state to
// props so we just send `null` in its place.
const BookSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookSearchForm)

export default BookSearchContainer
