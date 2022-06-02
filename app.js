const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var books = []

app.post('/api/books', function (req, res) {
  var book = req.body;
  console.log('book');
  console.log(book);
  var newBook = {
    "id": books.length + 1,
    "author": book.author,
    "title": book.title,
    "yearPublished": book.yearPublished
  };
  books.push(newBook);
  return res.status(200).send({ "HTTP Status": '201 Created',  "Response Body (JSON)": newBook})
});

app.get('/', function(req, res){
  return res.status(200).send("Welcome to bookshop")
});

app.get('/api/books', function(req, res){
  return res.status(200).send({ "HTTP Status": '201 Created',  "Response Body (JSON)": books})
});


app.delete('/api/books', (req, res) => {
  books = []
  res.status(204).send({ "HTTP Status": '204 (No Content)',  "Response Body (JSON)": "None"})
})

module.exports = app;