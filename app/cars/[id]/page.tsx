import { CarService } from '@/services/cars.service'
import { generateMeta } from '@/shared/lib/generateMeta'
import { Header } from '@/widgets'
import { JsonLd } from '@/widgets/JsonLd'

interface PageProps {
  params: {
    id: string
  }
}

export async function generateMetadata(props: PageProps) {
  const res = await CarService.getCarById(props.params.id)
  const car = res?.data || null
  return generateMeta({
    title: 'Проверка пробега авто из Кореи' + (car ? ` ${car.model_name} - ${car.vin}` : ''),
    description:
      'Проверьте пробег, ДТП, затопление и дату выпуска авто из Кореи по VIN. На нашем сайте вы узнаете реальный пробег и историю, чтобы сделать правильный выбор.' + (car ? ` ${car.model_name} - ${car.vin}` : ''),
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
      <section className="section section-hero">
        <JsonLd
          jsonLdSchema={{
            name: 'Проверка пробега авто из Кореи',
            type: 'WebPage',
            description:
              'Проверьте пробег, ДТП, затопление и дату выпуска авто из Кореи по VIN. На нашем сайте вы узнаете реальный пробег и историю, чтобы сделать правильный выбор.',
          }}
        />
        <a id="check"></a>
        <div
          className="hero-box"
          style={{
            position: 'relative',
            backgroundImage: 'url(/img/hero-background.jpg)',
            backgroundPosition: '50% 60%',
            padding: '100px 0',
          }}
        >
          <div className="container">
            <div className="hero-text align-center">
              <h1>Проверка пробега авто из Кореи</h1>
              <p>по VIN номеру</p>
            </div>
          </div>
        </div>
        <div id="images" className="fotorama" data-nav="thumbs" data-allowfullscreen="true"></div>
      </section>
      <section className="section container" style={{ padding: '2rem' }}>
        <div>
          <div>
            <img
              src={
                car?.images && car?.images?.length > 0 ? car?.images[0].url : '/img/no-image.png'
              }
              width={500}
              height={500}
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className="table-property" style={{ padding: '2rem' }}>
            <h2>{car.model_name}</h2>
            <table>
              <tbody>
                <tr>
                  <th>Цвет</th>
                  <td>{car.color}</td>
                </tr>
                <tr>
                  <th>Пробег</th>
                  <td>{car.probeg}</td>
                </tr>
                <tr>
                  <th>VIN</th>
                  <td>{car.vin || 'На продаже'}</td>
                </tr>
              </tbody>
            </table>
            <div style={{ marginTop: '10px' }}>
              <a
                href="https://wa.me/+79191085259"
                style={{
                  backgroundColor: '#36b555',
                  textDecoration: 'none',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                }}
              >
                Узнать больше о предложении
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
