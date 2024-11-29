import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import './Header.css'
import '../../../App.css'
import logo from '../../image/Logo-removebg.png'
import { Svg } from '../../Components/index';
import { useRef, useState } from 'react';



const Header = () => {

  let [displayed, setDisplayed] = useState(false)

  const Menu = useRef()

  const links = ()=> Menu.current.className = ('d-none');

  const MenuDisplay = ()=> {
    if (displayed === false) {
      displayed = true
      Menu.current.className = ('d-flex')
    }else {
      displayed = false
      Menu.current.className = ('d-none')
    }
    
  }

  return (
    <>
      <Svg className='svg position-absolute z-n1 svg' />
        <header className="d-flex justify-content-between align-items-center position-relative">
            <Link to='/' aria-current='page'>
              <img src={logo} className='logo' alt="logo" />
            </Link>
            <nav ref={Menu}>
                <ul className='d-flex gap-5'>
                    <li><Link onClick={links} to='/' aria-current='page' className="text-uppercase text-dark link">Home</Link></li>
                    <li><Link onClick={links} to='/About' aria-current='page' className="text-uppercase text-dark link">about us</Link></li>
                    <li><Link onClick={links} to='/Products' aria-current='page' className="text-uppercase text-dark link">products</Link></li>
                    <li><Link onClick={links} to='/Services' aria-current='page' className="text-uppercase text-dark link">services</Link></li>
                    <li><Link onClick={links} to='/Contact' aria-current='page' className="text-uppercase text-dark link">contact us</Link></li>
                </ul>
            </nav>
            <div className="nav-items d-flex gap-3">
              <i className="bi bi-bag-fill fs-3"></i>
              <i className="bi bi-person-circle fs-3"></i>
            </div>
            <i className="bi bi-list d-none humb" onClick={MenuDisplay}></i>
        </header>
    </>
  )
}

export default Header