const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/*
app.get("/health", (req, res) => {
  res.status(200).send("Don't panic.");
});
*/


var books = []


app.post('/api/books', function (req, res) {
  var book = req.body;
  print(book)
  var newBook = {
    "id": users.length + 1,
    "author": book.author,
    "title": book.title,
    "yearPublished": book.yearPublished
  };
  books.push(newBook);
  return res.status(200).send('OK').json(newBook);
});


app.get('/api/books', function(req, res){
  return res.status(200).send('OK').json(books);    
});


app.delete('/api/books', (req, res) => {
  books = []
  res.status(204).send("None").json("None")
})

module.exports = app;