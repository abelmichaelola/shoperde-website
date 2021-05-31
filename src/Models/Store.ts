import Category from "./Cartegory";
import Location from "./Location";

export default class Store {
  id?: number;
  name?: string;
  isVerified?: boolean;
  verificationLevel?: number;
  note?: string;
  isHQ?: boolean;
  tags?: [string];
  type?: StoreType;
  itemsCount?: number;
  links?: [{ link?: string; type?: LinkType }];
  categories?: [Category];
  approved?: [Store];
  location?: Location;
  grading?: Ratings;
  details?: {
    email?: string;
    dateEstablished?: string;
    dateRegistered?: string;
  };
  CSContact?: {
    emails?: [Email];
    phones?: [Phone];
  };
  logo?: string;
  coverImage?: string;
  coverage?: [string];
  otherStores?: [Store];

  constructor() {
    this.id = 2;
  }
}

class Ratings {
  level?: number;
  trustLevel?: number;
  deliveryLevel?: number;
  customerServiceLevel?: number;
  userRating?: number;
}
class Email {
  email?: string;
  isActive?: boolean;
}
class Phone {
  phone?: string;
  isActive?: boolean;
}

enum LinkType {
  AMAZON,
  EBAY,
  ASOS,
  GOOGLE_MAPS,
  GOOGLE_STORES,
  WEBSITE,
}
export function LinkTypeToText (linkType:LinkType){
switch (linkType) {
  case LinkType.AMAZON:
    return "Amazon";
  case LinkType.EBAY:
    return "E-Bay";
  case LinkType.ASOS:
    return "Asos";
  case LinkType.GOOGLE_MAPS:
    return "Google Maps";
  case LinkType.GOOGLE_STORES:
    return "Google Stores";
  case LinkType.WEBSITE:
    return "visit our Website";
  default:
    break;
}
}
enum StoreType {
  VIRTUAL,
  PHYSICAL,
}
