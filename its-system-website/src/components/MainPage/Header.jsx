import './header.css';

const Header = () => {
  return (
    <section className="header">
      <div className='container'>
        <div className="header-menu">
            <ul className="header-menu__list">
                <li className="header-menu__item">Почему мы</li>
                <li className="header-menu__item">Корпоративным клиентам</li>
                <li className="header-menu__item">Аутсортинг печати</li>
                <li className="header-menu__item">Нам доверяют</li>
                <li className="header-menu__item">Контакты</li>
            </ul>
            <div className='header-contacts'>
              <img src="../../assets/contacts/telegram.svg" alt="svg" />
              <img src="../../assets/contacts/whatsapp.svg" alt="svg" />
              <img src="../../assets/contacts/email.svg" alt="svg" />
            </div>
        </div>
        <div className="header-bottom">
            <div>
              <img src="../../assets/logo/" alt="" />
              <p>Ремонт, заправка и обслуживание оргтехники</p>
            </div>
            <div>
              <p>х (ххх) ххх-хх-хх</p>
              <p>х (ххх) ххх-хх-хх</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Header