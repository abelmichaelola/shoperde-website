import Store from "../Models/Store";
export class GetStore {
  get(id: string, callback: Function) {
    var store: Store = new Store();
    fetch("http://localhost/data/store.json", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        Object.assign(store, data);
        callback(store);
      });
    //   this.convertToClass(data);
  }

  getStores(callback: Function): any {
    fetch("http://localhost/data/collections.json", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        var stores: Store[] = data?.map((data: Object, index: number) => {
          var col: Store = new Store();
          Object.assign(col, data);
          return col;
        });
        callback(stores);
      });
  }
}
