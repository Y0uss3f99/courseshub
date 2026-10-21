export interface Comment {
  id: number | string
  courseId: number
  content: string
  createdAt: string
  user?: { id: number; name: string; avatar: string } // only on old comments
}

export type NewComment = Pick<Comment, "courseId" | "content" | "createdAt">