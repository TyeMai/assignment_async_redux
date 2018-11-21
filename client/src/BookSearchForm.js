import React from 'react'
//import PropTypes from 'prop-types'
import Input from './Input'
import InputGroup from './InputGroup'
import Button from './Button'

const SearchBook = ({onSubmit}) => (
  <form className="container" onSubmit={onSubmit} >
    <h1>Search for a book <span className="glyphicon glyphicon-search" aria-hidden="true"></span></h1>
    <InputGroup searchTerm="searchTerm" labelText="Search Term ">
      <Input name="searchTerm" />
    </InputGroup>
    <Button type="submit" color="primary">Search</Button>
  </form>
)

// AddPuppy.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }

export default SearchBook
