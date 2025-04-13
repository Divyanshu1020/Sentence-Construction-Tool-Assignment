import DraggableWord from "./DraggableWord";

export default function WordBank({
  options,
  blanks,
}: {
  options: string[];
  blanks: (string | null)[];
}) {
  return (
    <div style={{touchAction: "none"}} className="flex flex-wrap gap-3 justify-center mt-8 select-none ">
      {options.map(
        (word, index) =>
          !blanks.includes(word) && (
            <DraggableWord key={index} id={word} word={word} />
          )
      )}
    </div>
  );
}
