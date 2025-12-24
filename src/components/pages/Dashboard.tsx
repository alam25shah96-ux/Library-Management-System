import { useEffect, useState } from "react";
import api from "../../config";

function Dashboard() {
 

  const [totalBooks, setTotalBooks] = useState<number>(0);
  const [totalAvailable, setTotalAvailable] = useState<number>(0);
  const [totalMember, setTotalMember] = useState<number>(0);
  const [totalLoan, setTotalLoan] = useState<number>(0);
  const [todayLoan, setTodayLoan] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

   const getData = () => {
  api.get("total-book")
    .then((res) => {
      
      console.log(res.data);

      let data = res.data;
      if (data && data.data) data = data.data;

      const totalBooks = Number(data.total_books);
      const totalAvailable = Number(data.total_available);

      setTotalBooks(totalBooks);
      setTotalAvailable(totalAvailable);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
    });
};
   const getMember = () => {
  api.get("total-member")
    .then((res) => {
      
      console.log(res.data);

      let data = res.data;
      if (data && data.data) data = data.data;

      const totalMember = Number(data.total_members);

      setTotalMember(totalMember);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
    });
};
  const getLoans = () => {
  api.get("total-loan")
    .then((res) => {
      
      console.log(res.data);

      let data = res.data;
      if (data && data.data) data = data.data;

      const totalLoan = Number(data.total_loan);

      setTotalLoan(totalLoan);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
    });
};
  const getToday = () => {
  api.get("today-book")
    .then((res) => {
      
      console.log(res.data);

      let data = res.data;
      if (data && data.data) data = data.data;

      const todayLoan = Number(data.total_today);

      setTodayLoan(todayLoan);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
    });
};


  useEffect(() => {
    document.title = "Dashboard";
    getData();
    getMember();
    getLoans();
    getToday();
  }, []);

  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y ">
        <div className="row">
          <div className="col-lg-8 mb-4 order-0">
            <div className="card">
              <div className="d-flex align-items-end row">
                <div className="col-sm-5 text-center text-sm-left">
                  <div className="card-body pb-0 px-0 px-md-4">
                    <img
                      src="../assets/img/illustrations/book.jpg"
                      height="140"
                      alt="View Badge User"
                      data-app-dark-img="illustrations/man-with-laptop-dark.png"
                      data-app-light-img="illustrations/man-with-laptop-light.png"
                    />
                  </div>
                </div>
                <div className="col-sm-7 card">
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-danger ">Congratulations 🎉</h5>
                    <h1 className="mb-4 ">
                      ByName <span className="fw-bold text-primary">Books</span> Here
                    </h1>

                    <h3 className=" fw-bold text-primary">
                      {loading ? "..." : totalBooks.toLocaleString()}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 order-1">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-6 mb-4">
                <div className="card">
                  <div className="card-body  card">
                    <div className="card-title d-flex align-items-start justify-content-between">
                      <div className="avatar flex-shrink-0">
                        <img
                          src="../assets/img/icons/unicons/chart-success.png"
                          alt="chart success"
                          className="rounded"
                        />
                      </div>
                      <div className="dropdown">
                        <button className="btn p-0" type="button" id="cardOpt3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                          <a className="dropdown-item" href="#!">View More</a>
                          <a className="dropdown-item" href="#!">Delete</a>
                        </div>
                      </div>
                    </div>
                    <h3 className="card-title mb-2 fw-bold">Total issued</h3>
                    <h4 className="card-title text-info mb-2 fw-bold"> {loading ? "..." : totalLoan.toLocaleString()}</h4>
                   
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-6 mb-4">
                <div className="card ">
                  <div className="card-body ">
                    <div className="card-title d-flex align-items-start justify-content-between">
                      <div className="avatar flex-shrink-0">
                        <img
                          src="../assets/img/icons/unicons/wallet-info.png"
                          alt="Credit Card"
                          className="rounded"
                        />
                      </div>
                      <div className="dropdown">
                        <button className="btn p-0" type="button" id="cardOpt6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                          <a className="dropdown-item" href="#!">View More</a>
                          <a className="dropdown-item" href="#!">Delete</a>
                        </div>
                      </div>
                    </div>

                    <h3 className="card-title text-nowrap mb-1 fw-bold">Todays <br /> issued</h3>
                     <h4 className="card-title text-success mb-2 fw-bold"> {loading ? "..." : todayLoan.toLocaleString()}</h4>
              
                     </div>
                </div>
              </div>
            </div>
          </div>

        
          <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
            <div className="card">
              <div className="row row-bordered g-0">
                <div className="col-md-8">
                  <h1 className="card-header m-0 me-2 pb-3 fw-bold">Total Members</h1>
                  <div id="totalRevenueChart" className="px-2"></div>
                </div>
                <div className="col-md-4  card">
                  <div className="card-body">
                    <div className="text-center">
                      <div className="dropdown">
                        <h1 className="  fw-bold"> {loading ? "..." : totalMember.toLocaleString()}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className="row divDiv card mt-4">
          <div className="col-12 mb-4">
            <div className="card divC">
              <div className="card-body text-center">
                <h1>Books</h1>
                 <h1 className="fw-bold text-primary">{loading ? "..." : totalAvailable.toLocaleString()}</h1>
               
                <h1>Available</h1>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;