
interface PromptCardProps {
  number: number;
  total: number;
  prompt: string;
  response: string;
  isCorrect: boolean;
  userAnswer: string[];
}

export default function PromptCard({
  number,
  total,
  prompt,
  response,
  isCorrect,
  userAnswer
}: PromptCardProps) {
  const allNull = userAnswer.every((a) => a === null);

return (
  <div className="border overflow-hidden bg-white flex flex-col gap-4 rounded-2xl shadow-[0px_4px_70px_rgba(66,169,76,0.1)]">
    {/* Prompt section */}
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium rounded-full px-2 text-[#616464] bg-[#F0F0F0]">
          Prompt
        </span>
        <span className="text-sm text-[#7C8181]">
          <span className="text-[#414343]">{number}</span>/<span>{total}</span>
        </span>
      </div>
      <p className="text-base text-[#414343] pl-2 pt-3">{prompt}</p>
    </div>

    {/* Response section */}
    <div className="p-4 bg-[#F6F9F9]">
      <div className="flex items-center mb-2">
        <span className="text-base font-medium text-[#616464] mr-2">
          Your response
        </span>
        <span
          className={`text-base px-2 py-0.5 rounded-2xl ${
            allNull
              ? "bg-orange-100 text-orange-700"
              : isCorrect
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {allNull ? "Not Answered" : isCorrect ? "Correct" : "Incorrect"}
        </span>
      </div>
      <p className="text-base text-[#414343] pl-2">
        {allNull ? "" : response}
      </p>
    </div>
  </div>
)}