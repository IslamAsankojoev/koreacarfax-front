'use client'

import { ICar } from '@/services/cars.service'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface CarSliderProps {
  car: ICar
}

export const CarSlider = ({ car }: CarSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [currentSlide, setCurrentSlide] = useState(1)

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setCurrentSlide(emblaApi.selectedScrollSnap() + 1)
      }

      emblaApi.on('select', onSelect)
      return () => {
        emblaApi.off('select', onSelect)
      }
    }
  }, [emblaApi])

  return (
    <div className="embla max-w-xs flex-grow" ref={emblaRef}>
      <div className="embla__container">
        {car?.images?.map((image, index) => (
          <div className="embla__slide relative h-60 w-auto rounded-md overflow-hidden" key={index}>
            <Image
              key={index}
              src={image.url}
              fill
              alt={image.alternativeText}
              objectFit="contain"
              className="absolute"
            />
          </div>
        ))}
      </div>
      <p className="embla__pagination text-center flex justify-center items-center text-gray-700"> 
        {currentSlide} из {car?.images?.length}
      </p>
    </div>
  )
}
