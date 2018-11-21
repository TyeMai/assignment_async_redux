require ('es6-promise').polyfill; //why polyfill?
require ('isomorphic-fetch');
require ('dotenv').config();


const express = require ('express');
const app = express()
const util = require("util")
//const xml2js = require('xml2js');
const xmlStringToObj = util.promisify(require('xml2js').parseString)
const GOODREADS_API_KEY = process.env.GOODREADS_API_KEY
const baseUrl = 'https://www.goodreads.com/search/index.xml'
const proxy = require('/Users/tye/assignment_async_redux/client/src/setupProxy.js')
//const proxy = require './setupProxy'
//por to process  but dont want it to be same port as client
app.set('port', (process.env.PORT) || 3000)

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
// app.get('/', (req, res, next) => {
//
// })

app.get('/api/books', (req, res, next) => {
  console.log("Requesting goodreads data...")
  //will need to get form data
//?key=JQ9wNzvcRlgJudmBjEpRGw&q=Ender%27s+Game
  let searchTerm = req.params.serachTerm
  //console.log(serachTerm, "im looking for this earch term")
  fetch(`${baseUrl}?key=${GOODREADS_API_KEY}&q=${title}`)
  .then(checkStatus)
  .then(response => response.text())
  // .then(text => {
  //   console.log(text)
  // })
  .then(xmlStringToObj)
  // .then(responseText => {
  //   //console.log("start of body",response.body, 'im the body', response)
  //   stringToXml(responseText, function(err, result) {
  //     console.log(result.data, "result.data")
  //     // console.log('im parsing stuff xml')
  //     // console.log(result, "line 52")
  //     // //return JSON.stringify(result)
  //     // let newReponse = JSON.stringify(response)
  //     // console.log(newReponse)
  //     //return newReponse
  //   })
  // })
  //was able to do this with promisify we dont need to go into anther level of callback.
  .then((xmlObj,err) => {
    //console.log(result.GoodreadsResponse.book)

      //var bookScrubedData = xmlObj.GoodreadsResponse.book[0]
      var bookScrubedData = xmlObj.GoodreadsResponse.search[0].results[0].work
      //console.log(bookScrubedData, 'bookscrubbed')
      let arrOfBooks = []
      for(let book of bookScrubedData){
        //console.log(book)
        // console.log(book.best_book[0].title[0])
        // console.log(book.best_book[0].author[0].name[0])
        // console.log(book.best_book[0].small_image_url[0])
        //put best_book down here to keep it as an array
        arrOfBooks.push({
        title: book.best_book[0].title[0],
        author: book.best_book[0].author[0].name[0],
        image: book.best_book[0].small_image_url[0] ,
      })
    }
    //console.log(arrOfBooks, 'im the arrOfBooks')
    res.json(arrOfBooks)
  })
  //.then(parseJSON)
  // .then((json) => {
  //   //sending json as the res to the req this is from express
  //   console.log(json)
  //   res.json(json)
  // })
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
//app.use('/api', proxy)
app.use(express.static('./client/build'))

app.listen(app.get('port'), () => {
  console.log(`find the server at ${app.get('port')}`)
})
