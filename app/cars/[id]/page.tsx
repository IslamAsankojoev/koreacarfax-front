import { CarService } from '@/services/cars.service'
import { generateMeta } from '@/shared/lib/generateMeta'
import { SearchForm } from '@/widgets'
import { CarSlider } from '@/widgets/CarSlider'
import { JsonLd } from '@/widgets/JsonLd'
import { Open_Sans } from 'next/font/google'

interface PageProps {
  params: {
    id: string
  }
}

const opensans = Open_Sans({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  weight: ['300', '400', '500', '600', '700'],
})

export async function generateMetadata(props: PageProps) {
  const res = await CarService.getCarById(props.params.id)
  const car = res?.data || null
  return generateMeta({
    title: 'Проверка пробега авто из Кореи' + (car ? ` ${car.model_name} - ${car.vin}` : ''),
    description:
      'Проверьте пробег, ДТП, затопление и дату выпуска авто из Кореи по VIN. На нашем сайте вы узнаете реальный пробег и историю, чтобы сделать правильный выбор.' +
      (car ? ` ${car.model_name} - ${car.vin}` : ''),
    keywords:
      'Пробег,Автомобить,Скручен,Реальный,Вин,Номер,Смотан,Проверить,Пробить,Узнать,Затопление,Наводнение,Утопленик,Аварии,ДТП,Дата выпуска,Дата производства,Дата изготовления,Проходной,Непроходной,Расчеты,Угон,Корея,Ввезен,Привезенный,car365,carstat,аукцион,автотека,карстат,кар365,корея карс',
  })
}

export default async function Page({ params }: PageProps) {
  const res = await CarService.getCarById(params.id)
  const car = res?.data || null

  if (!car) {
    return <div>Автомобиль не найден</div>
  }

  return (
    <>
      <JsonLd
        jsonLdSchema={{
          name: 'Проверка пробега авто из Кореи',
          type: 'WebPage',
          description:
            'Проверьте пробег, ДТП, затопление и дату выпуска авто из Кореи по VIN. На нашем сайте вы узнаете реальный пробег и историю, чтобы сделать правильный выбор.',
        }}
      />
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
            <SearchForm initVin={car.vin} />
          </div>
        </div>
        <div className="info-animated active max-w-[90%] w-full mx-auto">
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
                href={`https://wa.me/+123456789?text=Здравствуйте,%20я%20по%20поводу%20машины%20-%20${car?.model_name}%20%0AВин код - %20${car?.vin}`}
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
                <span className={`value ${opensans.className}`} id="M_DATE_OF_FIRST_REGISTRATION">
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
        </div>
        <div id="images" className="fotorama" data-nav="thumbs" data-allowfullscreen="true"></div>
      </section>
    </>
  )
}
