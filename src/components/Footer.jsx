import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer text-white">
      {/* Top Section */}
      <div className="container py-5">
        <div className="row text-center text-md-start">
          {/* Location */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-4">Location</h5>
            <p className="mb-1">2215 John Daniel Drive</p>
            <p className="mb-0">Clark, MO 65243</p>
          </div>

          {/* Around The Web */}
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <h5 className="text-uppercase fw-bold mb-4">Around The Web</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="btn btn-outline-light footer-social-btn rounded-circle">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-outline-light footer-social-btn rounded-circle">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-light footer-social-btn rounded-circle">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="btn btn-outline-light footer-social-btn rounded-circle">
                <i className="bi bi-dribbble"></i>
              </a>
            </div>
          </div>

          {/* About Freelancer */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="text-uppercase fw-bold mb-4">About Freelancer</h5>
            <p className="mb-0">
              Freelance is a free to use, licensed Bootstrap theme created by{" "}
              <Link to="/" className="text-white fw-bold text-decoration-underline">
                Route
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright py-4">
        <div className="container text-center">
          <small>Copyright &copy; Your Website {new Date().getFullYear()}</small>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
