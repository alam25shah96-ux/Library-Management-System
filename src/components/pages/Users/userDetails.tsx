import { Link, useParams } from "react-router-dom";
import api from "../../../config";
import { useEffect, useState } from "react";
import type { User } from "../../../interfaces/user.interface";
import userDefault from "../../../interfaces/user.interface";

function UserDetails() {
  const [user, setUser] = useState<User>(userDefault);
  const { id } = useParams();

  useEffect(() => {
    document.title = "Details user";
    api.get("user?id=" + id)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <Link to="/user/manage/" className="text-muted fw-light">User /</Link> Details</h4>
      <div className="card">
        <div className="table-responsive text-nowrap">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>User Id</th>
                <td>{user.id}</td>
              </tr>
              <tr>
                <th>User Name</th>
                <td>{user.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{user.email}</td>
              </tr>
              <tr>
                <th>Role</th>
                <td>{user.role}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;