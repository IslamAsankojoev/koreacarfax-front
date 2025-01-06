import { CarService } from '@/services/cars.service'
import { JsonLd } from '@/widgets/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page() {
  const cars = await CarService.getCars()
  return (
    <>
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
      <section className="section container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {cars?.data.map((car) => (
            <Link href={`/cars/${car.documentId}`}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                }}
                className="description-car"
                key={car.id}
              >
                <img
                  src={
                    car?.images && car?.images?.length > 0
                      ? car?.images[0].url
                      : '/images/car-placeholder.png'
                  }
                  alt={car.model_name}
                  width={300}
                  height={200}
                  className="rounded-md !object-cover"
                />

                <div className="table-property">
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
