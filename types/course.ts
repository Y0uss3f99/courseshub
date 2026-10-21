export interface Instructor {
  id: number
  name: string
  avatar: string
}

export interface Lesson {
  id: number
  title: string
  duration: string
  videoUrl: string
  videoId: string
  questions: number
  completed: boolean
}

export interface Week {
  id: number
  title: string
  description?: string
  lessons: Lesson[]
}

export interface Material {
  id: number
  title: string
  type: "PDF" | "ZIP" | string
  url: string
}

export interface Course {
  id: number
  title: string
  slug: string
  description: string
  thumbnail: string
  previewVideo: string

  instructor: Instructor

  duration: string
  lessonsCount: number
  enrolledStudents: number
  language: string
  level: string
  progress: number
  rating: number

  weeks: Week[]
  materials: Material[]
}