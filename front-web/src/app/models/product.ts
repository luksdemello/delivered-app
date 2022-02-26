export interface IProduct {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUri: string;
}

export class Product implements IProduct {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUri: string;

  constructor(id: number, name: string, price: string, description: string, imageUri: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUri = imageUri;
  }
}

