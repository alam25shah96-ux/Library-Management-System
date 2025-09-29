import { Link } from 'react-router-dom';
function FinesCreate() {
  return (
    <>
      <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <section className="content">
                                    <div className="container-fluid mt-3">
                                        <h1>Create Fines</h1>
                                        <Link to={'/FinesManage'} className="btn btn-primary mb-3">Back to Manage</Link>
                                        <form method="post">
                                            <input type="hidden" name="id" />
                                            <div className="card-body">
                                                    <input type="hidden" name="id" value=">" />
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="name">Member Id</label><br />
                                                        <input type="text" className="htmlForm-control" name="name" id="name"
                                                            value="" />
                                                    </div>
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="name">Book Issue Id</label><br />
                                                        <input type="text" className="htmlForm-control" name="name" id="name"
                                                            value="" />
                                                    </div>
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="name">Amount</label><br />
                                                        <input type="text" className="htmlForm-control" name="name" id="name"
                                                            value="" />
                                                    </div>
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="name">Status</label><br />
                                                        <input type="text" className="htmlForm-control" name="name" id="name"
                                                            value="" />
                                                    </div>
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="name">Fine Date</label><br />
                                                        <input type="text" className="htmlForm-control" name="name" id="name"
                                                            value="" />
                                                    </div>
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="name">Paid Date</label><br />
                                                        <input type="text" className="htmlForm-control" name="name" id="name"
                                                            value="" />
                                                    </div>
                                                    <div className="htmlForm-group mb-3">
                                                        <label htmlFor="name">Created At</label><br />
                                                        <input type="text" className="htmlForm-control" name="name" id="name"
                                                            value="" />
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

export default FinesCreate;