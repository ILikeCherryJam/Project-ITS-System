import './css/header.css';

const Header = () => {
  return (
    
    <section className="header">
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
            <div className='header-contacts'>
              <img src="./src/assets/contacts/telegram.svg" alt="svg" />
              <img src="./src/assets/contacts/whatsapp.svg" alt="svg" />
              <img src="./src/assets/contacts/phone.svg" alt="svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="uk-container">
          <div className="header-bottom__list">
            <div className="hb__first-column">
              <div className="hb__logo">
                <img src="./src/assets/logo/test-logo.png" alt="test-logo" />
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