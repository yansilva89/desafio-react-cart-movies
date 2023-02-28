import api from "./api"

export interface Product {
  id?: string,
  title?: string,
  price?: number,
  image?: string
} 

export const listProducts = async () => { 
  const response = await api.get<Product[]>('/products') 
  return response.data 
}