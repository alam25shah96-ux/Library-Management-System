

import { Link } from 'react-router-dom';
function MemberDetail() {
    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <section className="content">
                                    <div className="container-flui mt-3">
                                        <h1>Details of Member</h1>
                                        <Link to={'/MemberManage'} className="btn btn-primary mb-3">Back to Manage</Link>


                                        <table className="table table-striped">
                                            <tr>
                                                <th> Id</th>
                                                <td>03</td>
                                            </tr>
                                            <tr>
                                                <th>Name</th>
                                                <td>Taher</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>taher@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <th>Phone</th>
                                                <td>00120030</td>
                                            </tr>
                                            <tr>
                                                <th>Address</th>
                                                <td>Dhobaura mymensing</td>
                                            </tr>
                                            <tr>
                                                <th>Membership Date</th>
                                                <td>2005/05</td>
                                            </tr>
                                            <tr>
                                                <th>Created At</th>
                                                <td>0204/12/05</td>
                                            </tr>
                                            <tr>
                                                <th>Updated At</th>
                                                <td>2005/12/2</td>
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

export default MemberDetail;