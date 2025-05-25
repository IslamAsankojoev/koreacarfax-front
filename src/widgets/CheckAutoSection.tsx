'use client'

import { CarService, ICar } from '@/services/cars.service'
import { useEffect, useState } from 'react'
import { Open_Sans } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { JsonLd } from './JsonLd'
import { CarSlider } from './CarSlider'

const opensans = Open_Sans({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  weight: ['300', '400', '500', '600', '700'],
})

export const CheckAutoSection = () => {
  const [vinValue, setVinValue] = useState('')
  const [car, setCar] = useState<ICar | null>(null)

  const handleSearch = async () => {
    if (!vinValue) {
      return
    }

    const { data } = (await CarService.searchCar(vinValue)) as any
    setCar(data[0])
    if (!data[0]) {
      alert(
`Информация временно недоступна. 
Ваш запрос обрабатывается. 
Данные будут доступны в течение 24 часов.

Для помощи обратитесь по телефону:
+79 19-108-5259
`)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVinValue(e.target.value)
  }

  return (
    <section className="section section-hero">
      <JsonLd
        jsonLdSchema={{
          name: 'Проверка пробега авто из Кореи',
          type: 'WebPage',
          description:
            'Проверьте пробег, ДТП, затопление и дату выпуска автомобиля из Кореи по VIN. На нашем сайте вы быстро узнаете реальный пробег и историю авто, чтобы сделать правильный выбор.',
        }}
      />
      <a id="check"></a>
      <div
        className="hero-box"
        style={{
          position: 'relative',
          backgroundImage: 'url(/img/hero-background.jpg)',
          backgroundPosition: '50% 40%',
        }}
      >
        <div className="container">
          <div className="hero-text align-center">
            <h1>Проверка пробега авто из Кореи</h1>
            <p>по VIN номеру</p>
          </div>

          <form className="destinations-form">
            <div className="input-line">
              <input
                id="VIN"
                type="text"
                name="destination"
                className="form-input check-value bg-white"
                maxLength={17}
                value={vinValue}
                onChange={handleChange}
                placeholder="KNAP6815GJK504750"
              />
              <button
                onClick={handleSearch}
                id="checkButton"
                type="button"
                name="destination-submit"
                className="form-submit btn btn-special"
              >
                Начать проверку
              </button>
            </div>
          </form>
        </div>
      </div>

      {
        <AnimatePresence>
          {car && (
            <motion.div
              className="info-animated active max-w-[90%] w-full mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div id="toast">Ссылка скопирована!</div>
              <div className="statistics-box">
                <div className="show-damage !hidden md:!block">
                  {!!car?.car_status && (
                    <p
                      className={`${opensans.className}`}
                      style={{
                        color: 'red',
                        fontWeight: '900',
                        fontSize: '1.3rem',
                      }}
                    >
                      {car?.car_status}
                    </p>
                  )}
                </div>
                <div className="statistics-item !block md:!hidden">
                  {!!car?.car_status && (
                    <p
                      className={`${opensans.className}`}
                      style={{
                        color: 'red',
                        fontWeight: '900',
                        fontSize: '1.3rem',
                      }}
                    >
                      {car?.car_status}
                    </p>
                  )}
                </div>
                <div className="buttom-buttons">
                  <a
                    href={`https://wa.me/+79191085259?text=Здравствуйте,%20я%20по%20поводу%20машины%20-%20${car?.model_name}%20%0AВин код - %20${car?.vin}`}
                    className="show-report experement"
                    target="_blank"
                  >
                    <span>Полный отчет за 3 минуты</span>
                  </a>
                </div>

                <div className="statistics-item">
                  <span className={`value ${opensans.className}`} id="M_CHASSIS_NO">
                    <CarSlider car={car} />
                  </span>

                  <p className="title">Фото</p>
                </div>
                <div className="statistics-item">
                  <span className={`value ${opensans.className}`} id="M_TRADEMARK_OF_VEHICLE">
                    {car?.model_name}
                  </span>
                  <p className="title">Наименование модели</p>
                </div>
                {car?.color && (
                  <div className="statistics-item">
                    <span className={`value ${opensans.className}`} id="M_COLOR_ENG">
                      {' '}
                      {car?.color}
                    </span>
                    <p className="title">Цвет автомобиля</p>
                  </div>
                )}
                {car?.korea_export_date && (
                  <div className="statistics-item">
                    <span className={`value ${opensans.className}`} id="M_EXPORT_PERMIT_DATE">
                      {car?.korea_export_date}
                    </span>
                    <p className="title">Дата вывоза из Кореи</p>
                  </div>
                )}

                {car?.start_date && (
                  <div className="statistics-item">
                    <span
                      className={`value ${opensans.className}`}
                      id="M_DATE_OF_FIRST_REGISTRATION"
                    >
                      {car?.start_date}
                    </span>
                    <p className="title">Начало эксплуатации</p>
                  </div>
                )}

                {car?.probeg && (
                  <div className="statistics-item">
                    <span className={`value ${opensans.className}`} id="M_FINAL_DRIVE_DISTANCE">
                      {car?.probeg} км
                    </span>
                    <p className="title">Пробег при вывозе</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      }
      <div id="images" className="fotorama" data-nav="thumbs" data-allowfullscreen="true"></div>
    </section>
  )
}
