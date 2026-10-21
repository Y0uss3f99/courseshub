
export interface Question {
  id: number | string
  courseId: number
  content: string
  createdAt: string
}

export type NewQuestion = Pick<Question, "courseId" | "content" | "createdAt">