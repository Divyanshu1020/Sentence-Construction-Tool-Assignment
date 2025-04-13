// src/components/Test.tsx
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import testData from "../../../db.json";
import { useTestContext } from "../../context/TestContext";
import TestHeader from "./Header";
import ProgressBar from "./ProgressBar";

import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
  MouseSensor,
  closestCenter,
} from "@dnd-kit/core";
import NextButton from "./NextButton";
import Question from "./Question";
import WordBank from "./WordBank";
import Loading from "@/components/ui/loading";

export default function Test() {
  const {
    questions,
    setQuestions,
    answers,
    setAnswers,
    setTestResult,
  } = useTestContext();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [blanks, setBlanks] = useState<(string | null)[]>([]);
  const [startTime] = useState<Date>(new Date());
  const [loading, setLoadingState] = useState(true);

  const navigate = useNavigate();

  const handleNextQuestion = useCallback(() => {
    // Save current answer
    const currentQ = questions[currentQuestion];
    const isCorrect = blanks.every(
      (answer, index) => answer === currentQ.correctAnswer[index]
    );

    const newAnswers = [
      ...answers,
      {
        questionId: currentQ.questionId,
        question: currentQ.question,
        correctAnswer: currentQ.correctAnswer,
        userAnswer: blanks as string[],
        isCorrect,
      },
    ];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);

      // Set blanks for the next question
      const nextQuestion = questions[currentQuestion + 1];
      const blankCount = (nextQuestion?.question.match(/_{2,}/g) || []).length;
      setBlanks(Array(blankCount).fill(null));
    } else {
      // Test is complete - calculate results
      const endTime = new Date();
      const timeTaken = Math.floor(
        (endTime.getTime() - startTime.getTime()) / 1000
      );
      const minutes = Math.floor(timeTaken / 60);
      const seconds = timeTaken % 60;
      const timeString = `${minutes}:${seconds.toString().padStart(2, "0")}`;

      // Calculate score
      const score = Math.round(
        (newAnswers.filter((a) => a.isCorrect).length / questions.length) * 100
      );

      // Store result in context
      setTestResult({
        score,
        totalQuestions: questions.length,
        answers: newAnswers,
        timeTaken: timeString,
      });

      // Navigate to result page
      navigate("/result");
    }
  }, [
    answers,
    blanks,
    currentQuestion,
    navigate,
    questions,
    setAnswers,
    setTestResult,
    startTime,
  ]);

  const sensors = useSensors(
    useSensor(MouseSensor),      // for desktop
    useSensor(TouchSensor,{
      activationConstraint: {
        delay: 150, // wait 150ms before activating drag
      tolerance: 10,
      }
    }),      // for mobile
    useSensor(PointerSensor)     // fallback general pointer
  );

  useEffect(() => {
    setLoadingState(true);
  
    // Simulate API call with a Promise
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(testData.questions.data.questions);
      }, 1000); // 1 second delay to mimic network latency
    }).then((data: any) => {
      setQuestions(data);
  
      const blankCount = (
        data[0]?.question.match(/_{2,}/g) || []
      ).length;
      setBlanks(Array(blankCount).fill(null));
  
      setLoadingState(false);
    });
  }, [setQuestions, setLoadingState]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleNextQuestion();
    }
  }, [handleNextQuestion, timeLeft]);;

  const handleBlankClick = (index: number) => {
    const newBlanks = [...blanks];
    newBlanks[index] = null;
    setBlanks(newBlanks);
  };


  if (loading) {
    return <Loading/>;
  }

  const currentQ = questions[currentQuestion];
  const questionParts = currentQ.question.split(/_{2,}/);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl">
        {/* Timer and Progress */}
        <TestHeader timeLeft={timeLeft} />

        <ProgressBar
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
        />

        {/* Question */}
        <div className="mb-12">
          <h2 className="text-lg md:text-xl leading-5 text-center text-[#616464] mb-8">
            Select the missing words in the correct order
          </h2>
          <DndContext
           sensors={sensors}
           collisionDetection={closestCenter}
            onDragEnd={(event) => {
              const { active, over } = event;
              if (active && over) {
                const draggedWord = active.id as string;
                const blankIndex = parseInt(over.id as string);

                const newBlanks = [...blanks];
                newBlanks[blankIndex] = draggedWord;
                setBlanks(newBlanks);
              }
            }}
          >
      

            <Question questionParts={questionParts} blanks={blanks} onBlankClick={handleBlankClick} />

            {/* Word Bank */}
              <WordBank options={currentQ.options} blanks={blanks} />
          </DndContext>
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-6">
          <NextButton
            onClick={handleNextQuestion}
            disabled={blanks.includes(null)}
          />
        </div>
      </div>
    </div>
  );
}
