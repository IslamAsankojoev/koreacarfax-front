export const Banner = () => {
  return (
    <div
      className="parallax-box"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'url(img/hero-background2.jpg)',
        backgroundAttachment: 'scroll',
        backgroundPositionX: '80%',
        padding: '80px 0',
      }}
    >
      <div className="container">
        <div className="text align-center">
          <h1>Авто из Кореи</h1>
          <p>Закажи автомобиль из Кореи с гарантией и без рисков</p>
          <a href="https://wa.me/+821021895448" className="form-submit btn btn-special">
            Узнать больше о предложении
          </a>
        </div>
      </div>
    </div>
  )
}
