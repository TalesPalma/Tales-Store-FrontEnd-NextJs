import { ProductInterface } from "@/app/models/product"

export async function getProductsFromApi(): Promise<ProductInterface[]> {
  const pathUrl = "http://localhost:8080/products"
  const response = await fetch(pathUrl, { cache: "no-store" })
  const data = await response.json()
  if (response.ok) {
    return data
  }
  else {
    return []
  }
}




