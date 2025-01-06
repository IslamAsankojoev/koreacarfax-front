import { Footer, Header, CheckAutoSection, FullReport, Banner, Examples } from '@/widgets'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href="/cars" className="invisible h-0">
        Все автомобили
      </Link>
      <CheckAutoSection />
      <FullReport />
      <Banner />
      <Examples />
      {/* <Footer /> */}
    </>
  )
}
