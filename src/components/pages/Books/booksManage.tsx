import { useEffect,useState } from "react";
import api from "../../../config";
import type { Book } from "../../../interfaces/book.interface";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../config";


function ManageBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [bookId, setbookId] = useState<number | undefined>(0);
  

  const getBooks = () => {
    api.get("books")
    .then((res) => {
      console.log(res.data);
      setBooks(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  }
  
  useEffect(() => {
    document.title = "Manage books";
    getBooks();
  },[]);
  

  function handleDelete(books_id:any){
   
    api.delete(`delete-book`,{
      params: {
        book_id: books_id,
       
      }
    })
    .then((res) => {
      console.log(res.data);
      getBooks();
    })
    .catch((err) => {
      console.error(err);
    })
  }  
  
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Books /</span> Manage</h4>
      <Link to="/create/book" className="btn btn-primary">Add New</Link>
      <div className="card mt-3">
        <div className="table-responsive px-2">          
            <table  className="table table-striped">
                <thead>
                    <tr>
                       <th>Book Id</th>
                       <th>Cover Photo</th>
                       <th>Title</th>
                       <th>Author</th>
                       <th>Category</th>
                       <th>Isbn</th>
                       <th>Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((item) => (
                             <tr key={item.book_id}>
                                <td>{item.book_id}</td>
                                 <td>
                                    {item.cover_photo ? <img src={baseUrl+item.cover_photo} alt="user" className="square" width="40" /> : null}
                                </td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>{item.category}</td>
                                <td>{item.isbn}</td>
                                <td>{item.available}</td>
                                <td>
                                    <div className="d-flex gap-1">
                                        <Link to={`/book/details/${item.book_id}`} type="button" className="btn btn-icon btn-outline-info">
                                            <span className="tf-icons bx bx-search"></span>
                                        </Link>
                                        <Link to={`/book/edit/${item.book_id}`} type="button" className="btn btn-icon btn-outline-primary">
                                            <span className="tf-icons bx bx-edit"></span>
                                        </Link>
                                        <button type="button" className="btn btn-icon btn-outline-danger" onClick={()=>setbookId(item?.book_id)} data-bs-toggle="modal" data-bs-target="#deleteModal">
                                            <span className="tf-icons bx bx-trash"></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      </div>
    </div>

    {/* Delete modal */}
    <div className="modal" id="deleteModal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <span className="bx bx-trash fs-1 text-danger mb-3"></span>
            <h5 className="text-center mb-0">Are you sure you want to delete?</h5>
          </div>
          <div className="modal-footer justify-content-center">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>handleDelete(bookId)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ManageBooks