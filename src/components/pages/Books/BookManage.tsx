
import { Link } from 'react-router-dom';
function BookManage() {
    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <section className="content">
                                    <div className="container-fluid mt-3">
                                        <h1>Manage Books</h1>
                                        <Link to={'/BookCreate'} className="btn btn-primary mb-3">Add New</Link>

                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Book Id</th>
                                                    <th>Cover Photo</th>
                                                    <th>Title</th>
                                                    <th>Author Id</th>
                                                    <th>Category Id</th>
                                                    <th>Isbn</th>
                                                    <th>Available</th>
                                                    <th>Created At</th>
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
                                                    <form action="/BookDetail">
                                                        <input type="hidden" name="id" value="" />
                                                        <input type="submit" className="btn btn-info" value="Details" />
                                                    </form>
                                                    <form action="/BookEdit" >
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

export default BookManage;