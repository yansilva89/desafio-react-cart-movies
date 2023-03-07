import { listProducts } from './../api/products';
import { useState, useEffect } from "react";
import { Product } from "../api/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const getProducts = async () => {
        const data = await listProducts()
        setProducts(data)
      }
      getProducts()
      setLoading(false)
    }, 1000);
  }, [])

  return { products, loading }
}