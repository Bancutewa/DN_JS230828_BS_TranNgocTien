const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const BooksRouter = require("./src/routes/books.route")
const AuthorRouter = require("./src/routes/authors.router")
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cors())

// App
app.use("/api/v1/books", BooksRouter)
app.use("/api/v1/author", AuthorRouter)

app.listen(8080, () => console.log("Server is running"))