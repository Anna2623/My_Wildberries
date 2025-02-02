import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import { currency } from "../../utils/images";

import "./Header.scss";

const Header = () => {
  return (
    <header className='header text-white'>
      <div className='container'>
        <div className='header-cnt'>
          <div className='header-cnt-top fs-13 py-2 flex align-center justify-between'>
            <div className='header-cnt-top-l'>
              <ul className='flex top-links align-center'>
                <li className="currency">
                  <img src={currency} alt="currency_us" />
                  RU
                </li>
                <li className='vert-line'></li>
                <li className="location">
                  <i className="fa fa-location-arrow" aria-hidden="true"></i>
                  Москва
                </li>
                <li className='vert-line'></li>
                <li className='flex align-center'>
                  <span className='fs-13'>Продавайте на Wildberries</span>
            </li>
          </ul>
        </div>
        <div className='header-cnt-top-r'>
          <ul className='top-links flex align-center'>
            <li>
              <Link to="/" className='top-link-itm'>
                <span className='top-link-itm-ico mx-2'>
                  <i className='fa-solid fa-circle-question'></i>
                </span>
                <span className='top-link-itm-txt'>Поддержка</span>
              </Link>
            </li>
            <li className='vert-line'></li>
            <li>
              <Link to="/">
                <span className='top-link-itm-txt'>Регистрация</span>
              </Link>
            </li>
            <li className='vert-line'></li>
            <li>
              <Link to="/">
                <span className='top-link-itm-txt'>Авторизация</span>
              </Link>
            </li>
          </ul>
        </div>
          </div>
          <div className='header-cnt-bottom'>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header