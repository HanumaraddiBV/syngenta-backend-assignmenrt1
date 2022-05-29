# syngenta-backend-assignmenrt1




# NodeJS secure RESTFUL api

A minimal, secure RESTFUL api for NodeJS. This project includes access control of objects, and crud operation and model!

# Installation

* Clone the repo by using ```git clone```.
* Run ```npm install``` on the cloned directory.


# Running the software

* ```node src/server.js``` for simple setups.

# Adding New Book to the Backend

To add books, simply send a POST to /books/ with the required fields in the req body,

```
http://localhost:4000/books/
```

# To get all books stored in library
To get books, simply send a GET to /books/ with the required fields in the query string, like so:
```
http://localhost:4000/books/
```

# To get all books based on category
To get books, simply send a GET to /books/category/ with the required fields in the query string, like so:
```
http://localhost:4000/books/category?category=fiction
```

# To get all books based on Title
To get books, simply send a GET to /books/title/ with the required fields in the query string, like so:
```
http://localhost:4000/books/title?title=Anna Karenina
```


# To get all books based on Author
To get books, simply send a GET to /books/author/ with the required fields in the query string, like so:
```
http://localhost:4000/books/author?author=Sandesh k
```

# To get status of a particular book 
To get books, simply send a GET to /books/status/ with the required fields in the query string, like so:
```
http://localhost:4000/books/status?title=Atomic Habits
```
# Heroku deployment link
```
https://syngenta-library-assignment.herokuapp.com/books
```

# API Endpoints

```
GET http://localhost:4000/books/
POST http://localhost:4000/books/
GET http://localhost:4000/books/category?category=fiction
GET http://localhost:4000/books/title?title=Anna Karenina
GET http://localhost:4000/books/status?title=Atomic Habits

```
