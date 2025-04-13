import DroppableBlank from "./DroppableBlank";

export default function Question({
  questionParts,
  blanks,
  onBlankClick,
}: {
  questionParts: string[];
  blanks: (string | null)[];
  onBlankClick: (index: number) => void;
}) {
  return (
    <div className="md:text-[24px] font-medium leading-[28px] text-[#2A2D2D]">
      {questionParts.map((part, index) => (
        <span key={index} className="leading-10 select-none">
          {part}
          {index < questionParts.length - 1 && (
            <DroppableBlank
              id={index.toString()}
              word={blanks[index]}
              onClick={() => onBlankClick(index)}
              isActive={blanks[index] === null}
            />
          )}
        </span>
      ))}
    </div>
  );
}
