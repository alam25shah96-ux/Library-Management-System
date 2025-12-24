import { Link, useParams } from "react-router-dom";
import api from "../../../config";
import { useEffect, useState } from "react";
import type { Author } from "../../../interfaces/author.interface";
import authorDefault from "../../../interfaces/author.interface";

function EditAuthor() {
     const params = useParams();
    const [author, setAuthor] = useState<Author>(authorDefault);
   

    useEffect(() => {
        document.title = "Edit Authors";
        getDataById();
    }, []);

    const getDataById = () => {
         api.get(`author?id=${params.id}`)
        .then((res) => {
            setAuthor(res.data);      
        })
        .catch((err) => {
            console.error(err);
        });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        api.put(`edit-author`, author)
        .then((res) => {
            console.log(res.data);
             alert("Data updated");
        })
        .catch((err) => {
            console.error(err);
        });
    };
    return (
        <>
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">
            <Link to="/author/manage" className="text-muted fw-light">Authors /</Link> Edit
          </h4>
          <div className="card mt-3">
            <h5 className="card-header">Edit Authors</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="name" className="form-control"
                        value={author.name}
                        onChange={(e) => setAuthor({...author, name: e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date Of Birth</label>
                        <input type="text" name="date_of_birth" className="form-control"
                        value={author.date_of_birth}
                        onChange={(e) => setAuthor({...author, date_of_birth: e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nationality</label>
                        <input type="text" name="nationality" className="form-control"
                        value={author.nationality}
                        onChange={(e) => setAuthor({...author, nationality: e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Created At</label>
                        <input type="text" name="created_at" className="form-control"
                        value={author.created_at}
                        onChange={(e) => setAuthor({...author, created_at: e.target.value})} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
          </div>
        </div>
        </>
    );
}

export default EditAuthor;