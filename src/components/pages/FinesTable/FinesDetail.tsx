
import { Link } from 'react-router-dom';
function FinesDetail() {
  return (
    <>
       <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <section className="content">
                                    <div className="container-flui mt-3">
                                        <h1> Fine Details</h1>
                                        <Link to={'/FinesManage'} className="btn btn-primary mb-3">Back to Manage</Link>


                                        <table className="table table-striped">
                                            <tr>
                                                <th>Id</th>
                                                <td>03</td>
                                            </tr>
                                            <tr>
                                                <th>Member Id</th>
                                                <td>04</td>
                                            </tr>
                                            <tr>
                                                <th>Book Issue Id</th>
                                                <td>04</td>
                                            </tr>
                                            <tr>
                                                <th>Amount</th>
                                                <td>04000</td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td>Active</td>
                                            </tr>
                                            <tr>
                                                <th>Fine Date</th>
                                                <td>04/2008</td>
                                            </tr>
                                            <tr>
                                                <th>Paid Date</th>
                                                <td>04/2007</td>
                                            </tr>
                                            <tr>
                                                <th>Created At</th>
                                                <td>04/2005</td>
                                            </tr>
                                          
                                         
                                            
                                        </table>


                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </>
  )
}

export default FinesDetail;