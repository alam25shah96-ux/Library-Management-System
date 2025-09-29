
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
  useEffect(() => {
    document.title = "Users";
  }, []);

  return (
    <>


      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <section className="content">
                  <div className="container-fluid mt-3">
                    <h1>Manage Admin Users</h1>
                   <Link to={'/usercreate'} className="btn btn-primary mb-3">Add New</Link>

                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Password</th>
                          <th>Role Id</th>
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
                        <td>
                          <form action="/userdetail">
                            <input type="hidden" name="id" value="" />
                            <input type="submit" className="btn btn-info" value="Details" />
                          </form>
                          <form action="/UserEdit" >
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

export default Users;