import { useDroppable } from "@dnd-kit/core";

export default function DroppableBlank({
  id,
  word,
  onClick,
  isActive = true,
}: {
  id: string;
  word: string | null;
  onClick: () => void;
  isActive?: boolean;
}) {
  const { setNodeRef, isOver } = useDroppable({
    id,
    disabled: !isActive,
  });

  return (
    <div className="inline-block">
      <div className="flex flex-col border-red-500">
        <div
          ref={setNodeRef}
          onClick={onClick}
          className={`px-4 rounded-lg ${
            word
              ? "text-[#414343] bg-white border hover:bg-gray-50 text-base cursor-pointer border-[#BFC6C6] w-fit py-1  "
              : "h-[24px]"
          }`}
          style={{
            minWidth: "100px",
            display: "inline-block",
            backgroundColor: isOver ? "#f0f0f0" : undefined,
          }}
        >
          {word || ""}
        </div>
        <div className="mt-[3px] h-[1px] w-full min-w-[100px] bg-[#2A2D2D]" />
      </div>
    </div>
  );
}
