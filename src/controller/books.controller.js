const connection = require("../config/db.config")
const dayjs = require("dayjs")


const getAllBooks = () => {
    const query = "Select * from Books"

    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })
    return resultQuery
}
const getBookByName = (book_name) => {
    const query = `Select * from Books where name like '%${book_name}%'`

    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })
    return resultQuery
}
const getBookByID = (id) => {
    const query = `Select * from Books where id = '${id}'`

    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })
    return resultQuery
}
// 
const createBook = (body) => {
    const { name, description, price } = body
    const date = dayjs();
    const day = date.format("YYYY-MM-DD hh-mm:ss")
    console.log(day);

    const query = `insert into Books (name, description, price,created_at,updated_at ) 
                    values ('${name}','${description}','${price}','${day}','${day}')`
    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })

    return resultQuery
}
const editBookById = (id, body) => {
    const { name, description, price } = body
    const date = dayjs();
    const day = date.format("YYYY-MM-DD hh:mm:ss")
    console.log(day);

    const query = `UPDATE Books
                SET name = '${name}',
                    description = '${description}',
                    price = '${price}', 
                    updated_at = '${day}'
                    WHERE id = ${id};`
    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })

    return resultQuery
}


const deleteBookById = (id) => {
    const query = `DELETE FROM Books WHERE id = ${id};`
    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })
    return resultQuery
}

const getBookPriceMinMax = (min, max) => {
    const query = `Select * FROM Books WHERE price BETWEEN  ${min} AND ${max} ;`
    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            console.log(error);
            resolve(results)
        })
    })
    return resultQuery
}
const getAllBooksDescPrice = () => {
    const query = "Select * from Books order by price DESC  "

    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })
    return resultQuery
}
const getAllBooksAscPrice = () => {
    const query = "Select * from Books order by price ASC  "

    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })
    return resultQuery
}
module.exports = { getAllBooks, getBookByName, getBookByID, createBook, editBookById, deleteBookById, getBookPriceMinMax, getAllBooksDescPrice, getAllBooksAscPrice }
