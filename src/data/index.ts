import { IData } from "../interfaces";

export const initialData: IData = {
  todos: [
    {
      id: "1",
      text: "Debug that elusive bug",
      order: 0,
    },
    {
      id: "2",
      text: "Git commit -m 'I have no idea what I'm doing'",
      order: 1,
    },
    {
      id: "3",
      text: "Defeat the infinite scroll dragon",
      order: 2,
    },
    {
      id: "4",
      text: "Optimize code for 'world domination'",
      order: 3,
    },
    {
      id: "5",
      text: "Take on the CSS spaghetti monster",
      order: 4,
    },
    {
      id: "6",
      text: "Battle with merge conflicts",
      order: 5,
    },
    {
      id: "7",
      text: "Survive endless meetings",
      order: 6,
    },
    {
      id: "8",
      text: "Refactor code: turn spaghetti into lasagna",
      order: 7,
    },
    {
      id: "9",
      text: "Deploy to production: hope for the best",
      order: 8,
    },
    {
      id: "10",
      text: "Conquer imposter syndrome",
      order: 9,
    },
  ],
  doing: [],
  done: [],
};
