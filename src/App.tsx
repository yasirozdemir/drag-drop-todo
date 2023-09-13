import { useState } from "react";
import {
  DragDropContext,
  DropResult,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";

const dummyTodos = [
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
];

function App() {
  const [todos, setTodos] = useState(dummyTodos);

  const handleDragEnd = (result: DropResult) => {
    // source -> the Droppable component where the items is dragged
    // destination -> the Droppable componenet where the item is dropped
    // result -> the object that holds all the details about dragging event, it's a part of react-beautiful-dnd package
    const { source, destination } = result;

    // checking if the item is dropped in a Droppable component
    if (!destination) return;

    // creating a copy of the todos array to ensure that the original state is not mutated directly
    const todosArray = Array.from(todos);

    // source.index -> the index number of the dragged item in the Droppable component where it is dragged
    // using the first splice we're removing the item from it's starting point
    const [item] = todosArray.splice(source.index, 1);
    // destination.index -> the index number of the dragged item in the Droppable component where it is dropped
    // using the second splice we're adding the item to where it's dropped
    todosArray.splice(destination.index, 0, item);

    setTodos(todosArray);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="bg-white pt-4 pb-2 rounded-lg shadow-lg">
          <h1 className="text-3xl text-center font-bold mb-2 pb-2 border-b-2 border-gray-400">
            TODO List
          </h1>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todos">
              {(provided) => (
                <ul
                  className="w-full"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {todos?.map(({ id, text }, index, arr) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`flex bg-white border-b border-gray-300 hover:bg-gray-200 ${
                              arr.length - 1 === index ? "border-hidden" : ""
                            }`}
                          >
                            <label className="flex items-center py-2 px-4 pr-0 w-1/12">
                              <input type="checkbox" className="w-5 h-5" />
                            </label>
                            <p className="py-2 px-4 w-11/12">{text}</p>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {/* provided.placeholder prevents the next html tag to change position while dragging an item */}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
          <div className="flex flex-col md:flex-row justify-center gap-3 items-center text-center font-semibold mt-2 pt-2 border-t-2 border-gray-400">
            <a
              href="http://www.github.com/yasirozdemir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-1"
            >
              <svg width="18" height="18" viewBox="0 0 16 16">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              <span>Github</span>
            </a>
            <a
              href="http://www.yasirozdemir.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-1"
            >
              <svg width="18" height="18" viewBox="0 0 16 16">
                <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
              </svg>
              <span>M. Yasir Ozdemir</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
