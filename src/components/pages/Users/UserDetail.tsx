
import {Link} from 'react-router-dom';
function UserDetail() {
    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <section className="content">
                                    <div className="container-flui mt-3">
                                        <h1>Details of Admin Users</h1>
                                        <Link to={'/user'} className="btn btn-primary mb-3">Back to Manage</Link>


                                        <table className="table table-striped">
                                            <tr>
                                                <th>Id</th>
                                                <td>03</td>
                                            </tr>
                                            <tr>
                                                <th>Name</th>
                                                <td>Alam</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>alam25@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <th>Role</th>
                                                <td>Admin</td>
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

export default UserDetail;
