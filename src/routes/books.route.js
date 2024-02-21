const express = require("express")
const { getAllBooks, getBookByName, getBookByID, createBook, editBookById, deleteBookById, getBookPriceMinMax, getAllBooksAscPrice, getAllBooksDescPrice } = require("../controller/books.controller")
const BooksRouter = express.Router()


// GET /api/v1/books: Trả về danh sách tất cả các books
BooksRouter.get("/", async (req, res) => {
    const data = await getAllBooks()
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json("Can't fetch Data")
    }
})

// API tìm kiếm book theo tên (giá trị tìm kiếm có trong name của book)
BooksRouter.get("/query/name", async (req, res) => {
    const queryName = req.query.name
    const data = await getBookByName(queryName)
    res.status(200).json(data)
})

// GET /api/v1/books/:id: Trả về thông tin một record của book
BooksRouter.get("/:id", async (req, res) => {
    const idBook = req.params.id
    const data = await getBookByID(idBook)
    res.status(200).json(data)
})

// POST /api/v1/book: Thêm một book mới vào database.
// Validation:
// - Dữ liệu không được để trống
// - Name không lưu quá 50 ký tự
// - Description không nhập lưu quá 200 kí tự
// *Trường thông tin created_at được lưu khi tạo mới
BooksRouter.post("/", async (req, res) => {
    const { name, description, price } = req.body
    console.log(name);
    if (name.length == 0 || description.length == 0 || price.length == 0) {
        res.status(404).json("Dữ liệu không được để trống")
        return
    } else if (name.length > 50) {
        res.status(404).json("Name không lưu quá 50 ký tự")
        return
    } else if (description.length > 200) {
        res.status(404).json("Description không lưu quá 200 ký tự")
        return
    }
    const data = await createBook(req.body)
    res.status(200).json(data)


})

// PUT / api / v1 / book /: id: Cập nhật thông tin một book cụ thể  dựa trên id.
// * Trường thông tin updateted_at được lưu mới khi cập nhật thông tin
BooksRouter.put("/:id", async (req, res) => {
    const data = await editBookById(req.params.id, req.body)
    res.status(200).json("Thanh Cong")
})

// DELETE /api/v1/book/:id: Xóa một book cụ thể của người dùng dựa trên id.
BooksRouter.delete("/:id", async (req, res) => {
    const data = await deleteBookById(req.params.id)
    res.status(200).json("Thanh Cong")
})

// API: Trả về danh sách book theo khoảng giá
BooksRouter.get("/query/price", async (req, res) => {
    const min = req.query.min
    const max = req.query.max
    console.log(req.query);
    const data = await getBookPriceMinMax(min, max)
    res.status(200).json(data)
})


// API: Trả về danh sách book được sắp theo giá tăng dần và giảm dần
BooksRouter.get("/query/orderby", async (req, res) => {
    if (req.query.orderby == 'asc') {
        const data = await getAllBooksAscPrice()
        res.status(200).json(data)
    } else if (req.query.orderby == 'desc') {
        const data = await getAllBooksDescPrice()
        res.status(200).json(data)
    }
})

module.exports = BooksRouter 