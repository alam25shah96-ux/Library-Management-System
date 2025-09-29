

import { Link } from 'react-router-dom';
function BookDetail() {
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
                                        <Link to={'/BookManage'} className="btn btn-primary mb-3">Back to Manage</Link>


                                        <table className="table table-striped">
                                            <tr>
                                                <th>Book Id</th>
                                                <td>03</td>
                                            </tr>
                                            <tr>
                                                <th>Cover Photo</th>
                                                <td>View</td>
                                            </tr>
                                            <tr>
                                                <th>Title</th>
                                                <td>Nondito Noroke</td>
                                            </tr>
                                            <tr>
                                                <th>Author Id</th>
                                                <td>Humayon Ahmed</td>
                                            </tr>
                                            <tr>
                                                <th>Category Id</th>
                                                <td>Novel</td>
                                            </tr>
                                            <tr>
                                                <th>Isbn</th>
                                                <td>0001//02kjh</td>
                                            </tr>
                                            <tr>
                                                <th>Available</th>
                                                <td>5 peiece</td>
                                            </tr>
                                            <tr>
                                                <th>Created At</th>
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

export default BookDetail;