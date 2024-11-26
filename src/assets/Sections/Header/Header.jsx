import { Link } from 'react-router-dom';
import './Header.css'
import '../../../App.css'
import logo from '../../image/Logo-removebg.png'
import { Svg } from '../../Components/index';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Header = () => {
  return (
    <>
      <Svg />
        <header className="d-flex justify-content-between align-items-center">
            <Link to='/' aria-current='page'>
              <img src={logo} className='logo' alt="logo" />
            </Link>
            <nav>
                <ul className='d-flex gap-5'>
                    <li><Link to='/' aria-current='page' className="text-uppercase text-dark">Home</Link></li>
                    <li><Link to='/About' aria-current='page' className="text-uppercase text-dark">about us</Link></li>
                    <li><Link to='/Products' aria-current='page' className="text-uppercase text-dark">products</Link></li>
                    <li><Link to='/Services' aria-current='page' className="text-uppercase text-dark">services</Link></li>
                    <li><Link to='/Contact' aria-current='page' className="text-uppercase text-dark">contact us</Link></li>
                </ul>
            </nav>
            <div className="nav-items d-flex gap-3">
              <i className="bi bi-bag-fill fs-3"></i>
              <i className="bi bi-person-circle fs-3"></i>
            </div>
        </header>
    </>
  )
}

export default Header