import { Link, useParams } from "react-router-dom";
import api from "../../../config";
import { useEffect, useState } from "react";
import type { Book } from "../../../interfaces/book.interface";
import bookDefault from "../../../interfaces/book.interface";

function DetailsBook() {
  const [book, setBook] = useState<Book>(bookDefault);
  const { book_id } = useParams();

  useEffect(() => {
    document.title = "Details Books";
    api.get("book?book_id=" + book_id)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [book_id]);

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <Link to="/books/manage" className="text-muted fw-light">Books /</Link> Details
      </h4>
      <div className="card">
        <div className="table-responsive text-nowrap">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Book Id</th>
                <td>{book.book_id}</td>
              </tr>
              <tr>
                <th>Cover Photo</th>
                <td>{book.cover_photo}</td>
              </tr>
              <tr>
                <th>Title</th>
                <td>{book.title}</td>
              </tr>
              <tr>
                <th>Author Id</th>
                <td>{book.author_id}</td>
              </tr>
              <tr>
                <th>Category Id</th>
                <td>{book.category_id}</td>
              </tr>
              <tr>
                <th>Isbn</th>
                <td>{book.isbn}</td>
              </tr>
              <tr>
                <th>Available</th>
                <td>{book.available}</td>
              </tr>
              <tr>
                <th>Created At</th>
                <td>{book.created_at}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetailsBook;