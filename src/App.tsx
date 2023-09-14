import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { initialData } from "./data";
import { IData } from "./interfaces";
import DroppableList from "./components/DroppableList";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState<IData>(initialData);

  const handleDragEnd = (result: DropResult) => {
    // result -> the object that holds all the details about dragging event, it's a part of react-beautiful-dnd package
    // source -> the Droppable List where the items is dragged
    // destination -> the Droppable List where the item is dropped
    const { source, destination } = result;

    // checking if the item is dropped in a Droppable List
    if (!destination) return;

    const srcId = source.droppableId;
    // source.droppableId -> the id of the Droppable List that Draggable List Item taken from
    const srcIndex = source.index;
    // source.index -> the index number of the dragged item in the Droppable List where it is dragged
    const destId = destination.droppableId;
    // destination.droppableId -> the id of the Droppable List that Draggable List Item dropped to
    const destIndex = destination.index;
    // destination.index -> the index number of the dragged item in the Droppable List where it is dropped

    // didn't move
    if (srcId === destId && srcIndex === destIndex) return;

    const sourceList = data[srcId];
    // source list -> the array of all the Draggable List Items in the source Droppable List
    const destinationList = data[destId];
    // source list -> the array of all the Draggable List Items in the destiantion Droppable List

    // using splice removing the Draggable List Item from where it is dragged
    const [item] = sourceList.splice(srcIndex, 1);
    // item -> the Draggable Item that dragged and dropped
    // using splice to append the Draggable List Item to wher it is dropped
    destinationList.splice(destIndex, 0, item);
    // updating the state with regenerated arrays
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
