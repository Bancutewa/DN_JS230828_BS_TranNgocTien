import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { createBooksAPI, deleteBookByIDAPI, editBookByIDAPI, fetchBooksAPI } from './api/books.api';
import BookItem from './components/bookItem';

function App() {

  // UseRef
  const idRef = useRef()
  const nameRef = useRef()
  const descriptionRef = useRef()
  const priceRef = useRef()


  // UseState
  const [books, setBooks] = useState([])


  const fetchBooks = async () => {
    const data = await fetchBooksAPI()
    setBooks(data)
  }

  // Init Value
  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async () => {
    const name = nameRef.current.value
    const description = descriptionRef.current.value
    const price = priceRef.current.value

    if (name.length == 0 || description.length == 0 || price.length == 0) {
      alert("Dữ liệu không được để trống")
      return
    } else if (name.length > 50) {
      alert("Name không lưu quá 50 ký tự")
      return
    } else if (description.length > 200) {
      alert("Description không lưu quá 200 ký tự")
      return
    }
    const new_book = {
      name,
      description,
      price
    }
    await createBooksAPI(new_book)
    alert("Đã thêm mới book");
    fetchBooks()
  }
  const clearForm = () => {
    idRef.current = ""
    nameRef.current.value = ""
    descriptionRef.current.value = ""
    priceRef.current.value = ""
  }
  const onClickEdit = (user) => {
    const { id, name, description, price } = user
    idRef.current = id
    nameRef.current.value = name
    descriptionRef.current.value = description
    priceRef.current.value = price
  }
  const editBook = async () => {
    const name = nameRef.current.value
    const description = descriptionRef.current.value
    const price = priceRef.current.value
    if (name.length == 0 || description.length == 0 || price.length == 0) {
      alert("Dữ liệu không được để trống")
      return
    } else if (name.length > 50) {
      alert("Name không lưu quá 50 ký tự")
      return
    } else if (description.length > 200) {
      alert("Description không lưu quá 200 ký tự")
      return
    }
    const book = {
      id: idRef.current,
      name,
      description,
      price
    }
    alert("Đã sửa book có Id " + idRef.current);
    await editBookByIDAPI(book.id, book)
    fetchBooks()
  }
  const deleteBookByID = async (id) => {
    await deleteBookByIDAPI(id)
    alert("Đã xoá book có ID " + id);
    fetchBooks()
  }
  return (
    <div className="App">
      <div className='ListUser'>
        <div >
          <label for="nameBook">Name</label><br />
          <input type="text" id="nameBook" name="nameBook" ref={nameRef} /><br />
          <label for="desCriptionBook">Description</label><br />
          <input type="text" id="desCriptionBook" name="desCriptionBook" ref={descriptionRef} />
          <label for="priceBook">Price</label><br />
          <input type="text" id="priceBook" name="priceBook" ref={priceRef} />
          <div className='action'>
            <input type='submit' onClick={createBook} value={"Tao Book"} />
            <input type='submit' onClick={editBook} value={"Sua Book"} />
            <input type='submit' onClick={clearForm} value={"Clear Form"} />
          </div>
        </div>
        <table >
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>BookID</th>
            <th>Description</th>
            <th>Price</th>
            <th>Create At</th>
            <th>Updated At</th>
            <th>Action</th>
          </tr>
          {books.map((book, index) => {
            return <BookItem index={index} book={book} deleteBookByID={deleteBookByID} onClickEdit={onClickEdit} />
          })}

        </table>
      </div>
    </div>
  );
}

export default App;
