import DraggableWord from "./DraggableWord";

export default function WordBank({
  options,
  blanks,
  handleWordClick
}: {
  options: string[];
  blanks: (string | null)[];
  handleWordClick: (word: string) => void;
}) {
  return (
    <div style={{touchAction: "none"}} className="flex flex-wrap gap-3 justify-center mt-8 select-none ">
      {options.map(
        (word, index) =>
          !blanks.includes(word) && (
            <DraggableWord key={index} id={word} word={word} handleWordClick={handleWordClick} />
          )
      )}
    </div>
  );
}
