import { Link } from 'react-router-dom';

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container py-4 text-center">
          <div className='flex align-center justify-center text-white fw-3 fs-14'>
            <Link to="/" className='text-uppercase'>политика конфиденциальности</Link>
            <div className='vert-line'></div>
            <Link to="/" className='text-uppercase'>срок службы</Link>
            <div className='vert-line'></div>
            <Link to="/" className='text-uppercase'>О компании Wildberries</Link>
          </div>
          <span className='text-white copyright-text text-manrope fs-14 fw-3'>Все права защищены &copy;</span>
      </div>
    </footer>
  )
}

export default Footer