import { useEffect,useState } from "react";
import api from "../../../config";
import type { Loan } from "../../../interfaces/loan.interface";
import { Link } from "react-router-dom";



function ManageLoans() {
  const [loan, setLoan] = useState<Loan[]>([]);
  const [loanId, setloanId] = useState<number | undefined>(0);
  

  const getLoans = () => {
    api.get("loans")
    .then((res) => {
      console.log(res.data);
      setLoan(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  }
  
  useEffect(() => {
    document.title = "Manage loans";
    getLoans();
  },[]);
  

  function handleDelete(id:any){
   
    api.delete(`delete-loan`,{
      params: {
        id: id,
       
      }
    })
    .then((res) => {
      console.log(res.data);
      getLoans();
    })
    .catch((err) => {
      console.error(err);
    })
  }  
  
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Issue /</span> Manage</h4>
      <Link to="/create/loan/" className="btn btn-primary">Add New</Link>
      <div className="card mt-3">
        <div className="table-responsive px-2">          
            <table  className="table table-striped">
                <thead>
                    <tr>
                       <th>Id</th>
                       <th>Book </th>
                       <th>Member </th>
                       <th>Issue Date</th>
                       <th>Due Date</th>
                       <th>Return Date</th>
                       <th>Issued By</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         loan.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.book_id}</td>
                                <td>{item.member_id}</td>
                                <td>{item.issue_date}</td>
                                <td>{item.due_date}</td>
                                <td>{item.return_date}</td>
                                <td>{item.issued_by}</td>
                                <td>
                                    <div className="d-flex gap-1">
                                        <Link to={`/book/details/${item.id}`} type="button" className="btn btn-icon btn-outline-info">
                                            <span className="tf-icons bx bx-search"></span>
                                        </Link>
                                        <Link to={`/book/edit/${item.id}`} type="button" className="btn btn-icon btn-outline-primary">
                                            <span className="tf-icons bx bx-edit"></span>
                                        </Link>
                                        <button type="button" className="btn btn-icon btn-outline-danger" onClick={()=>setloanId(item?.id)} data-bs-toggle="modal" data-bs-target="#deleteModal">
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
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>handleDelete(loanId)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ManageLoans