import { PayloadNewProduct, NewProduct } from '../types/payload';

export const transformBodyData = (payload: PayloadNewProduct) => {
  let jsonIdNum: number | null;
  let ratingNum: number | null;
  payload.jsonId ? (jsonIdNum = parseInt(payload.jsonId)) : (jsonIdNum = null);
  payload.rating ? (ratingNum = parseInt(payload.rating)) : (ratingNum = null);
  const body = {
    jsonId: jsonIdNum,
    code: payload.code,
    name: payload.name,
    description: payload.description,
    price: parseInt(payload.price),
    quantity: parseInt(payload.quantity),
    inventoryStatus: payload.inventoryStatus,
    category: payload.category,
    image: payload.image,
    rating: ratingNum,
  };
  return body;
};
