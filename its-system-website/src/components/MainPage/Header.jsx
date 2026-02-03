import './css/header.css';
import { useState } from 'react';
import Logo from '../../assets/logo/its-system.png';

const Header = () => {

  const [display, setDisplay] = useState(false);

  return (
    
    <section className="header fixed">
      <div className="header-upper">
        <div className="uk-container">
          <div className="header-upper__menu">
            <div className="header-menu__list">
                <p className="header-menu__item">Почему мы</p>
                <p className="header-menu__item">Корпоративным клиентам</p>
                <p className="header-menu__item">Аутсортинг печати</p>
                <p className="header-menu__item">Нам доверяют</p>
                <p className="header-menu__item">Контакты</p>
            </div>
            <ul className="header-menu__btn"
              onClick={() => {setDisplay(prev => !prev)}}
            >
              <li className='header-menu__btn-line'></li>
              <li className='header-menu__btn-line'></li>
              <li className='header-menu__btn-line'></li>
            </ul>
            <div className='header-contacts'>
              <img src="./src/assets/contacts/telegram.svg" alt="svg" />
              <img src="./src/assets/contacts/whatsapp.svg" alt="svg" />
              <img src="./src/assets/contacts/phone.svg" alt="svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={display ? "header-menu__list-slide active" : "header-menu__list-slide"}>
        <div className="uk-container header-slide">
          <p className="header-menu__item slide">Почему мы</p>
          <p className="header-menu__item slide">Корпоративным клиентам</p>
          <p className="header-menu__item slide">Аутсортинг печати</p>
          <p className="header-menu__item slide">Нам доверяют</p>
          <p className="header-menu__item slide">Контакты</p>
        </div>
      </div>
      <div className="header-bottom">
        <div className="uk-container">
          <div className="header-bottom__list">
            <div className="hb__first-column">
              <div className="hb__logo">
                <img src={Logo} alt="test-logo" />
              </div>
              <p className="hb__slogan">
                  Ремонт, заправка и обслуживание оргтехники
              </p>
            </div>
            <div className="hb__second-column">
              <p>+х (ххх) ххх-хх-хх</p>
              <p>+х (ххх) ххх-хх-хх</p>
            </div>
          </div>
        </div> 
      </div>
      
    </section>
    
  )
}

export default Header