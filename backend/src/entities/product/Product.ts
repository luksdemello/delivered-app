


class Product {
  id?: string;
  name: string;
  price: number;
  description: string;
  imageUri: string;

  constructor({ id, name, price, description, imageUri }: Product) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUri = imageUri;
  }
}

export { Product }