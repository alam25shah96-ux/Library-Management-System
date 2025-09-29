
function Dashboard() {
  document.title = "Dashboard";
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
                              data-app-light-img="illustrations/man-with-laptop-light.png" />
                          </div>
                        </div>
                          <div className="col-sm-7 bg-info card">
                          <div className="card-body">
                            <h5 className="card-title text-danger">Congratulations 🎉</h5>
                            <h1 className="mb-4">
                              Total <span className="fw-bold">Books</span> Here
                            </h1>

                            <h3 className="text-primary fw-bold">6000</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 order-1">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-6 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                              <div className="avatar flex-shrink-0">
                                <img
                                  src="../assets/img/icons/unicons/chart-success.png"
                                  alt="chart success"
                                  className="rounded" />
                              </div>
                              <div className="dropdown">
                                <button
                                  className="btn p-0"
                                  type="button"
                                  id="cardOpt3"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false" >
                                  <i className="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                </div>
                              </div>
                            </div>
                            <h3 className="card-title mb-2">Total issued</h3>
                            <small className="text-info fw-semibold"><i className="bx bx-up-arrow-alt"></i>500</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-6 mb-4">
                        <div className="card bg-black">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                              <div className="avatar flex-shrink-0">
                                <img
                                  src="../assets/img/icons/unicons/wallet-info.png"
                                  alt="Credit Card"
                                  className="rounded" />
                              </div>
                              <div className="dropdown">
                                <button
                                  className="btn p-0"
                                  type="button"
                                  id="cardOpt6"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false">
                                  <i className="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                </div>
                              </div>
                            </div>
                           
                            <h3 className="card-title text-nowrap mb-1 text-info">Todays issued</h3>
                            <small className="text-warning fw-semibold"><i className="bx bx-up-arrow-alt"></i>100</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Total Revenue */}
                  <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                    <div className="card">
                      <div className="row row-bordered g-0">
                        <div className="col-md-8">
                          <h1 className="card-header m-0 me-2 pb-3">Total Members</h1>
                          <div id="totalRevenueChart" className="px-2"></div>
                        </div>
                        <div className="col-md-4 bg-black card">
                          <div className="card-body">
                            <div className="text-center">
                              <div className="dropdown">
                                <h1   className=" text-success fw-bold">5000</h1>
                              
                              </div>
                            </div>
                          </div>
                         </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Total Revenue */}
                  <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                    <div className="row">
                      <div className="col-6 mb-4">
                        <div className="card bg-black">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                              <div className="avatar flex-shrink-0">
                                <img src="../assets/img/icons/unicons/paypal.png" alt="Credit Card" className="rounded" />
                              </div>
                              <div className="dropdown">
                                <button
                                  className="btn p-0"
                                  type="button"
                                  id="cardOpt4"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                </div>
                              </div>
                            </div >
                           
                            <h3 className="card-title text-nowrap mb-2 text-success">Total unpaid <br />fines</h3>
                            <small className="text-danger fw-semibold"><i className="bx bx-down-arrow-alt"></i>10,000 TK</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 mb-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="card-title d-flex align-items-start justify-content-between">
                              <div className="avatar flex-shrink-0">
                                <img src="../assets/img/icons/unicons/cc-primary.png" alt="Credit Card" className="rounded" />
                              </div>
                              <div className="dropdown">
                                <button
                                  className="btn p-0"
                                  type="button"
                                  id="cardOpt1"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="cardOpt1">
                                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                                </div>
                              </div>
                            </div>
                           
                            <h3 className="card-title mb-2">Todays Returned</h3>
                            <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i>250</small>
                          </div>
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
                 <div className="row bg-info card">
                      <div className="col-12 mb-4">
                        <div className="card bg-black">
                          <div className="card-body">
                            <div className="d-flex justify-content-between  flex-sm-row flex-column gap-3">
                              <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                 <div>
                                   <h4 className="text-warning">Books</h4>
                                 </div>
                                <div className="mt-sm-auto">
                                   <h1 className="text-success fw-bold">5500</h1>
                                  <h3 className="mb-0 text-warning">Available</h3>
                                </div>
                              </div>
                              <div id="profileReportChart"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                <div className="row">
                  {/* Order Statistics */}
                  <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                    <div className="card h-100">
                      <div className="card-header d-flex align-items-center justify-content-between pb-0">
                        <div className="card-title mb-0">
                          <h2 className="m-0 me-2 mb-3">Our Writters</h2>
                          
                        </div>
                        <div className="dropdown">
                          <button
                            className="btn p-0"
                            type="button"
                            id="orederStatistics"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                            <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                            <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                            <a className="dropdown-item" href="javascript:void(0);">Share</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex flex-column align-items-center gap-1">
                            <h3 className="mb-2 text-primary">20</h3>
                            <span>Names below</span>
                          </div>
                          <div id="orderStatisticsChart"></div>
                        </div>
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary"
                                ><i className="bx ">K</i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Kazi Nazrul Islam</h6>
                                <small className="text-muted">Rebel poet</small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">Bangladesh</small>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary"
                                ><i className="bx ">R</i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Robidranath</h6>
                                <small className="text-muted">Worlds poet</small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">India</small>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary"
                                ><i className="bx ">S</i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Shakeaspere</h6>
                                <small className="text-muted">famous Dramatist</small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">Englend</small>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary"
                                ><i className="bx ">M</i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Maxim gorkey</h6>
                                <small className="text-muted">National poet</small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">Russia</small>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary"
                                ><i className="bx ">J</i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Jibonanando</h6>
                                <small className="text-muted">Kishore poet</small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">Bangladesh</small>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary"
                                ><i className="bx ">A</i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Allama Iqbal</h6>
                                <small className="text-muted">Islamic Poet</small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">Pakistan</small>
                              </div>
                            </div>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*/ Order Statistics */}

                  {/* Expense Overview */}
                  <div className="col-md-6 col-lg-4 order-1 mb-4">
                    <div className="card h-100">
                      <div className="card-header">
                        <ul className="nav nav-pills" role="tablist">
                          <li className="nav-item">
                            <button
                              type="button"
                              className="nav-link active"
                              role="tab"
                              data-bs-toggle="tab"
                              data-bs-target="#navs-tabs-line-card-income"
                              aria-controls="navs-tabs-line-card-income"
                              aria-selected="true"
                            >
                             Most Famous Books Of the  World
                            </button>
                          </li>
                
                        </ul>
                      </div>
                      <div className="card-body px-0 bg-black card ">
                        <div className="tab-content p-0">
                          <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                            <div className="d-flex p-4 pt-3">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src="../assets/img/icons/unicons/wallet.png" alt="User" />
                              </div>
                              <div>
                                <small className="text-success d-block">Romio and juliet</small>
                                <div className="d-flex align-items-center">
                                  <h6 className="mb-0 me-1 text-warning">SheaksPeare</h6>                                 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content p-0">
                          <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                            <div className="d-flex p-4 pt-3">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src="../assets/img/icons/unicons/wallet.png" alt="User" />
                              </div>
                              <div>
                                <small className="text-success d-block">Romio and juliet</small>
                                <div className="d-flex align-items-center">
                                  <h6 className="mb-0 me-1 text-warning">SheaksPeare</h6>                                 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content p-0">
                          <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                            <div className="d-flex p-4 pt-3">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src="../assets/img/icons/unicons/wallet.png" alt="User" />
                              </div>
                              <div>
                                <small className="text-success d-block">Romio and juliet</small>
                                <div className="d-flex align-items-center">
                                  <h6 className="mb-0 me-1 text-warning">SheaksPeare</h6>                                 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content p-0">
                          <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                            <div className="d-flex p-4 pt-3">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src="../assets/img/icons/unicons/wallet.png" alt="User" />
                              </div>
                              <div>
                                <small className="text-success d-block">Romio and juliet</small>
                                <div className="d-flex align-items-center">
                                  <h6 className="mb-0 me-1 text-warning">SheaksPeare</h6>                                 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content p-0">
                          <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                            <div className="d-flex p-4 pt-3">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src="../assets/img/icons/unicons/wallet.png" alt="User" />
                              </div>
                              <div>
                                <small className="text-success d-block">Romio and juliet</small>
                                <div className="d-flex align-items-center">
                                  <h6 className="mb-0 me-1 text-warning">SheaksPeare</h6>                                 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content p-0">
                          <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                            <div className="d-flex p-4 pt-3">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src="../assets/img/icons/unicons/wallet.png" alt="User" />
                              </div>
                              <div>
                                <small className="text-success d-block">Romio and juliet</small>
                                <div className="d-flex align-items-center">
                                  <h6 className="mb-0 me-1 text-warning">SheaksPeare</h6>                                 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Expense Overview */}

                  {/* Transactions */}
                  <div className="col-md-6 col-lg-4 order-2 mb-4">
                    <div className="card h-100">
                      <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="card-title m-0 me-2 text-danger">Special Categories</h5>
                        <div className="dropdown">
                          <button
                            className="btn p-0"
                            type="button"
                            id="transactionID"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
                            <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                            <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                            <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/paypal.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">                             
                                <h3 className="mb-0">Biography</h3>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/paypal.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">                             
                                <h3 className="mb-0">Politics</h3>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/paypal.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">                             
                                <h3 className="mb-0">Novel</h3>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/paypal.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">                             
                                <h3 className="mb-0">Academic</h3>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/paypal.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">                             
                                <h3 className="mb-0">Short story</h3>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/paypal.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">                             
                                <h3 className="mb-0">Religion</h3>
                              </div>
                            </div>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*/ Transactions */}
                </div>
              </div>
    </>
  )
}

export default Dashboard