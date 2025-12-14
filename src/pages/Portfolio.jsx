import { useState, useEffect } from "react";

function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  const portfolioItems = [
    {
      id: 1,
      image: "imgi_1_poert1.png",
      title: "Cabin",
    },
    {
      id: 2,
      image: "imgi_2_port2.png",
      title: "Cake",
    },
    {
      id: 3,
      image: "imgi_3_port3.png",
      title: "Circus",
    },
    {
      id: 4,
      image: "imgi_1_poert1.png",
      title: "Game",
    },
    {
      id: 5,
      image: "imgi_2_port2.png",
      title: "Safe",
    },
    {
      id: 6,
      image: "imgi_3_port3.png",
      title: "Submarine",
    },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="portfolio-page w-100">
      <section className="page-section bg-white">
        <div className="container">
          <h2 className="section-title text-center text-primary mb-0">
            Portfolio
          </h2>

          <div className="divider-star text-primary my-4">
            <div className="divider-line bg-primary"></div>
            <i className="bi bi-star-fill divider-icon"></i>
            <div className="divider-line bg-primary"></div>
          </div>

          <div className="row g-4 mt-4">
            {portfolioItems.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div
                  className="portfolio-item position-relative overflow-hidden shadow"
                  onClick={() => openModal(item)}
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid w-100"
                  />
                  <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="text-center text-white">
                      <i className="bi bi-plus-lg fs-1 mb-2 d-block"></i>
                      <h5 className="text-uppercase mb-0">{item.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <div
        className="modal fade"
        id="portfolioModal"
        tabIndex="-1"
        aria-labelledby="portfolioModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 bg-transparent">
            <div className="modal-body p-0 position-relative">
              <button
                type="button"
                className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
              {selectedItem && (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="img-fluid w-100 rounded"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
