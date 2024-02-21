const connection = require("../config/db.config")


const createAuthor = (body) => {
    const { name, biography } = body


    const query = `insert into author (name, biography ) 
                    values ('${name}','${biography}')`
    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })

    return resultQuery
}

const getBookByAuthorID = (id) => {
    const query = `Select * from author where id = '${id}'`
    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })
    return resultQuery
}


module.exports = { createAuthor, getBookByAuthorID }
