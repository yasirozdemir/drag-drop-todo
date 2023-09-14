import { IData } from "@interfaces/index";

export const initialData: IData = {
  todos: [
    {
      id: "1",
      text: "Debug that elusive bug",
    },
    {
      id: "2",
      text: "Git commit -m 'I have no idea what I'm doing'",
    },
    {
      id: "3",
      text: "Defeat the infinite scroll dragon",
    },
    {
      id: "4",
      text: "Optimize code for 'world domination'",
    },
    {
      id: "5",
      text: "Take on the CSS spaghetti monster",
    },
    {
      id: "6",
      text: "Battle with merge conflicts",
    },
  ],
  doing: [
    {
      id: "7",
      text: "Survive endless meetings",
    },
    {
      id: "10",
      text: "Conquer imposter syndrome",
    },
  ],
  done: [
    {
      id: "9",
      text: "Deploy to production: hope for the best",
    },
    {
      id: "8",
      text: "Refactor code: turn spaghetti into lasagna",
    },
  ],
};
