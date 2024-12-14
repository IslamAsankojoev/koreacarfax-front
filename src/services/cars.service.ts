import { kyApi } from "@/app/ky.config"

export interface ICar {
  id: number
  documentId: string
  model_name: string
  vin: string
  color: string
  korea_export_date: string
  start_date: string
  probeg: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export const CarService = {
  async getCars(search?: string) {
    const searchString = search ? search : 'notfound'
    try {
      return kyApi.get(`cars?filters[vin][$eq]=${searchString}`).json()
    } catch (error) {
      console.error('Error fetching cars:', error)
    }
  }
}

