import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { todosArray } from "./data";
import { ITodo } from "./interfaces";
import DroppableList from "./components/DroppableList";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState<ITodo[]>(todosArray);

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
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-2 py-8 lg:px-0">
        <div className="flex flex-col lg:flex-row flex-wrap gap-8">
          <DragDropContext onDragEnd={handleDragEnd}>
            <DroppableList list={todos} title={"TODOs"} />
          </DragDropContext>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
