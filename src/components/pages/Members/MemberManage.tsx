
import { Link } from 'react-router-dom';
function MemberManage() {
    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <section className="content">
                                    <div className="container-fluid mt-3">
                                        <h1>Manage Members</h1>
                                        <Link to={'/MemberCreate'} className="btn btn-primary mb-3">Add New</Link>

                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Address</th>
                                                    <th>Membership Date</th>
                                                    <th>Created At</th>
                                                    <th>Updated At</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <form action="/MemberDetail">
                                                        <input type="hidden" name="id" value="" />
                                                        <input type="submit" className="btn btn-info" value="Details" />
                                                    </form>
                                                    <form action="/MemberEdit" >
                                                        <input type="hidden" name="id" value="" />
                                                        <input type="submit" className="btn btn-primary" value="Edit" />
                                                    </form>
                                                    <form method="post">
                                                        <input type="hidden" name="delete_id" value="" />
                                                        <input type="submit" className="btn btn-danger" value="Delete" />
                                                    </form>
                                                </td>

                                            </tbody>
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

export default MemberManage;