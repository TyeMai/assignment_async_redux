import React from 'react';
import BookHelper from './BookHelper'

const BooksContent = ({books, filter, onPicClick}) => {
  //console.log(books)
  //console.log(onPicClick, 'im on pickclick')
  //console.log(filter)
  let BookCard

  if (filter === "SHOW_ALL" ){
    BookCard = books.map((book) => (
     //console.log(book.id),
     <BookHelper
       title={book.title}
       author={book.author}
       image={book.image}
       key={book.id}
       onClick={() => onPicClick(book.id)}
     />))
  } else {
    BookCard = books.map((book) => (
     //console.log(book.id),
     <BookHelper
       title={book.title}
       author={book.author}
       image={book.image}
       rating={book.rating}
       key={book.id}
       onClick={() => onPicClick(book.id)}
     />))
  }


  return (
    <div className="BooksContent">
      {BookCard}
    </div>
  )
}

const Books = ({books, isFetching, filter, onPicClick}) => {
console.log()
  return (
    <div className='Books'>

      {
        isFetching
          ? <p>looking for books...</p>
          : <BooksContent books={books} filter={filter} isFetching={isFetching} onPicClick={onPicClick}/>
      }
    </div>
  )
}

export default Books
