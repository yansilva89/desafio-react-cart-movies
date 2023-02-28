import { listProducts } from './../api/products';
import { useState, useEffect } from "react";
import { Product } from "../api/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const data = await listProducts()
      setProducts(data)
    }
    getProducts()
  }, [])

  return products
}