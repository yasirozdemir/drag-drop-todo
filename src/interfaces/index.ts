export interface IItem {
  id: string;
  text: string;
  order: number;
}

export interface IData {
  [key: string]: { todos: IItem[]; doing: IItem[]; done: IItem[] };
}
