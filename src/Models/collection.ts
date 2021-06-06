import { Creator } from "./Creator";
import Product, { Media } from "./Product";

export class Collection {
  id?:number;
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


export class CollectionGroup {
  id?:number;
  title?: string;
  collections?: Collection[];
  constructor(id:number, title:string, collections:Collection[]) {
    this.id = id;
    this.title = title;
    this.collections = collections;
  }
}