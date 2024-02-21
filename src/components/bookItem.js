const BookItem = (props) => {
    const { id, name, description, price, created_at, updated_at } = props.book
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{name}</td>
            <td>{id}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{created_at}</td>
            <td>{updated_at}</td>
            <td>
                <button onClick={() => props.deleteBookByID(id)}>Delete</button>
                <button onClick={() => props.onClickEdit(props.book)}>Edit</button>
            </td>
        </tr>
    )
}
export default BookItem