export interface NewProduct {
  jsonId: number | null;
  code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  inventoryStatus: string;
  category: string;
  image: string | null;
  rating: number | null;
}

export interface PayloadNewProduct {
  jsonId: string | null;
  code: string;
  name: string;
  description: string;
  price: string;
  quantity: string;
  inventoryStatus: string;
  category: string;
  image: string | null;
  rating: string | null;
}
