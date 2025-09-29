

import { Link } from 'react-router-dom';
function IsseuBookEdit() {
  return (
    <>
        <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <section className="content">
                                    <div className="container-fluid mt-3">
                                        <h1>Edit Isseud Book</h1>
                                        <Link to={'/IsseuBookManage'} className="btn btn-primary mb-3">Back to Manage</Link>
                                        <div className="card">
                                            <form method="post">
                                                <div className="card-body">
                                                    <input type="hidden" name="id" value=">" />
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="name">Name</label><br />
                                                        <input type="text" className="htmlForm-control" name="name" id="name"
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

export default IsseuBookEdit;