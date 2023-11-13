export interface NewProduct {
  jsonId: number | null;
  code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  inventoryStatus: string;
  category: string;
  image?: string | null;
  rating?: number | null;
}
