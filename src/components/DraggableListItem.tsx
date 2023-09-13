import { Draggable } from "react-beautiful-dnd";
import { IItem } from "../interfaces";

interface props {
  todo: IItem;
  index: number;
  arr: IItem[];
}

const DraggableListItem = ({ todo, index, arr }: props) => {
  return (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
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
          <p className="py-2 px-4 w-11/12">{todo.text}</p>
        </li>
      )}
    </Draggable>
  );
};

export default DraggableListItem;
