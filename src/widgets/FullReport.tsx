export const FullReport = () => {
  return (
    <section className="section section-destination">
      {/* <!-- Title --> */}
      <div className="section-title report">
        <div className="container">
          <h2 className="title">Полный отчет автомобиля из Кореи по VIN номеру</h2>
          <p className="sub-title">получите полную историю автомобиля из источников Кореи</p>
        </div>
      </div>

      {/* <!-- Content --> */}
      <div className="container">
        <div className="row reportHeaders">
          <div className="iHG3j">
            <div className="Scynl">
              <i className="zS6Ho"></i>
              <div className="UOrML bPZ7Z">История пробега</div>
            </div>
            <div className="Scynl">
              <i className="zS6Ho"></i>
              <div className="UOrML bPZ7Z">Участие в ДТП и стоимость ремонтов</div>
            </div>
            <div className="Scynl">
              <i className="zS6Ho"></i>
              <div className="UOrML bPZ7Z">Информация о затоплении автомобиля</div>
            </div>
            <div className="Scynl">
              <i className="zS6Ho"></i>
              <div className="UOrML bPZ7Z">Сведения о розыске, угон</div>
            </div>
            <div className="Scynl">
              <i className="zS6Ho"></i>
              <div className="UOrML bPZ7Z">Дата производства авто</div>
            </div>
            <div className="Scynl">
              <i className="zS6Ho"></i>
              <div className="UOrML bPZ7Z">
                Информация о истории смены владельца/номера автомобиля
              </div>
            </div>
            <div className="Scynl">
              <i className="zS6Ho"></i>
              <div className="UOrML bPZ7Z">Работа в такси, каршеренге и другом бизнесе</div>
            </div>
            <div className="Scynl">
              <i className="zS6Ho"></i>
              <div className="UOrML bPZ7Z">Технические характеристики</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="input-line"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <a
              href="#"
              className="form-submit btn btn-special"
              style={{
                height: '30px',
                lineHeight: '30px',
                marginBottom: '10px',
                backgroundColor: '#36b555',
                padding: '0 30px',
              }}
            >
              Смотреть пример
            </a>
          </div>
          <div
            className="input-line"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <a href="https://wa.me/+79191085259" className="form-submit btn btn-special">
              Заказать отчет
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
