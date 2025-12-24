import { Link, useParams } from "react-router-dom";
import api from "../../../config";
import { useEffect, useState } from "react";
import type { Author } from "../../../interfaces/author.interface";
import authorDefault from "../../../interfaces/author.interface";

function DetailsAuthor() {
  const [author, setAuthor] = useState<Author>(authorDefault);
  const { id } = useParams();

  useEffect(() => {
    document.title = "Details Authors";
    api.get("authr?id=" + id)
      .then((res) => {
        setAuthor(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <Link to="/author/manage" className="text-muted fw-light">Authors /</Link> Details
      </h4>
      <div className="card">
        <div className="table-responsive text-nowrap">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Id</th>
                <td>{author.id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{author.name}</td>
              </tr>
              <tr>
                <th>Date Of Birth</th>
                <td>{author.date_of_birth}</td>
              </tr>
              <tr>
                <th>Nationality</th>
                <td>{author.nationality}</td>
              </tr>
              <tr>
                <th>Created At</th>
                <td>{author.created_at}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetailsAuthor;