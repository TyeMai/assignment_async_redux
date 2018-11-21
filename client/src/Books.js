import React from 'react';

const BooksContent = ({books, isFetching}) => {
  console.log(books)
  return (
    <div className="BooksContent">
      <h2>Book:</h2>
        {/* <h3>{books.description}</h3> */}
      {/* <h3>{books.title}</h3>
      <h3>{books.description}</h3>
      <img src={books.url} alt={books.title}/> */}
    </div>
  )
}
const Books = ({books, isFetching}) => {
  return (
  <div className='Books'>
    <h1>Your Books</h1>
    {isFetching ? <p>Loading ho!</p>:<BooksContent books={books}/>}
  </div>)
}

export default Books
