import { Droppable } from "react-beautiful-dnd";
import { IItem } from "../interfaces";
import DraggableListItem from "./DraggableListItem";

interface props {
  list: IItem[];
  title: string;
}

const DroppableList = ({ list, title }: props) => {
  return (
    <div className="bg-white pt-4 pb-2 rounded-lg shadow-lg">
      <h1 className="text-3xl text-center font-bold mb-2 pb-2 border-b-2 border-gray-400">
        {title}
      </h1>
      <Droppable droppableId={title.toLowerCase()}>
        {(provided) => (
          <ul
            className="w-full"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {list?.map((todo, index, arr) => {
              return (
                <DraggableListItem
                  key={todo.id}
                  todo={todo}
                  index={index}
                  arr={arr}
                />
              );
            })}
            {/* provided.placeholder prevents the next html tag to change position while dragging an item */}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default DroppableList;
