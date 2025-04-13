// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
// import type { Question, TestData, TestResult } from '../types';
// import { useTestContext } from "../context/TestContext";

// export default function Result() {
//     const { 
//       testResult,
//       questions
//   } = useTestContext();
//   const [expanded, setExpanded] = useState(false);


//   return (
//     <main className="flex-1 flex flex-col items-center px-4 py-8 max-w-2xl mx-auto w-full">
//     {/* Score circle */}
//     <div className="mb-8">
//       <ScoreCircle score={93} />
//     </div>

//     {/* Feedback text */}
//     <p className="text-center text-sm text-gray-700 mb-8 max-w-md">
//       While you correctly formed several sentences, there are a couple of areas where improvement is needed. Pay
//       close attention to sentence structure and word placement to ensure clarity and correctness. Review your
//       responses below for more details.
//     </p>

//     {/* Dashboard button */}
//     <button className="border border-gray-300 rounded-md py-2 px-4 text-sm text-gray-700 mb-8 hover:bg-gray-50 transition-colors">
//       Go to Dashboard
//     </button>

//     {/* Down arrow */}
//     <button className="mb-8">
//       <ChevronDown size={24} />
//     </button>

//     {/* Prompt cards */}
//     <div className="w-full space-y-6">
//       {prompts.map((prompt) => (
//         <PromptCard
//           key={prompt.id}
//           number={prompt.id}
//           total={prompts.length}
//           prompt={prompt.prompt}
//           response={prompt.response}
//           isCorrect={prompt.isCorrect}
//         />
//       ))}
//     </div>
//   </main>
//   );
// }