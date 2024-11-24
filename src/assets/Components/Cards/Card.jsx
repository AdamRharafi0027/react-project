import './Card.css'

const Card = props => {
  return (
    <>
      <div className="card" style={{width: '15rem'}}>
            <img src={props.image} className="card-img-top m-auto" alt="..." />
            <div className="card-body">
              <div className="card-body-header d-flex justify-content-between align-items-center">
                <h5 className="card-title text-uppercase">{props.title}</h5>
                <h5 className="card-title text-uppercase fs-2">{props.price}</h5>
              </div>
              <div className="card-body-items d-flex justify-content-between align-items-center">
                <a href="#" className="btn rounded-circle">
                  <i className="bi bi-bag-fill text-light"></i>
                </a>
                <div className="rate d-flex align-items-center gap-1">
                  <i className="bi bi-star-fill text-warning"></i>
                  <h5 className="rate">{props.rate}</h5>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Card