import axios from "axios";

export const fetchBooksAPI = async () => {
    const response = await axios.get(" http://localhost:8080/api/v1/books")
    return response.data
}

export const createBooksAPI = async (book_create) => {
    const response = await axios.post(" http://localhost:8080/api/v1/books", book_create)
    return response.data
}
export const editBookByIDAPI = async (id, book_edit) => {
    const response = await axios.put(`http://localhost:8080/api/v1/books/${id}`, book_edit)
    return response.data
}
export const deleteBookByIDAPI = async (id) => {
    const response = await axios.delete(`http://localhost:8080/api/v1/books/${id}`)
    return response.data
}