import React from 'react'

export const Profile = () => {
      return (
        <div className="container mb-3">
            <div className="main-body">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width={110} />
                        <div className="mt-3">
                          <h4>John Doe</h4>
                          <p className="text-secondary mb-1">Alumni | 2018</p>
                          <p className="text-secondary mb-1">Full Stack Web Developer | Google</p>
                          <p className="text-muted font-size-sm">New Government Engineering College <br></br>Raipur</p>
                          <button className="btn btn-primary">Follow</button>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe me-2 icon-inline"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>Website</h6>
                          <a className="text-secondary" href='_blank'>https://bootdey.com</a>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>Github</h6>
                          <a className="text-secondary" href='_blank'>bootdey</a>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter me-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>Twitter</h6>
                          <a className="text-secondary" href='_blank'>@bootdey</a>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram me-2 icon-inline text-danger"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>Instagram</h6>
                          <a className="text-secondary" href='_blank'>bootdey</a>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</h6>
                          <a className="text-secondary" href='_blank'>bootdey</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" defaultValue="John Doe" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email Adress</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" defaultValue="john@example.com" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Mobile No</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" defaultValue="(239) 816-9029" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">User Type</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" defaultValue="ALUMNI" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Branch</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" defaultValue="Computer Science and Engineering" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Year of Passing</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="year" className="form-control" defaultValue="2018" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Institute</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" defaultValue="New Government Engineering College, Raipur" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Trade</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" defaultValue="Full Stack Web Developer at Google" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3" />
                        <div className="col-sm-9 text-secondary">
                          <input type="button" className="btn btn-primary px-4" defaultValue="Save Changes" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }