import Product from "../Models/Product";

export function GetProduct(id: string, callback: Function) {
  var product: Product = new Product();
  fetch("http://localhost/data/product.json", { mode: "cors" })
    .then((response) => response.json())
    .then((data) => {
      Object.assign(product, data);
        callback(product);
    });
  //   this.convertToClass(data);
}

  export function GetProducts(callback: Function): any {
    fetch("http://localhost/data/products.json", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        var cols: Product[] = data?.map((data: Object, index: number) => {
          var col: Product = new Product();
          Object.assign(col, data);
          return col;
        });
        callback(cols);
      });
  }
