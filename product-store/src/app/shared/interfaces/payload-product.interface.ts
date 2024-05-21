import { Product } from "./product.interfaces"

export type ProductPayload = Omit<Product, 'id'>