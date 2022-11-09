import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/types.js";

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}


export function deleteProduct (id){
    return{
        type: DELETE_PRODUCT,
        payload: id,
    }
}