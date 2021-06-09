export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
  }

export type ProductList = Product[]

export type DeleteFromCartFunction = (string) => void;
export type UpdateCartFunction = (string, number) => void;

export interface ProductRowProps extends Product {
  deleteFromCart: DeleteFromCartFunction,
  updateCart: UpdateCartFunction
}

export type QuantityObject = {
  [key: string] : number;
}