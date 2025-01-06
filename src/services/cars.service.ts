import { kyApi } from "@/app/ky.config"
import { Media } from "./media"

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
  images?: Media[]
  car_status: string
}

export const CarService = {
  async searchCar(search?: string) {
    const searchString = search ? search : 'notfound'
    try {
      return kyApi.get(`cars?populate=*&filters[vin][$eq]=${searchString}`).json()
    } catch (error) {
      console.error('Error fetching cars:', error)
    }
  },
  async getCars(){
    try {
      return kyApi.get(`cars?populate=*`).json() as Promise<{data: ICar[]}>
    } catch (error) {
      console.error('Error fetching cars:', error)
    }
  },
  async getCarById(id: string){
    try {
      return kyApi.get(`cars/${id}?populate=*`).json() as Promise<{data: ICar}>
    } catch (error) {
      console.error('Error fetching car:', error)
    }
  },
}

