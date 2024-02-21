const express = require("express")
const { createAuthor, getBookByAuthorID } = require("../controller/author.controller")
const AuthorRouter = express.Router()

// POST /api/v1/author: Thêm một author mới vào database.
AuthorRouter.post("/", async (req, res) => {
    const data = await createAuthor(req.body)
    res.status(200).json(data)
})

// GET /api/v1/author/:id/books: trả về danh sách các book theo author
AuthorRouter.get("/:id/books", async (req, res) => {
    const idAuthor = req.params.id
    const data = await getBookByAuthorID(idAuthor)
    res.status(200).json(data)
})

module.exports = AuthorRouter 