import { useTestContext } from "@/context/TestContext";
import { ArrowLeftIcon, ChevronDown, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PromptCard from "./PromptCard";
import ScoreCircle from "./ScoreCircle";

export default function Result() {
  const navigate = useNavigate();
  const { testResult } = useTestContext();

  function fillInBlanks(question: string, answers: (string | null)[]): string {
    let i = 0;
    return question.replace(/_____________/g, () => {
      const answer = answers[i++];
      return answer !== null && answer.trim() !== "" ? answer : "_____";
    });
  }

  if (!testResult) {
    return (
      <div className="flex flex-col h-screen items-center justify-center bg-[#f3f4f6]">
        
          <p className="text-center text-lg text-[#2A2D2D] mb-8 animate-pulse ">
            No result found...
          </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f6]">
      {/* Header */}
      <header className="flex items-center j p-4 shadow-md">
        <div className="w-8"></div> {/* Empty space for alignment */}
        <ArrowLeftIcon
          size={24}
          className="text-gray-600 cursor-pointer "
          onClick={() => navigate("/")}
        />
        <h1 className="text-lg font-medium text-gray-800 mx-auto">
          Sentence Construction
        </h1>
        <button className="p-2">
          <MoreVertical size={20} className="text-gray-600 cursor-pointer" />
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 py-8  mx-auto w-full">
        {/* Score circle */}
        <div className="mb-8">
          <ScoreCircle score={93} />
        </div>

        {/* Feedback text */}
        <p className="text-center text-lg text-[#2A2D2D] mb-8 max-w-[740px]">
          While you correctly formed several sentences, there are a couple of
          areas where improvement is needed. Pay close attention to sentence
          structure and word placement to ensure clarity and correctness. Review
          your responses below for more details.
        </p>

        {/* Dashboard button */}
        <button className="border border-[#453FE1] rounded-md py-2 px-4 text-sm text-[#453FE1] hover:bg-gray-50 transition-colors"
        onClick={() => navigate("/")}
        >
          Go to Dashboard
        </button>

        {/* Down arrow */}
        <button className="mt-8 mb-24">
          <ChevronDown size={24} />
        </button>

        {/* Prompt cards */}
        <div className="w-full max-w-[700px] space-y-6">
          {testResult &&
            testResult.answers.map((prompt, index) => (
              <PromptCard
                key={prompt.questionId}
                number={index + 1}
                total={testResult.answers.length}
                prompt={fillInBlanks(prompt.question, prompt.correctAnswer)}
                response={fillInBlanks(prompt.question, prompt.userAnswer)}
                isCorrect={prompt.isCorrect}
              />
            ))}
        </div>
      </main>
    </div>
  );
}
