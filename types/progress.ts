export interface LessonProgress {
  id: string
  userId: string
  courseId: string
  lessonId: string
  currentTime: number
  duration: number
  percentage: number
}