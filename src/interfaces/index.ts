export interface IItem {
  id: string;
  text: string;
}

export interface IData {
  todos: IItem[];
  doing: IItem[];
  done: IItem[];
}
