require ('es6-promise').polyfill; //why polyfill?
require ('isomorphic-fetch');
require ('dotenv').config();


const express = require ('express');
const app = express()
const util = require("util")
const xmlStringToObj = util.promisify(require('xml2js').parseString)
const GOODREADS_API_KEY = process.env.GOODREADS_API_KEY
const baseUrl = 'https://www.goodreads.com/search/index.xml'

//por to process  but dont want it to be same port as client
app.set('port', (process.env.PORT) || 5000)

//if in procuding want to use static build folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

//route and listening
//extract checing thee status of response
function checkStatus(response) {
  //so if not in 200range
  if (!response.ok) {
    const error = new Error(response.statesText)
    error.response = response
    throw error
    //will use this in fetch statement
  }
  //console.log(response)
  return response
}

// extrast fetchs json parsing function for reuse
//this is from fetch api
function parseJSON(response) {
  return response.json()
}


let title = 'becoming'
// next is for error handingling

app.get('/api/books/search', (req, res, next) => {

  console.log("Requesting goodreads data...")
  const searchTerm = req.query.q || title
  //if
  //will need to get form data
  //let searchTerm = req.params.searchTerm
  //console.log(serachTerm, "im looking for this earch term")
  fetch(`${baseUrl}?key=${GOODREADS_API_KEY}&q=${searchTerm}`)
  .then(checkStatus)
  .then(response => response.text())
  .then(xmlStringToObj)
  //was able to do this with promisify we dont need to go into anther level of callback.
  .then((xmlObj,err) => {
    //console.log(result.GoodreadsResponse.book)

      //var bookScrubedData = xmlObj.GoodreadsResponse.book[0]
      var bookScrubedData = xmlObj.GoodreadsResponse.search[0].results[0].work
      //console.log(xmlObj.GoodreadsResponse.search[0].results[0].work[0].best_book[0].id[0]._ , 'im the id')
      console.log(bookScrubedData[0].best_book, 'bookscrubbed')
      let arrOfBooks = []
      for(let book of bookScrubedData){
        //put best_book down here to keep it as an array
        arrOfBooks.push({
        title: book.best_book[0].title[0],
        author: book.best_book[0].author[0].name[0],
        image: book.best_book[0].image_url[0] ,
        rating: book.average_rating[0],
        id: book.best_book[0].id[0]._
      })
    }
    res.json(arrOfBooks)
  })
  .catch((error) => {
    next(error)
  })
})

function errorHandler(err,req, res, next) {
  console.error(`Error" ${err.stack}`)
  res.status(err.response ? err.response.status : 500)
  res.json({error: err.message})
}

app.use(errorHandler)


app.listen(app.get('port'), () => {
  console.log(`find the server at ${app.get('port')}`)
})
