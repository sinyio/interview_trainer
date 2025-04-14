export {
  quizReducer,
  setCurrentQuestion,
  setQuestions,
  setTotalQuestions,
  markQuestionAsLearned,
  resetQuiz
} from "./model/quizSlice";
export { useGetQuizQuery } from "./api/quizApi";
export type { QuizQuestion } from "./model/types";
export { IsLearnedChip } from "./ui/IsLearnedChip/IsLearnedChip";
