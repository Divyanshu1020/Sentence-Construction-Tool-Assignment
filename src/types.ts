export interface Question {
  questionId: string;
  question: string;
  questionType: string;
  answerType: string;
  options: string[];
  correctAnswer: string[];
}

export interface TestData {
  status: string;
  data: {
    testId: string;
    questions: Question[];
  };
  message: string;
  activity: {
    id: string;
    userId: string;
    type: string;
    coinType: string;
    coins: number;
    description: string;
    createdAt: string;
  };
}

export interface UserAnswer {
  questionId: string;
  question: string;
  isCorrect: boolean;
  correctAnswer: string[] // ["option1", "option2"]
  userAnswer : string[] // ["option1", "option2"]
}

export interface TestResult {
  score: number;
  totalQuestions: number;
  answers: UserAnswer[];
  timeTaken: string;
}