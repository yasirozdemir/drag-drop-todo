import { Draggable } from "react-beautiful-dnd";
import { IItem } from "../interfaces";

interface props {
  todo: IItem;
  index: number;
}

const DraggableListItem = ({ todo, index }: props) => {
  return (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white border-b border-gray-300 hover:bg-gray-200"
        >
          <p className="py-2 px-4">{todo.text}</p>
        </li>
      )}
    </Draggable>
  );
};

export default DraggableListItem;
