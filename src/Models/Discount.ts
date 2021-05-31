export class Discount {
  id?: number;
  type?: DiscountType;
  data?: DiscountData;
  dateCreated?: string;
  dateActivated?: string;
  dateEnd?: string;
  duration?: string;
  isActive?: boolean;
}

enum DiscountType {
  COLLECTION = "COLLECTION",
  PRODUCT = "PRODUCT",
}
enum DiscountData {
  LOCATION_BASED,
  USER_ACTIVITY_BASED
}