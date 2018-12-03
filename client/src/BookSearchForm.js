import React from 'react'
//import PropTypes from 'prop-types'
import Input from './Input'
import InputGroup from './InputGroup'
import Button from './Button'

const SearchBook = ({onSubmit}) => (
  <form className="formContainer" onSubmit={onSubmit} >
    <h1 className="searchBook">Search for a book</h1>
    <InputGroup searchTerm="searchTerm" labelText="Search Term ">
      <Input name="searchTerm" />
    </InputGroup>
    <Button type="submit" color="primary" className='searchButton'>Search</Button>
  </form>
)

// AddPuppy.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }

export default SearchBook
