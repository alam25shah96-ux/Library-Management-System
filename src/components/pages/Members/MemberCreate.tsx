import { Link } from "react-router-dom";
import api from "../../../config";
import {useState } from "react";
import type { Member } from "../../../interfaces/member.interface";
import memberDefault from "../../../interfaces/member.interface";

function MemberCreate() {
    const [member, setMember] = useState<Member>(memberDefault);
  
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(role);
        api.post(`create-member`, member)
        .then((res)=>{
            console.log(res);
            alert("Data saved successfully");
        })
        .catch((err)=>console.error(err));
    }
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><Link to="/member/manage/" className="text-muted fw-light">Member/</Link> Create</h4>
      <div className="card mt-3">
        <h5 className="card-header">Create member</h5>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label className="form-label"> Name</label>
                    <input type="text" name="name" className="form-control" value={member.name} onChange={(e)=>setMember({...member, name: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" name="name" className="form-control" value={member.email} onChange={(e)=>setMember({...member, email: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" name="name" className="form-control" value={member.phone} onChange={(e)=>setMember({...member, phone: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" name="name" className="form-control" value={member.address} onChange={(e)=>setMember({...member, address: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Membership-Date</label>
                    <input type="text" name="name" className="form-control" value={member.membership_date} onChange={(e)=>setMember({...member, membership_date: e.target.value})} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default MemberCreate;