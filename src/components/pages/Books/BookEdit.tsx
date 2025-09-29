

import { Link } from 'react-router-dom';
function BookEdit() {
  return (
    <>
      <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <section className="content">
                                    <div className="container-fluid mt-3">
                                        <h1>Edit Book</h1>
                                        <Link to={'/BookManage'} className="btn btn-primary mb-3">Back to Manage</Link>
                                        <div className="card">
                                            <form method="post">
                                                <div className="card-body">
                                                    <input type="hidden" name="id" value=">" />
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="name">Cover Photo</label><br />
                                                        <input type="text" className="htmlForm-control" name="name" id="name"
                                                            value="" />
                                                    </div>
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="email">Title</label><br />
                                                        <input type="text" className="htmlForm-control" name="email" id="email"
                                                            value="" />
                                                    </div>
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="password">Author Id</label><br />
                                                        <input type="text" className="htmlForm-control" name="password" id="password"
                                                            value="" />
                                                    </div>
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="password">Category Id</label><br />
                                                        <input type="text" className="htmlForm-control" name="password" id="password"
                                                            value="" />
                                                    </div>
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="password">Isbn</label><br />
                                                        <input type="text" className="htmlForm-control" name="password" id="password"
                                                            value="" />
                                                    </div>
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="password">Available</label><br />
                                                        <input type="text" className="htmlForm-control" name="password" id="password"
                                                            value="" />
                                                    </div>
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="password">Created At</label><br />
                                                        <input type="text" className="htmlForm-control" name="password" id="password"
                                                            value="" />
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-success">Update</button>
                                                </div>
                                            </form>
                                        </div>

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

export default BookEdit;