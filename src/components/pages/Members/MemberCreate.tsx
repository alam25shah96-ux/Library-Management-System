

import { Link } from 'react-router-dom';
function MemberCreate() {
    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <section className="content">
                                    <div className="container-fluid mt-3">
                                        <h1>Create Member</h1>
                                        <Link to={'/MemberManage'} className="btn btn-primary mb-3">Back to Manage</Link>
                                        <form method="post">
                                            <input type="hidden" name="id" />
                                            <div className="card-body">
                                                <div className="htmlForm-group mb-3">
                                                    <label htmlFor="name">Name</label><br />
                                                    <input type="text" className="htmlForm-control" name="name" id="name" />
                                                </div>
                                                <div className="htmlForm-group mb-3">
                                                    <label htmlFor="email">Email</label><br />
                                                    <input type="text" className="htmlForm-control" name="email" id="email" />
                                                </div>
                                                <div className="htmlForm-group mb-3">
                                                    <label htmlFor="email">Phone</label><br />
                                                    <input type="text" className="htmlForm-control" name="email" id="email" />
                                                </div>
                                                <div className="htmlForm-group mb-3">
                                                    <label htmlFor="email">Address</label><br />
                                                    <input type="text" className="htmlForm-control" name="email" id="email" />
                                                </div>
                                                <div className="htmlForm-group mb-3">
                                                    <label htmlFor="email">Membership Date</label><br />
                                                    <input type="text" className="htmlForm-control" name="email" id="email" />
                                                </div>
                                                <div className="htmlForm-group mb-3">
                                                    <label htmlFor="email">Created At</label><br />
                                                    <input type="text" className="htmlForm-control" name="email" id="email" />
                                                </div>
                                                <div className="htmlForm-group mb-3">
                                                    <label htmlFor="email">Updated At</label><br />
                                                    <input type="text" className="htmlForm-control" name="email" id="email" />
                                                </div>
                                            


                                            </div>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-success">Submit</button>
                                            </div>
                                        </form>
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

export default MemberCreate;