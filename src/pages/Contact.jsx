import { useState, useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  const [formData, setFormData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ userName: "", userAge: "", userEmail: "", userPassword: "" });
  };

  return (
    <div className="contact-page w-100">
      <section className="page-section bg-white">
        <div className="container">
          <h2 className="section-title text-center text-primary mb-0">
            Contact Me
          </h2>

          <div className="divider-star text-primary my-4">
            <div className="divider-line bg-primary"></div>
            <i className="bi bi-star-fill divider-icon"></i>
            <div className="divider-line bg-primary"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom rounded-0 px-0"
                    id="userName"
                    name="userName"
                    placeholder="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="number"
                    className="form-control border-0 border-bottom rounded-0 px-0"
                    id="userAge"
                    name="userAge"
                    placeholder="userAge"
                    value={formData.userAge}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control border-0 border-bottom rounded-0 px-0"
                    id="userEmail"
                    name="userEmail"
                    placeholder="userEmail"
                    value={formData.userEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control border-0 border-bottom rounded-0 px-0"
                    id="userPassword"
                    name="userPassword"
                    placeholder="userPassword"
                    value={formData.userPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-success px-4 py-2 rounded-3"
                  >
                    send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
