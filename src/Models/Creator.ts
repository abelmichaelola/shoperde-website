export class Creator {
  id?: number;
  type?: CreatorType;
  constructor(id: number, type: CreatorType) {
    this.id = id;
    this.type = type;
  }
}

export enum CreatorType {
  Store,
  User,
  Admin
}
