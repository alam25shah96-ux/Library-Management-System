import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import type { Book } from "../../../interfaces/book.interface";
import type { Member } from "../../../interfaces/member.interface";
import type { Loan } from "../../../interfaces/loan.interface";
import  loanDefault from "../../../interfaces/loan.interface";
import api from '../../../config'

function LoanCreate() {
    
   
    const [book, setBooks] = useState<Book[]>([]);
    const [member, setMember] = useState<Member[]>([]);
    const [loan, setLoan] = useState<Loan>(loanDefault);
    useEffect(() => {
        document.title = "Create Loan";
        getBooks();
        getMember();
    },[]);
    const getBooks = () => {
        api.get("books")
        .then((res) => {
            // console.log(res.data);
            setBooks(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }
    const getMember = () => {
        api.get("member")
        .then((res) => {
            // console.log(res.data);
           setMember(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }

    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        api.post(`create-loan`, loan)
        .then((res)=>{
            console.log(res);
            alert("Data saved successfully");
        })
        .catch((err)=>console.error(err));
    }

  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><Link to="/loan/manage/" className="text-muted fw-light">Issue /</Link> Create</h4>
      <div className="card mt-3">
        <h5 className="card-header">Create Issue</h5>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Book</label>
                    <select name="books" className="form-select" value={loan.book_id} onChange={(e)=>setLoan({...loan, book_id: parseInt(e.target.value)})}>
                        <option value="0" disabled>Select one...</option>
                        {
                            book.map((book)=>
                                <option value={book.book_id} key={book.book_id}>{book.title}</option>
                            )   
                        }
                    </select>
                </div>
                  <div className="mb-3">
                    <label className="form-label">Member</label>
                    <select name="category" className="form-select" value={loan.member_id} onChange={(e)=>setLoan({...loan, member_id: parseInt(e.target.value)})}>
                        <option value="0" disabled>Select one...</option>
                        {
                            member.map((mem)=>
                                <option value={mem.id} key={mem.id}>{mem.name}</option>
                            )   
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Issue-Date</label>
                    <input type="text" name="name" className="form-control" value={loan.issue_date} 
                    onChange={(e)=>setLoan({...loan, issue_date: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Due-date</label>
                    <input type="text" name="name" className="form-control" value={loan.due_date} 
                    onChange={(e)=>setLoan({...loan, due_date: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Return-Date</label>
                    <input type="text" name="name" className="form-control" value={loan.return_date} 
                    onChange={(e)=>setLoan({...loan, return_date: e.target.value})} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoanCreate