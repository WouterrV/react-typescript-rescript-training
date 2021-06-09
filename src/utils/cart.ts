import { findIndex, get, reduce, matches } from "lodash";
import { Product, ProductList } from "../types/types";


export const calculateProductPrice = (product: Product) : number =>
  get(product, "quantity") * get(product, "price");

export const calculateTotalPrice = (cart: ProductList,
   initialTotal: number): number =>
  reduce(
    cart,
    (result, product) => {
      result += calculateProductPrice(product);
      return result;
    },
    initialTotal
  );

export const findIndexAndUpdateQuantity = (cart: ProductList, id: String, quantity: number) => {
  const productIndex = findIndex(cart, matches({ id }));
  const updateProduct = (product, index) =>
    index === productIndex ? { ...product, quantity } : { ...product };
  return cart.map(updateProduct);
};
