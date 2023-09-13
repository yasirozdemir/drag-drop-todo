import { Droppable } from "react-beautiful-dnd";
import { IItem } from "../interfaces";
import DraggableListItem from "./DraggableListItem";

interface props {
  list: IItem[];
  title: string;
}

const DroppableList = ({ list, title }: props) => {
  return (
    <div className="bg-white pt-4 rounded-lg shadow-lg overflow-hidden">
      <h1 className="text-3xl text-center font-bold pb-2 border-b-2 border-gray-800">
        {title}
      </h1>
      <Droppable droppableId={title.toLowerCase()}>
        {(provided) => (
          <ul
            className="w-full"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {list?.map((todo, index) => {
              return (
                <DraggableListItem key={todo.id} todo={todo} index={index} />
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
