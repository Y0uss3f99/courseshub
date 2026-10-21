
import { supabase } from "@/lib/supabase";

import type { Comment, NewComment } from "@/types/comment";
import type { Course } from "@/types/course";
import type { LessonProgress } from "@/types/progress";
import type { NewQuestion, Question } from "@/types/question";
import type { QuizQuestion } from "@/types/quiz";

// Get all courses
export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("data");

  if (error) {
    throw new Error(`Failed to fetch courses: ${error.message}`);
  }

  return (data ?? []).map((row) => row.data as Course);
}

// Get one course by ID
export async function getCourse(id: string): Promise<Course> {
  const { data, error } = await supabase
    .from("courses")
    .select("data")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to fetch course: ${error.message}`);
  }

  if (!data) {
    throw new Error("Course not found");
  }

  return data.data as Course;
}

// Get comments for a course
export async function getComments(id: string): Promise<Comment[]> {
  const { data, error } = await supabase
    .from("comments")
    .select("data")
    .eq("course_id", id);

  if (error) {
    throw new Error(`Failed to fetch comments: ${error.message}`);
  }

  return (data ?? []).map((row) => row.data as Comment);
}

// Add a comment


export async function addComment(
  comment: NewComment
): Promise<Comment> {
  const newComment = {
    ...comment,
    id: crypto.randomUUID(),
  };

  const courseId =
    (comment as NewComment & { courseId?: string }).courseId ??
    (comment as NewComment & { course_id?: string }).course_id;

  if (courseId == null) {
    throw new Error("Cannot add comment: courseId is missing");
  }

  const { error } = await supabase
    .from("comments")
    .insert({
      id: newComment.id,
      course_id: String(courseId),
      data: newComment,
    });

  if (error) {
    console.error("Supabase addComment error:", error);
    throw new Error(error.message);
  }

  return newComment as Comment;
}


// Get questions for a course
export async function getQuestions(
  courseId: string
): Promise<Question[]> {
  const { data, error } = await supabase
    .from("questions")
    .select("data")
    .eq("course_id", courseId);

  if (error) {
    throw new Error(`Failed to fetch questions: ${error.message}`);
  }

  const questions = (data ?? []).map(
    (row) => row.data as Question
  );

  return questions.sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );
}

// Add a question
export async function addQuestion(
  question: NewQuestion
): Promise<Question> {
  const newQuestion = {
    ...question,
    id: crypto.randomUUID(),
  };

  const { data, error } = await supabase
    .from("questions")
    .insert({
      id: newQuestion.id,
      course_id: String(
        (question as NewQuestion & { courseId?: string }).courseId ??
        (question as NewQuestion & { course_id?: string }).course_id ??
        ""
      ),
      data: newQuestion,
    })
    .select("data")
    .single();

  if (error) {
    throw new Error(`Failed to add question: ${error.message}`);
  }

  return data.data as Question;
}

// Get saved lesson progress
export async function getProgress(
  progressId: string
): Promise<LessonProgress | null> {
  const { data, error } = await supabase
    .from("progress")
    .select("data")
    .eq("id", progressId)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to fetch progress: ${error.message}`);
  }

  return data ? (data.data as LessonProgress) : null;
}

// Save or update lesson progress
export async function saveProgress(
  progress: LessonProgress
): Promise<LessonProgress> {
  const { data, error } = await supabase
    .from("progress")
    .upsert(
      {
        id: String(progress.id),
        data: progress,
      },
      { onConflict: "id" }
    )
    .select("data")
    .single();

  if (error) {
    throw new Error(`Failed to save progress: ${error.message}`);
  }

  return data.data as LessonProgress;
}

// Get quiz questions for a specific course and lesson
export async function getQuizQuestions(
  courseId: string,
  lessonId: number | string
): Promise<QuizQuestion[]> {
  const { data, error } = await supabase
    .from("quiz_questions")
    .select("data")
    .eq("course_id", courseId)
    .eq("lesson_id", String(lessonId));

  if (error) {
    throw new Error(
      `Failed to fetch quiz questions: ${error.message}`
    );
  }

  return (data ?? []).map(
    (row) => row.data as QuizQuestion
  );
}
