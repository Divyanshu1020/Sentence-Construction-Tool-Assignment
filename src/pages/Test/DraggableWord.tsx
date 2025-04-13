import { useDraggable } from "@dnd-kit/core";

export default function DraggableWord({
  id,
  word,
}: {
  id: string;
  word: string;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform
    ? { 
      transform: `translate(${transform.x}px, ${transform.y}px)`,
      touchAction: "none"
      
      
  }
    : {};

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="px-4 py-1 rounded-md bg-white border border-gray-300 cursor-move hover:bg-gray-50 "
    >
      {word}
    </div>
  );
}
