

import {Link} from 'react-router-dom';
function AuthorDetail() {
    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <section className="content">
                                    <div className="container-flui mt-3">
                                        <h1>Details of Authors</h1>
                                        <Link to={'/AuthorsManage'} className="btn btn-primary mb-3">Back to Manage</Link>


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
                                                <th>Date Of Birth</th>
                                                <td>25/1996/May</td>
                                            </tr>
                                            <tr>
                                                <th>Nationality</th>
                                                <td>Bangladesh</td>
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

export default AuthorDetail;