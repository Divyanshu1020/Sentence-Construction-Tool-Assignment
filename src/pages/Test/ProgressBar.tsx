interface ProgressBarProps {
    currentQuestion: number;
    totalQuestions: number;
  }
  
  export default function ProgressBar({ currentQuestion, totalQuestions }: ProgressBarProps) {
    return (
      <div className="flex gap-1 mb-10">
        {Array(totalQuestions)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full ${
                i <= currentQuestion ? "bg-orange-400" : "bg-gray-200"
              }`}
            />
          ))}
      </div>
    );
  }