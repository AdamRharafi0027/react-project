import './Header.css'
import '../../../App.css'
import logo from '../../image/Logo-removebg.png'
import 'bootstrap-icons/font/bootstrap-icons.css';


const Header = () => {
  return (
    <>
    <svg width="719" height="488" className='svg position-absolute z-n1' viewBox="0 0 719 488" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M71.5001 225C-141 253 194 0 194 0H720V346C720 346 453 588 482.5 439C512 290 310.5 369.5 223.5 367.5C136.5 365.5 284 197 71.5001 225Z" fill="#9A7E6F"/>
</svg>

        <header className="d-flex justify-content-between align-items-center">
            <img src={logo} className='logo' alt="logo" />
            <nav>
                <ul className='d-flex gap-5'>
                    <li><a className='text-uppercase text-dark' href="#">home</a></li>
                    <li><a className='text-uppercase text-dark' href="#">about us</a></li>
                    <li><a className='text-uppercase text-dark' href="#">products</a></li>
                    <li><a className='text-uppercase text-dark' href="#">services</a></li>
                    <li><a className='text-uppercase text-dark' href="#">contact us</a></li>
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