import { Creator } from "../Controllers/Creator";
import Product, { Media } from "./Product";

export class Collection {
  id?:string;
  name?: string;
  about?: string;
  dateCreated?: string;
  productCount?: number;
  creator?: Creator;
  media?: [Media];
  coverImage?: string;
  products?: CollectionProduct[];
}

export class CollectionProduct extends Product {
  dateAdded?: string;
  constructor(product: Product, dateAdded: string) {
    super();
    this.dateAdded = dateAdded;
  }
}