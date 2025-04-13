import { useDraggable } from "@dnd-kit/core";

export default function DraggableWord({
  id,
  word,
  handleWordClick
}: {
  id: string;
  word: string;
  handleWordClick: (word: string) => void;
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
      // {...listeners}
      {...attributes}
      onClick={() => handleWordClick(word)}
      className="px-4 py-1 rounded-md bg-white border border-gray-300 cursor-pointerhover:bg-gray-50 "
    >
      {word}
    </div>
  );
}
