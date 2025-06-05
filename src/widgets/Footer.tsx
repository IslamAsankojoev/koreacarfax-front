export const Footer = () => {
  return (
    <footer className="main-footer text-white pt-4">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 col-sm-24"
            style={{
              marginBottom: '20px',
            }}
          >
            <h4>Проверка авто по VIN</h4>
            <p
              style={{
                marginBottom: '0',
              }}
            >
              <a href="index.htm">Проверка пробега автомобиля</a>
            </p>
            <p
              style={{
                marginBottom: '0',
              }}
            >
              <a href="report/index.htm">Получить полный отчет по авто</a>
            </p>
          </div>
          <div
            className="col-md-10 col-sm-24"
            style={{
              marginBottom: '20px',
            }}
          >
            <h4>Заказ автомобилей из Кореи</h4>
            <div
              className="col-md-12 col-sm-12 col-xs-12"
              style={{
                padding: '10px 0 0 0',
              }}
            >
              <h5>Офис в России</h5>
              {/* <!--<p style="margin-bottom: 0;"><a href="tel:+798341236808">+7 (983) 412-36-80</a></p>--> */}
              <p
                style={{
                  marginBottom: '0',
                }}
              >
                <a
                  href="mailto:auto@korea-cars.com"
                  target="_blank"
                  style={{
                    textAlign: 'center',
                  }}
                >
                  auto@korea-cars.com
                </a>
              </p>
              <p
                style={{
                  marginBottom: '0',
                }}
              >
                <a
                  target="_blank"
                  href="https://wa.me/message/QNQJ45BGBATTP1"
                  style={{
                    marginRight: '15px',
                  }}
                >
                  WhatsApp
                </a>
                <a target="_blank" href="https://t.me/report_korea_cars_com">
                  Telegram
                </a>
              </p>
            </div>

            <div
              className="col-md-12 col-sm-12 col-xs-12"
              style={{
                padding: '10px 0 0 0',
              }}
            >
              <h5>Офис в Корее</h5>
              {/* <!--<p style="margin-bottom: 0;"><a href="tel:123456789">+79 19-108-5259</a></p>--> */}
              <p
                style={{
                  marginBottom: '0',
                }}
              >
                <a
                  href="mailto:busan@korea-cars.com"
                  target="_blank"
                  style={{
                    textAlign: 'center',
                  }}
                >
                  busan@korea-cars.com
                </a>
              </p>
              <p
                style={{
                  marginBottom: '0',
                }}
              >
                <a
                  target="_blank"
                  href="https://wa.me/+123456789"
                  style={{
                    marginRight: '15px',
                  }}
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
          <div
            className="col-md-8 col-sm-24"
            style={{
              marginBottom: '20px',
            }}
          >
            <h4>Сотрудничество</h4>
            <p
              style={{
                fontSize: '14px',
                marginBottom: '0',
              }}
            >
              По любым вопросам и предложениям - напишите нам
            </p>
            <p
              style={{
                marginBottom: 0,
                display: 'flex',
                alignContent: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <a
                href="https://t.me/vl138"
                target="_blank"
                style={{
                  textAlign: 'center',
                }}
              >
                Telegram
              </a>
              <a
                href="https://wa.me/message/QNQJ45BGBATTP1"
                target="_blank"
                style={{
                  textAlign: 'center',
                }}
              >
                WhatsApp
              </a>
              <a
                href="mailto:info@korea-cars.com"
                target="_blank"
                style={{
                  textAlign: 'center',
                }}
              >
                E-mail
              </a>
            </p>
          </div>
        </div>
        <div className="row l-info">
          <div className="col-xs-8">
            <a href="docs/privacy_policy.pdf" target="_blank">
              Политика обработки&nbsp;данных
            </a>
          </div>

          <div className="col-xs-8">
            <a href="docs/terms_of_use.pdf" target="_blank">
              Пользовательское соглашение
            </a>
          </div>
          <div className="col-xs-8">
            <a href="docs/public_offer.pdf" target="_blank">
              Публичная оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
