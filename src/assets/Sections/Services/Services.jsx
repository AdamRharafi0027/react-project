import "./Services.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import delivery from '../../image/free-delivery.png'
import retu from '../../image/return.png'
import customer from '../../image/loyal-customer.png'
import scale from '../../image/scale.png'

const Services = () => {
  return (
    <>
      <section id="services">
        <h1 className="text-uppercase mt-5 position-relative">services</h1>
        <div className="cards mt-5 d-flex justify-content-center align-items-center flex-wrap">
          <div className="card" style={{ width: "18rem" }}>
          <img src={delivery} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase"></h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
          <img src={retu} className="card-img-top m-auto" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase"></h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
          <img src={scale} className="card-img-top m-auto" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase"></h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
          <img src={customer} className="card-img-top m-auto" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-uppercase"></h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
