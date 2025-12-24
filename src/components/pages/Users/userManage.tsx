import { useEffect,useState } from "react";
import api from "../../../config";
import type { User } from "../../../interfaces/user.interface";
import { Link } from "react-router-dom";



function Userss() {
  const [user, setUser] = useState<User[]>([]);
  const [userId, setUserId] = useState<number | undefined>(0);
  

  const getUsers = () => {
    api.get("users")
    .then((res) => {
      console.log(res.data);
      setUser(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  }
  
  useEffect(() => {
    document.title = "Manage User";
    getUsers();
  },[]);
  

  function handleDelete(user_id:any){
   
    api.delete(`delete-user`,{
      params: {
        id: user_id,
       
      }
    })
    .then((res) => {
      console.log(res.data);
      getUsers();
    })
    .catch((err) => {
      console.error(err);
    })
  }  
  
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Users /</span> Manage</h4>
      <Link to="/user/create/" className="btn btn-primary">Add New</Link>
      <div className="card mt-3">
        <div className="table-responsive px-2">          
            <table  className="table table-striped">
                <thead>
                    <tr>
                       <th>User Id</th>
                       <th>User Name</th>
                       <th>Email</th>
                       <th>User Role</th>
                       <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item) => (
                             <tr key={item.id}>
                                <td>{item.id}</td>
                               
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                               
                                <td>
                                    <div className="d-flex gap-1">
                                        <Link to={`/user/details/${item.id}`} type="button" className="btn btn-icon btn-outline-info">
                                            <span className="tf-icons bx bx-search"></span>
                                        </Link>
                                        <Link to={`/user/edit/${item.id}`} type="button" className="btn btn-icon btn-outline-primary">
                                            <span className="tf-icons bx bx-edit"></span>
                                        </Link>
                                        <button type="button" className="btn btn-icon btn-outline-danger" onClick={()=>setUserId(item?.id)} data-bs-toggle="modal" data-bs-target="#deleteModal">
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
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>handleDelete(userId)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Userss;