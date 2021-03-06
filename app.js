const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var books = []

app.post('/api/books', function (req, res) {
  var book = req.body;
  var newBook = {
    "id": books.length + 1,
    "author": book.author,
    "title": book.title,
    "yearPublished": book.yearPublished
  };
  books.push(newBook);
  return res.status(201).send({ ...newBook})
});

app.get('/', function(req, res){
  return res.status(200).send("Welcome to bookshop")
});

app.get('/api/books', function(req, res){
  return res.status(200).send({'books': books.sort(dynamicSort("title"))})
});


app.delete('/api/books', (req, res) => {
  books = []
  res.status(204).send()
})

function dynamicSort(property) {
  return function (a,b) {
    return a[property].localeCompare(b[property]);      
  }
}

module.exports = app;