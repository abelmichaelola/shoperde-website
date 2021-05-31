export default class Price {
  price?: number;
  defaultPrice?: number;
  constructor(price: number, defaultPrice: number) {
    this.price = price;
    this.defaultPrice = defaultPrice;
  }
}