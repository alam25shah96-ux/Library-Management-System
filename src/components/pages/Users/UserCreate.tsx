
import {Link} from 'react-router-dom';
function UserCreate() {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <section className="content">
                  <div className="container-fluid mt-3">
                    <h1>Create Admin Users</h1>
                    <Link to={'/user'} className="btn btn-primary mb-3">Back to Manage</Link>
                    <form method="post">
                      <input type="hidden" name="id"/>
                        <div className="card-body">
                          <div className="htmlForm-group mb-3">
                            <label htmlFor="name">Name</label><br />
                            <input type="text" className="htmlForm-control" name="name" id="name"/>
                          </div>
                          <div className="htmlForm-group mb-3">
                            <label htmlFor="email">Email</label><br />
                            <input type="text" className="htmlForm-control" name="email" id="email"/>
                          </div>
                          <div className="htmlForm-group mb-3">
                            <label htmlFor="password">Password</label><br />
                            <input type="text" className="htmlForm-control" name="password" id="password"/>
                          </div>
                          <div className="htmlForm-group mb-3">
                            <label htmlFor="role_id">Role Id</label><br />
                            <input type="text" className="htmlForm-control" name="role_id" id="role_id"/>
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

export default UserCreate;
