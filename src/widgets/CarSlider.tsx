'use client'

import { ICar } from '@/services/cars.service'
import { LeftIcon, RightIcon } from '@/shared/icons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface CarSliderProps {
  car: ICar
}

export const CarSlider = ({ car }: CarSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [currentSlide, setCurrentSlide] = useState(1)

  const handlePrevClick = () => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }

  const handleNextClick = () => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }

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
    <div className="embla max-w-xs flex-grow relative" ref={emblaRef}>
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
      <div className="flex absolute top-1/2 -translate-y-2/3 left-0 right-0 justify-between p-2"> 
        <button onClick={handlePrevClick} className="bg-white rounded-full shadow active:scale-90 p-1 transition-all">
          <span className="material-icons">
            <LeftIcon />
          </span>
        </button>
        <button onClick={handleNextClick} className="bg-white rounded-full shadow active:scale-90 p-1 transition-all">
          <span className="material-icons">
            <RightIcon />
          </span>
        </button>
      </div>
    </div>
  )
}
