
import { Link } from "react-router-dom";
import api from "../../../config";
import { useEffect,useState } from "react";
import type { Role } from "../../../interfaces/role.interface";
import type { User } from "../../../interfaces/user.interface";
import userDefault from "../../../interfaces/user.interface";
import { useParams } from 'react-router-dom' 

function UserEdit() {
     const params = useParams();
    const [role, setRole] = useState<Role[]>([]);
    const [user, setUser] = useState<User>(userDefault);
    useEffect(() => {
        document.title = "Create User";
        getRoles();
        getUser();
    },[]);
    const getRoles = () => {
        api.get("role")
        .then((res) => {
            // console.log(res.data);
            setRole(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }
     const getUser = ()=>{
        api.get(`user?id=${params.id}`)
        .then((res)=>{
            console.log(res.data);
            setUser(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    }
   
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(user);
        api.put(`user-edit`, user)
        .then((res)=>{
            console.log(res.data);
            alert("Data updated successfully");
        })
        .catch((err)=>{
            console.error(err);
        })
    }
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><Link to="/user/manage" className="text-muted fw-light">Users/</Link> Edit</h4>
      <div className="card mt-3">
        <h5 className="card-header">Edit User</h5>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input type="text" name="name" className="form-control" value={user.name} onChange={(e)=>setUser({...user, name: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">User Mail</label>
                    <input type="text" name="name" className="form-control" value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})} />
                </div>
               
                
              
                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select name="role" className="form-select" value={user.role} onChange={(e)=>setUser({...user, role: e.target.value})}>
                        <option value="0" disabled>Select one...</option>
                        {
                            role.map((role)=>
                                <option value={role.id} key={role.id}>{role.role_name}</option>
                            )   
                        }
                    </select>
                </div>
                
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserEdit;