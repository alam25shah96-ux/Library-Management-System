import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../../config'
import type { Cate } from "../../../interfaces/category.interface";

function ManageCategories() {
    const [categories, setCategories] = useState<Cate[]>([]);
    const [categoryId, setCategoryId] = useState<number | null>(null);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        api.get(`categories`) 
        .then((res) => {
            console.log(res.data);
            setCategories(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    }

    const handleDelete = (id: number | null) => {
        if (id === null) return;

        api.delete(`delete-category?id=${id}`)
        .then((res) => {
            console.log(res.data);
            getCategories();
        })
        .catch((err) => {
            console.error(err);
        });
    }

    return (
        <>
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4">
                <span className="text-muted fw-light">Categories /</span> Manage
            </h4>
            <Link to="/category/create/" className="btn btn-primary">Add New</Link>

            <div className="card mt-3">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map((item) =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <div className="d-flex gap-1">
                                                <Link to={`/category/details/${item.id}`} className="btn btn-icon btn-outline-info">
                                                    <span className="tf-icons bx bx-search"></span>
                                                </Link>
                                                <Link to={`/category/edit/${item.id}`} className="btn btn-icon btn-outline-primary">
                                                    <span className="tf-icons bx bx-edit"></span>
                                                </Link>
                                                <button type="button" className="btn btn-icon btn-outline-danger" onClick={() => setCategoryId(item.id)} data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                    <span className="tf-icons bx bx-trash"></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

       
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
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(categoryId)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ManageCategories
