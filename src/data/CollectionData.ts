import { Collection } from "../Models/collection";

   export function GetCollection(id: number, callback: Function): any {
     var collection: Collection = new Collection();
     fetch("http://localhost/data/collection.json", { mode: "cors" })
       .then((response) => response.json())
       .then((data) => {
         Object.assign(collection, data);
         
         callback(collection);
       });

     return collection;
     //   this.convertToClass(data);
   }

   export function GetCollections(callback: Function): any {
     fetch("http://localhost/data/collections.json", { mode: "cors" })
       .then((response) => response.json())
       .then((data) => {
         var cols: Collection[] = data?.map((data: Object, index: number) => {
           var col: Collection = new Collection();
           Object.assign(col, data);
           return col;
         });
         callback(cols);
       });
   }
