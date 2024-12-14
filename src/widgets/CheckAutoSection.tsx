'use client'

import { CarService, ICar } from '@/services/cars.service'
import clsx from 'clsx'
import { useState } from 'react'
import { Open_Sans } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'

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

    const { data } = (await CarService.getCars(vinValue)) as any
    setCar(data[0])
    if (!data[0]) {
      alert('Нет данных по автомобилю!')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVinValue(e.target.value)
  }

  return (
    <section className="section section-hero">
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
              id="carinfo"
              className="container info-animated active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div id="toast">Ссылка скопирована!</div>
              <div className="statistics-box">
                {/* <div className="show-damage">
              <span></span>
            </div> */}

                {/* <div className="share-result">
                  <svg width="24" height="24">
                    <path
                      opacity="0.8"
                      d="M13.1 14.9961V6.86151L14.7489 8.51037C15.1723 8.93384 15.8589 8.93384 16.2824 8.51037C16.7059 8.08689 16.7059 7.4003 16.2824 6.97683L13.193 3.88744C13.0032 3.69767 12.8299 3.55215 12.6403 3.45489C12.4487 3.35655 12.2456 3.31016 12 3.31016C11.7531 3.31016 11.5461 3.36092 11.3501 3.46399C11.1563 3.56593 10.9775 3.71691 10.784 3.91044L7.71761 6.97683C7.29413 7.4003 7.29413 8.08689 7.71761 8.51037C8.14108 8.93384 8.82767 8.93384 9.25114 8.51037L10.9 6.86151V14.9961C10.9 15.6079 11.3991 16.1021 12.0108 16.0961C12.6141 16.0901 13.1 15.5994 13.1 14.9961ZM5.1 17.9007V13.0007C5.1 12.3932 4.60751 11.9007 4 11.9007C3.39249 11.9007 2.9 12.3932 2.9 13.0007V19.0007C2.9 19.6083 3.39249 20.1007 4 20.1007H20C20.6075 20.1007 21.1 19.6083 21.1 19.0007V13.0007C21.1 12.3932 20.6075 11.9007 20 11.9007C19.3925 11.9007 18.9 12.3932 18.9 13.0007V17.9007H5.1Z"
                      strokeWidth="0.2"
                    ></path>
                  </svg>
                </div> */}
                <div className="buttom-buttons">
                  <a
                    href={`https://wa.me/+996553112233?text=Здравствуйте,%20я%20по%20поводу%20машины%20-%20${car?.model_name}%20%0AВин код - %20${car?.vin}`}
                    className="show-report experement"
                    target="_blank"
                  >
                    <span>Полный отчет за 3 минуты</span>
                  </a>
                </div>

                {/* <!--<div className="statistics-item">
                           <span className={`value ${opensans.className}`} id="M_CHASSIS_NO">
                               
                           </span>
                           <p className="title">
                               Идентификатор
                           </p>
                       </div>--> */}
                <div className="statistics-item">
                  <span className={`value ${opensans.className}`} id="M_TRADEMARK_OF_VEHICLE">
                    {car?.model_name}
                  </span>
                  <p className="title">Наименование модели</p>
                </div>
                <div className="statistics-item">
                  <span className={`value ${opensans.className}`} id="M_COLOR_ENG">
                    {' '}
                    {car?.color}
                  </span>
                  <p className="title">Цвет автомобиля</p>
                </div>
                <div className="statistics-item">
                  <span className={`value ${opensans.className}`} id="M_EXPORT_PERMIT_DATE">
                    {car?.korea_export_date}
                  </span>
                  <p className="title">Дата вывоза из Кореи</p>
                </div>

                <div className="statistics-item">
                  <span className={`value ${opensans.className}`} id="M_DATE_OF_FIRST_REGISTRATION">
                    {car?.start_date}
                  </span>
                  <p className="title">Начало эксплуатации</p>
                </div>

                <div className="statistics-item">
                  <span className={`value ${opensans.className}`} id="M_FINAL_DRIVE_DISTANCE">
                    {car?.probeg} км
                  </span>
                  <p className="title">Пробег при вывозе</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      }
      <div id="images" className="fotorama" data-nav="thumbs" data-allowfullscreen="true"></div>
    </section>
  )
}
