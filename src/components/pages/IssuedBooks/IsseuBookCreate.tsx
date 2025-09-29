
import { Link } from 'react-router-dom';
function IsseuBookCreate() {
  return (
    <>
       <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <section className="content">
                                    <div className="container-fluid mt-3">
                                        <h1>Create Isseud Book</h1>
                                        <Link to={'/IsseuBookManage'} className="btn btn-primary mb-3">Back to Manage</Link>
                                        <form method="post">
                                            <input type="hidden" name="id" />
                                            <div className="card-body">
                                                <div className="htmlForm-group mb-3">
                                                    <label htmlFor="name">Name</label><br />
                                                    <input type="text" className="htmlForm-control" name="name" id="name" />
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

export default IsseuBookCreate;