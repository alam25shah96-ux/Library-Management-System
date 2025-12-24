import { Link } from 'react-router-dom'
import { useState } from 'react'
import type { Role } from "../../../interfaces/role.interface";
import  roleDefault from "../../../interfaces/role.interface";
import api from '../../../config'

function CreateRole() {
    
     const [role, setRole] = useState<Role>(roleDefault);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        api.post(`create-role`, role)
        .then((res)=>{
            console.log(res);
            alert("Data saved successfully");
        })
        .catch((err)=>console.error(err));
    }

  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><Link to="/role/manage/" className="text-muted fw-light">Roles /</Link> Create</h4>
      <div className="card mt-3">
        <h5 className="card-header">Create Role</h5>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Role Name</label>
                    <input type="text" name="name" className="form-control" value={role.role_name} 
                    onChange={(e)=>setRole({...role, role_name: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" name="name" className="form-control" value={role.description} 
                    onChange={(e)=>setRole({...role, description: e.target.value})} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default CreateRole