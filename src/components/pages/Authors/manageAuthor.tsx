import { useEffect, useState } from "react";
import api from "../../../config";
import type { Author } from "../../../interfaces/author.interface";
import { Link } from "react-router-dom";

function ManageAuthor() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [authorId, setAuthorId] = useState<number | undefined>(0);


  const getAuthors = () => {
    api.get("authors")
    .then((res) => {
      console.log(res.data);
      setAuthors(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  useEffect(() => {
    document.title = "Manage Authors";
    getAuthors();
  }, []);

  function handleDelete(id: number) {
    api.delete(`delete-author`, {
      params: {
        id: id,
      }
    })
    .then((res) => {
      console.log(res.data);
      alert("Delete success");
      getAuthors();
    })
    .catch((err) => {
      console.error(err);
    });
  }

  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><Link to="/authors" className="text-muted fw-light">Authors </Link> / Manage</h4>
      <Link to="/authors/create/" className="btn btn-primary">Add New</Link>
      <div className="card mt-3">
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                       <th>Id</th>
                       <th>Name</th>
                       <th>Date Of Birth</th>
                       <th>Nationality</th>
                       <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.date_of_birth}</td>
                                <td>{item.nationality}</td>
                                <td>{item.created_at}</td>
                                <td>
                                    <div className="d-flex gap-1">
                                        <Link to={`/authors/details/${item.id}`} className="btn btn-icon btn-outline-info">
                                            <span className="tf-icons bx bx-search"></span>
                                        </Link>
                                        <Link to={`/authors/edit/${item.id}`} className="btn btn-icon btn-outline-primary">
                                            <span className="tf-icons bx bx-edit"></span>
                                        </Link>
                                        <button type="button" className="btn btn-icon btn-outline-danger" onClick={() => setAuthorId(item?.id)} data-bs-toggle="modal" data-bs-target="#deleteModal">
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
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(authorId!)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ManageAuthor;