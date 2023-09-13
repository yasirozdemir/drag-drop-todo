export interface IItem {
  id: string;
  text: string;
  order: number;
}

export interface IData {
  todos: IItem[];
  doing: IItem[];
  done: IItem[];
}
