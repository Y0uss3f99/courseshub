export type QuizOptionId = "a" | "b" | "c" | "d"

export type QuizQuestionType = "concept" | "recall" | "application"

export type QuizDifficulty = "easy" | "medium" | "hard"

export interface QuizOption {
  id: QuizOptionId
  text: string
}

export interface QuizQuestion {
  id: string
  courseId: string
  lessonId: string
  question: string
  code: string | null
  type: QuizQuestionType
  difficulty: QuizDifficulty
  options: QuizOption[]
  correctOptionId: QuizOptionId
  explanation: string
}