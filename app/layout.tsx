import './globals.css'
import Script from 'next/script'
import { generateMeta } from '@/shared/lib/generateMeta'
import { Header } from '@/widgets'

export function generateMetadata() {
  return generateMeta({
    title: 'Проверка пробега авто из Кореи',
    description:
      'Проверьте пробег, ДТП, затопление и дату выпуска авто из Кореи по VIN. На нашем сайте вы узнаете реальный пробег и историю, чтобы сделать правильный выбор.',
    keywords:
      'Пробег,Автомобить,Скручен,Реальный,Вин,Номер,Смотан,Проверить,Пробить,Узнать,Затопление,Наводнение,Утопленик,Аварии,ДТП,Дата выпуска,Дата производства,Дата изготовления,Проходной,Непроходной,Расчеты,Угон,Корея,Ввезен,Привезенный,car365,carstat,аукцион,автотека,карстат,кар365,корея карс',
  })
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="translated-ltr">
      <head>
        <title>Первый в Сервис проверки пробега, ДТП автомобилей из Кореи</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" type="image/svg+xml" href="img/favicon/safari-pinned-tab.svg" />
        <link href="css?family=Open+Sans:400,700|Raleway:400,700" rel="stylesheet" />
        {/* <link rel="stylesheet" href="css/bootstrap.min.css" /> */}
        {/* <link rel="stylesheet" href="css/bootstrap-select.css" /> */}
        <link href="css/screen.css" rel="stylesheet" />
        <link href="css/widget-frame.css" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png" />
        <link rel="icon" href="img/favicon/favicon.ico" />
        <link href="manifest.1.0.json" rel="manifest" />
        <link rel="mask-icon" href="img/favicon/safari-pinned-tab.svg" color="#5bbad5" />

        {/* <link rel="stylesheet" href="npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" /> */}
        <Script src="npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"></Script>

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000000" />
        <Script src="js/jquery-3.6.4.min.js"></Script>
        <Script
          src="npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js"
          type="text/javascript"
        ></Script>
        {/* <Script src="js/transformations.js"></Script> */}
        <Script src="js/functions4.js"></Script>
        <Script src="js/jquery-3.6.4.min.js" defer></Script>

        <link href="ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet" />
        <Script src="ajax/libs/fotorama/4.6.4/fotorama.js"></Script>
      </head>
      <body className="home dom-ready" id="page">
        <Header />
        {children}
      </body>
    </html>
  )
}
