import { Discount } from "./Discount";
import Price from "./Price";

export default class Product {
  id?: string;
  name?: string;
  qty?: number;
  price?: Price;
  discount?: Discount;
  features?: [Feature];
  configurations?: [Configuration];
  imageLink?: string;
  media?: [Media];
  about?: string;
}

export class Feature {
  id?: number;
  name?: string;
  defaultValue?: number;
  values?: [FeatureValue];
}
export class FeatureValue {
  id?: number;
  value?: string;
}
class Configuration {
  id?: number;
  isActive?: boolean;
  configs?: [ConfigurationValue];
  qty?: number;
  useDefaultPrice?: boolean;
  price?: Price;
  media?: [Media];
}

class ConfigurationValue {
  featureId?: number;
  valueId?: number;
}
 export class Media {
type?: MediaType;
link?: string;
}
enum MediaType{
  IMAGE,VIDEO
}