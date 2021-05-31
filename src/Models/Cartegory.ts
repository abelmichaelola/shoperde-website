import SubCategory from "./SubCategory";

export default class Category {
  id?: number;
  name?: string;
  subCategories?: [SubCategory];
}