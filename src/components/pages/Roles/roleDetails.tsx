import { Link, useParams } from "react-router-dom";
import api from "../../../config";
import { useEffect, useState } from "react";
import type { Role } from "../../../interfaces/role.interface";
import roleDefault from "../../../interfaces/role.interface";

function RoleDetails() {
  const [role, setRole] = useState<Role>(roleDefault);
  const { id } = useParams();

  useEffect(() => {
    document.title = "Details role";
    api.get("erole?id=" + id)
      .then((res) => {
        setRole(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <Link to="/user/manage/" className="text-muted fw-light">Role /</Link> Details</h4>
      <div className="card">
        <div className="table-responsive text-nowrap">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Role Id</th>
                <td>{role.id}</td>
              </tr>
              <tr>
                <th>Role Name</th>
                <td>{role.role_name}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{role.description}</td>
              </tr>
              <tr>
                <th>Created At</th>
                <td>{role.created_at}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RoleDetails;