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
          <h2>Авто из Кореи</h2>
          <p>Закажи автомобиль из Кореи с гарантией и без рисков</p>
          <a href="https://wa.me/+123456789" className="form-submit btn btn-special">
            Узнать больше о предложении
          </a>
        </div>
      </div>
    </div>
  )
}
