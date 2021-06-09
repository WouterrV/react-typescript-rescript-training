import { productDetails } from "../constants/product";
import { defaultProductQuantities } from "../constants/mock";



export const initialProductListWithTypeErrors = productDetails.map(
  (product) => {

    let quantities = defaultProductQuantities;
    return ({
      ...product,
      quantity: quantities[product.id] || 0,
    })


  }

);
