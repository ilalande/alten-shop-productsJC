export class Product {
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public description: string,
    public price: number,
    public quantity: number,
    public inventoryStatus: string,
    public category: string,
    public image?: string,
    public rating?: number
  ) {}
}

export interface ProductEvent {
  id: number | null;
  code: string;
  name: string;
  description: string;
  price: string;
  quantity: string;
  inventoryStatus: string;
  category: string;
  image?: string;
  rating?: string;
}

export interface ProductPayload {
  id: number | null;
  code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  inventoryStatus: string;
  category: string;
  image?: string;
  rating?: number;
}
