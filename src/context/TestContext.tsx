// src/context/TestContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Question, UserAnswer } from '../types';

interface TestResult {
  score: number;
  totalQuestions: number;
  answers: UserAnswer[];
  timeTaken: string;
}

interface TestContextType {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  answers: UserAnswer[];
  setAnswers: React.Dispatch<React.SetStateAction<UserAnswer[]>>;
  testResult: TestResult | null;
  setTestResult: React.Dispatch<React.SetStateAction<TestResult | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(true);

  return (
    <TestContext.Provider
      value={{
        questions,
        setQuestions,
        answers,
        setAnswers,
        testResult,
        setTestResult,
        loading,
        setLoading
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = () => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('useTestContext must be used within a TestProvider');
  }
  return context;
};