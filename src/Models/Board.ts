import { Collection } from "./collection";
import { Creator } from "./Creator";
import Product from "./Product";

class Board {
  id?: number;
  name?: string;
  creator?: Creator;
  type?: BoardType;
  isPrivate?: boolean;
  dateCreated?: string;
  lastUpdateDate?: string;
  coverImage?: string;
  items?: Product[] | Collection[];
}
enum BoardType {
  PRODUCT,
  COLLECTION,
}
export function BoardTypeToString(params?: BoardType) {
  switch (params) {
    case BoardType.PRODUCT:
      return "Product";
    case BoardType.COLLECTION:
      return "Collection";
    default:
      return "Unknown";
  }
}

export default Board;
