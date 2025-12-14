import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="about-page w-100 ">
      <section className="page-section about">
        <div className="container">
          <h2 className="section-title text-center text-white mb-0">
            About Me
          </h2>

          <div className="divider-star text-white my-4">
            <div className="divider-line bg-white"></div>
            <i className="bi bi-star-fill divider-icon"></i>
            <div className="divider-line bg-white"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              <p className="text-white text-center text-md-start">
                Freelancer is a free bootstrap theme created by Start Bootstrap.
                The download includes the complete source files including HTML,
                CSS, and JavaScript as well as optional SASS stylesheets for
                easy customization.
              </p>
            </div>
            <div className="col-lg-5 col-md-6">
              <p className="text-white text-center text-md-start">
                Whether you're a student looking to showcase your work, a
                professional building your online presence, or a creative
                looking to share your passion, Freelancer has everything you
                need to get your portfolio online.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
