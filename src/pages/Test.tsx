// // src/components/Test.tsx
// import { ArrowRight } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import testData from '../../../db.json';
// import { useTestContext } from "../context/TestContext";

// export default function Test() {
//   const { 
//     questions, 
//     setQuestions, 
//     answers, 
//     setAnswers, 
//     setTestResult, 
//     setLoading 
//   } = useTestContext();
  
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(30);
//   const [selectedWords, setSelectedWords] = useState<string[]>([]);
//   const [blanks, setBlanks] = useState<(string | null)[]>([]);
//   const [startTime] = useState<Date>(new Date());
//   const dragItem = useRef<number | null>(null);
//   const dragOverItem = useRef<number | null>(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     setLoading(true);
//     // You could fetch from an API here
//     // For now using the imported test data
//     setQuestions(testData.questions.data.questions);
//     const blankCount = (
//       testData.questions.data.questions[0]?.question.match(/_{2,}/g) || []
//     ).length;
//     setBlanks(Array(blankCount).fill(null));
//     setLoading(false);
//   }, [setQuestions, setLoading]);

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [timeLeft]);

//   const handleDragStart = (index: number) => {
//     dragItem.current = index;
//   };

//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault();
//   };

//   const handleDrop = (blankIndex: number) => {
//     if (dragItem.current !== null) {
//       const newBlanks = [...blanks];
//       newBlanks[blankIndex] =
//         questions[currentQuestion].options[dragItem.current];
//       setBlanks(newBlanks);
//       dragItem.current = null;
//     }
//   };

//   const handleBlankClick = (index: number) => {
//     const newBlanks = [...blanks];
//     newBlanks[index] = null;
//     setBlanks(newBlanks);
//   };

//   const handleNextQuestion = () => {
//     // Save current answer
//     const currentQ = questions[currentQuestion];
//     const isCorrect = blanks.every(
//       (answer, index) => answer === currentQ.correctAnswer[index]
//     );

//     const newAnswers = [
//       ...answers,
//       {
//         questionId: currentQ.questionId,
//         question: currentQ.question,
//         correactAnswer: currentQ.correctAnswer,
//         userAnswer: blanks as string[],
//         isCorrect,
//       },
//     ];
//     setAnswers(newAnswers);

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setTimeLeft(30);
      
//       // Set blanks for the next question
//       const nextQuestion = questions[currentQuestion + 1];
//       const blankCount = (nextQuestion?.question.match(/_{2,}/g) || []).length;
//       setBlanks(Array(blankCount).fill(null));
//     } else {
//       // Test is complete - calculate results
//       const endTime = new Date();
//       const timeTaken = Math.floor(
//         (endTime.getTime() - startTime.getTime()) / 1000
//       );
//       const minutes = Math.floor(timeTaken / 60);
//       const seconds = timeTaken % 60;
//       const timeString = `${minutes}:${seconds.toString().padStart(2, "0")}`;

//       // Calculate score
//       const score = Math.round(
//         (newAnswers.filter((a) => a.isCorrect).length / questions.length) * 100
//       );

//       // Store result in context
//       setTestResult({
//         score,
//         totalQuestions: questions.length,
//         answers: newAnswers,
//         timeTaken: timeString,
//       });

//       // Navigate to result page
//       navigate("/result");
//     }
//   };

//   const isAllBlanksFilled = blanks.every((blank) => blank !== null);

//   if (questions.length === 0) {
//     return <div>Loading...</div>;
//   }

//   const currentQ = questions[currentQuestion];
//   const questionParts = currentQ.question.split(/_{2,}/);

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl">
//         {/* Timer and Progress */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="text-[24px] leading-[26px] font-semibold text-[#616464]">
//             0:{timeLeft}
//           </div>
//           <button
//             onClick={() => navigate("/")}
//             className="px-4 py-2 border border-[#DFE3E3] rounded-md text-[#414343] hover:bg-gray-50 text-lg"
//           >
//             Quit
//           </button>
//         </div>

//         {/* Progress bar */}
//         <div className="flex gap-1 mb-10">
//           {Array(questions.length)
//             .fill(0)
//             .map((_, i) => (
//               <div
//                 key={i}
//                 className={`h-1 flex-1 rounded-full ${
//                   i <= currentQuestion ? "bg-orange-400" : "bg-gray-200"
//                 }`}
//               />
//             ))}
//         </div>

//         {/* Question */}
//         <div className="mb-12">
//           <h2 className="text-xl leading-5 text-center text-[#616464] mb-8">
//             Select the missing words in the correct order
//           </h2>
//           <div className="text-[24px] leading-[28px] text-[#2A2D2D]">
//             {questionParts.map((part, index) => (
//               <span key={index} className="leading-10">
//                 {part}
//                 {index < questionParts.length - 1 && (
//                   <div className="inline-block">
//                     <div className="flex flex-col border-red-500">
//                       <div
//                         onDragOver={handleDragOver}
//                         onDrop={() => handleDrop(index)}
//                         onClick={() => handleBlankClick(index)}
//                         className={` px-4 rounded ${
//                           blanks[index]
//                             ? " text-[#414343] bg-white border hover:bg-gray-50 text-base cursor-pointer border-[#BFC6C6] w-fit h-[24px] "
//                             : "h-[24px]"
//                         }`}
//                         style={{ minWidth: "100px", display: "inline-block" }}
//                       >
//                         {blanks[index] || ""}
//                       </div>
//                       <div className="mt-[3px] h-[1px] w-full min-w-[100px] bg-[#2A2D2D]"></div>
//                     </div>
//                   </div>
//                 )}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Word Options */}
//         <div className="flex flex-wrap gap-3 justify-center">
//           {currentQ.options.map((word, index) => (
//             <div
//               key={index}
//               draggable={!blanks.includes(word)}
//               onDragStart={() => handleDragStart(index)}
//               className={`px-4 py-1 rounded-md ${
//                 blanks.includes(word)
//                   ? "bg-gray-100 text-gray-400"
//                   : "bg-white border border-gray-300 cursor-move hover:bg-gray-50"
//               }`}
//             >
//               {word}
//             </div>
//           ))}
//         </div>

//         {/* Next Button */}
//         <div className="mt-8 flex justify-end">
//           <button
//             onClick={handleNextQuestion}
//             disabled={!isAllBlanksFilled}
//             className={`flex items-center gap-2 px-6 py-2 rounded-md ${
//               isAllBlanksFilled
//                 ? "bg-indigo-600 text-white hover:bg-indigo-700"
//                 : "bg-gray-100 text-gray-400 cursor-not-allowed"
//             }`}
//           >
//             Next
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }