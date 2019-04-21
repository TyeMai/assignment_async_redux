import React from 'react';

const Book = (props) => {
  const {title, author, image, rating, onClick}  = props

  if (rating){
    return (
      <div className="BookCard">
        <a href='#' className="bookButton" onClick={onClick}><img className='bookImg' src={image} alt={title} /></a>
        <p>Title: {title} </p>
        <p>Author: {author}</p>
        <p>Ave Rating: {rating}</p>
      </div>

    )

  } else {
    return (
      <div className="BookCard">
        <a href='#' className="bookButton" onClick={onClick}><img className='bookImg' src={image} alt={title} /></a>
        <p>Title: {title} </p>
        <p>Author: {author}</p>
      </div>

    )
  }



}

export default Book
