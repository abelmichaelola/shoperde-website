import { Creator } from "../Controllers/Creator";
import Product from "./Product";

export class Collection {
  name?: string;
  about?: string;
  dateCreated?: string;
  productCount?: number;
  creator?: Creator;
  products?: CollectionProduct[];

}

export class CollectionProduct extends Product {
  dateAdded?: string;
  constructor(product: Product, dateAdded: string) {
    super();
    this.dateAdded = dateAdded;
  }
}