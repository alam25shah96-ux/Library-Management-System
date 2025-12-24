
function Footer() {
  return (
    <>
    <footer className="content-footer footer bg-footer-theme">
                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column ">
                  <div className="mb-2 mb-md-0">
                    ©
                    {new Date().getFullYear()}
                    , made with ❤️ by
                    <a href="https://themeselection.com" target="_blank" className="footer-link fw-bolder">Alam Chowdhory</a>
                  </div>
                </div>
              </footer>
    </>
  )
}

export default Footer