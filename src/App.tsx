import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { initialData } from "./data";
import { IData } from "./interfaces";
import DroppableList from "./components/DroppableList";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState<IData>(initialData);

  // source -> the Droppable component where the items is dragged
  // destination -> the Droppable componenet where the item is dropped
  // result -> the object that holds all the details about dragging event, it's a part of react-beautiful-dnd package
  // checking if the item is dropped in a Droppable component
  // creating a copy of the todos array to ensure that the original state is not mutated directly
  // source.index -> the index number of the dragged item in the Droppable component where it is dragged
  // using the first splice we're removing the item from it's starting point
  // destination.index -> the index number of the dragged item in the Droppable component where it is dropped
  // using the second splice we're adding the item to where it's dropped

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // out of DroppableLists
    if (!destination) return;

    const srcId = source.droppableId;
    const srcIndex = source.index;
    const destId = destination.droppableId;
    const destIndex = destination.index;

    // didn't move
    if (srcId === destId && srcIndex === destIndex) return;

    const sourceList = data[srcId];
    const destinationList = data[destId];

    const [item] = sourceList.splice(srcIndex, 1);
    destinationList.splice(destIndex, 0, item);
    setData({
      ...data,
      [srcId]: sourceList,
      [destId]: destinationList,
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-2 py-8 lg:px-8">
        <div className="flex flex-col justify-center lg:flex-row flex-wrap gap-8 w-full md:w-[80%]">
          <DragDropContext onDragEnd={handleDragEnd}>
            <DroppableList list={data.todos} title={"TODOs"} />
            <DroppableList list={data.doing} title={"Doing"} />
            <DroppableList list={data.done} title={"Done"} />
          </DragDropContext>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
