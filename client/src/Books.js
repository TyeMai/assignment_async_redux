import React from 'react';
import BookHelper from './BookHelper'

const BooksContent = ({books}) => {
  //console.log(books)
  const BookCard = books.map((book) => (<BookHelper title={book.title} author={book.author} image={book.image} rating={book.rating} key={book.id} onClick={() => setFilter(book.id)}/>))

  return (
    <div className="BooksContent">
      {BookCard}
    </div>
  )

}

const Books = ({books, isFetching, filter}) => {
console.log()
  return (
    <div className='Books'>

      {
        isFetching
          ? <p>looking for books...</p>
          : <BooksContent books={books} isFetching={isFetching}/>
      }
    </div>
  )
}

export default Books
