import { Link } from 'react-router-dom';
import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  const listClass = 'text-light mb-3 d-flex align-items-center gap-3';
  return (
    <>
      <section id="footer" className="d-flex justify-content-between align-items-center">
        <ul className="d-flex flex-column">
          <li className={listClass}><i className="bi bi-envelope fs-3"></i>support@jacketstore.com</li>
          <li className={listClass}><i className="bi bi-telephone fs-3"></i>+1(800) 123-4567</li>
          <li className={listClass}><i className="bi bi-geo-alt fs-3"></i>101 fashion avenue, style city, ny 10001, usa</li>
        </ul>
        <ul className="d-flex flex-column">
          <li className={listClass}><i className="bi bi-instagram fs-3"></i>@thejacketstore</li>
          <li className={listClass}><i className="bi bi-facebook fs-3"></i>facebook.com/thajacketstor</li>
        </ul>
        {/* <ul className="d-flex flex-column">
          <h1 className="text-light">links</h1>
          
          <li><Link className={listClass} to='/' aria-current='page'>home</Link></li>
          <li><Link className={listClass} to='/About' aria-current='page'>about us</Link></li>
          <li><Link className={listClass} to='/Products' aria-current='page'>products</Link></li>
          <li><Link className={listClass} to='/Services' aria-current='page'>services</Link></li>
          <li><Link className={listClass} to='/Contact' aria-current='page'>contact us</Link></li>
        </ul> */}
      </section>
    </>
  );
};

export default Footer;
