
import {Link} from 'react-router-dom';
function AuthorsManage() {
  return (
    <>
       <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <section className="content">
                  <div className="container-fluid mt-3">
                    <h1>Manage Authors</h1>
                   <Link to={'/AuthorCreate'} className="btn btn-primary mb-3">Add New</Link>

                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Date Of Birth</th>
                          <th>Nationality</th>
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
                        <td>
                          <form action="/AuthorDetail">
                            <input type="hidden" name="id" value="" />
                            <input type="submit" className="btn btn-info" value="Details" />
                          </form>
                          <form action="/AuthorEdit" >
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

export default AuthorsManage;