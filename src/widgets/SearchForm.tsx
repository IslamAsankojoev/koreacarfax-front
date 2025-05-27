'use client'

import { CarService } from '@/services/cars.service'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface SearchFormProps {
  initVin?: string
}

export const SearchForm = ({ initVin }: SearchFormProps) => {
  const [vinValue, setVinValue] = useState(initVin || '')

  const router = useRouter()

  const handleSearch = async () => {
    if (!vinValue) {
      return
    }

    const { data } = (await CarService.searchCar(vinValue)) as any

    if (!data[0]) {
      alert(
        `Информация временно недоступна. 
Ваш запрос обрабатывается. 
Данные будут доступны в течение 24 часов.

Для помощи обратитесь по телефону:
+79 19-108-5259
`,
      )
    } else if (data.length > 0) {
      router.push(`/cars/${data[0].documentId}`)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVinValue(e.target.value)
  }

  return (
    <form className="destinations-form">
      <div className="input-line">
        <input
          id="VIN"
          type="text"
          name="destination"
          className="form-input check-value bg-white"
          maxLength={17}
          value={vinValue}
          onChange={handleChange}
          placeholder="KNAP6815GJK504750"
        />
        <button
          onClick={handleSearch}
          id="checkButton"
          type="button"
          name="destination-submit"
          className="form-submit btn btn-special"
        >
          Начать проверку
        </button>
      </div>
    </form>
  )
}
