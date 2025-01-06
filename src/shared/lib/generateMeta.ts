import { Metadata } from 'next'
import { headers } from 'next/headers'

interface Meta {
  title: string
  description: string
  keywords: string
}

const defaultMeta: Metadata = {
  title: 'Проверка пробега авто из Кореи',
  description: 'Проверьте пробег, ДТП, затопление и дату выпуска автомобиля из Кореи по VIN. На нашем сайте вы быстро узнаете реальный пробег и историю авто, чтобы сделать правильный выбор.',
  keywords: 'Пробег,Автомобить,Скручен,Реальный,Вин,Номер,Смотан,Проверить,Пробить,Узнать,Затопление,Наводнение,Утопленик,Аварии,ДТП,Дата выпуска,Дата производства,Дата изготовления,Проходной,Непроходной,Расчеты,Угон,Корея,Ввезен,Привезенный,car365,carstat,аукцион,автотека,карстат,кар365,корея карс',
}

export const generateMeta = (metadata: Meta) => {
  const url = headers().get('seo-url')
  const origin = headers().get('seo-origin')
  return {
    title: metadata.title || defaultMeta.title,
    description: metadata.description || defaultMeta.description,
    keywords: metadata.keywords || defaultMeta.keywords,
    applicationName: metadata.title || defaultMeta.title,
    openGraph: {
      title: metadata.title || defaultMeta.title,
      description: metadata.description || defaultMeta.description,
      url: url as string,
      locale: 'ru-RU',
      siteName: defaultMeta.title,
      type: 'website',
    },
    alternates: {
      canonical: url as string,
    },
    robots: {
      follow: true,
      index: true,
    },
    other: {
      'vkontakte:title': metadata.title || defaultMeta.title,
      'og:share:whatsapp_text': metadata.title || defaultMeta.title,
      'og:share:telegram_text': metadata.title || defaultMeta.title,
      'vkontakte:description': metadata.description || defaultMeta.description,
      'vkontakte:image': `${origin}/images/OG.jpg` as string,
      'og:image': `${origin}/images/OG.jpg`,
      'og:image:width': '1200',
      'og:image:height': '627',
      'twitter:image': `${origin}/images/OG.jpg`,
      'twitter:card': 'summary_large_image',
      'twitter:title': metadata.title,
      'twitter:description': metadata.description,
      'twitter:site': 'https://x.com',
      'twitter:url': 'https://x.com',
      'twitter:image:src': `${origin}/images/OG.jpg`,
    },
  }
}
