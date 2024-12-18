export const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div 
          className="header-content"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0',
          }}
          >
          <a href="#"></a>
          <nav className="site-nav">
            <ul className="clean-list site-links">
              <li>
                <a href="https://wa.me/+996553112233" target="_blank" className="text-white">Заказать отчет</a>
              </li>
              <li>
                <a href="https://wa.me/+996553112233" target="_blank" className="text-white">Авто под заказ из Кореи</a>
              </li>
              <li>
                <a href="#examples" className="text-white">Как скручивают</a>
              </li>
              {/* <li>
                <a href="#" className="text-white">Антирейтинг авто</a>
              </li> */}
              <li>
                <a href="https://t.me/uclami" className="text-white">
                  Обсуждение
                </a>
              </li>
            </ul>
            <div
              aria-labelledby="offcanvasNavbarLabel"
              id="offcanvasNavbar"
              tabIndex={-1}
              className="offcanvas offcanvas-end text-bg-dark"
            >
              <div className="offcanvas-header">
                <h3 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Проверка авто по VIN
                </h3>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body navbar-dark">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <a
                      href="/"
                      className="nav-link"
                      style={{
                        fontSize: '18px',
                        color: 'white',
                      }}
                    >
                      Главная
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Проверка пробега автомобиля
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Как скручивают
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Антирейтинг авто
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Обсуждение
                    </a>
                  </li>
                </ul>
                <h3
                  className="offcanvas-title"
                  id="offcanvasNavbarLabel"
                  style={{
                    paddingTop: '20px',
                  }}
                >
                  Полная проверка авто
                </h3>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Получить полный отчет по авто
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Что проверяется
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Как оплатить
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Пример отчета
                    </a>
                  </li>
                </ul>
                <h3
                  className="offcanvas-title"
                  id="offcanvasNavbarLabel"
                  style={{
                    paddingTop: '20px',
                  }}
                >
                  Заказать авто из Кореи
                </h3>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <a href="#" className="nav-link">
                      Наши услуги
                    </a>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <a href="#" className="nav-link">
                      Процесс покупки
                    </a>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <a href="#" className="nav-link">
                      Расчет стоимости
                    </a>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <a href="#" className="nav-link">
                      Бот для подбора
                    </a>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <a href="#" className="nav-link">
                      О нас
                    </a>
                  </li>
                  <li className="nav-item" data-bs-dismiss="offcanvas">
                    <a href="#" className="nav-link">
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <a
              href="https://t.me/korea_cars_com"
              target="_blank"
              className="btn btn-outlined only-mobile sm:hidden"
              style={{
                marginRight: '20px',
              }}
            >
              Обсуждение
            </a> */}
            <a
              className="btn btn-outlined hover:bg-white"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              style={{
                textOverflow: 'clip',
                minWidth: '60px',
                padding: '3px 0 0',
                display: 'none'
              }}
            >
              <span
                className="navbar-toggler-icon"
                style={{
                  width: '2rem',
                  height: '3rem',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  style={{
                    stroke: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M4 7h22M4 15h22M4 23h22"
                  ></path>
                </svg>
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
