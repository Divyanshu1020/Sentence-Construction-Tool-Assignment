interface ScoreCircleProps {
    score: number
  }
  
  export default function ScoreCircle({ score }: ScoreCircleProps) {
    // Calculate the circumference and the filled portion
    const radius = 50
    const circumference = 2 * Math.PI * radius
    const filled = (score / 100) * circumference
    const unfilled = circumference - filled
  
    return (
      <div className="relative flex items-center justify-center w-32 h-32">
        <svg width="120" height="120" viewBox="0 0 120 120" className="transform -rotate-90">
          <circle cx="60" cy="60" r={radius} fill="transparent" stroke="#e6f2eb" strokeWidth="8" />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="transparent"
            stroke="#317F39"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={unfilled}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-4xl font-semibold text-[#317F39]">{score}</span>
          <span className="text-xs text-[#317F39]">Overall Score</span>
        </div>
      </div>
    )
  }
  