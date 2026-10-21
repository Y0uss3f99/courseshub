"use client"

import { useQuery } from "@tanstack/react-query"
import { Skeleton } from "@/components/ui/skeleton"
import { getProgress } from "@/lib/api"
import type { Course } from "@/types/course"
import VideoPlayer from "../VideoPlayer/page"

const USER_ID = "user1"

function getVideoId(url: string) {
  return url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^?&/]+)/
  )?.[1]
}

type Props = {
  data: Course
  courseId: string
  lessonId?: string
  onProgressChange?: (progress: number) => void
}

export default function CourseVideo({
  data,
  courseId,
  lessonId = "preview",
  onProgressChange,
}: Props) {
  const progressId = `${USER_ID}-${courseId}-${lessonId}`

  const lesson = data.weeks
    .flatMap((week) => week.lessons)
    .find((item) => String(item.id) === lessonId)

  const videoId = lesson?.videoId ?? getVideoId(data.previewVideo)

  const {
    data: saved,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["progress", progressId],
    queryFn: () => getProgress(progressId),
    gcTime: 0,
    refetchOnWindowFocus: false,
  })

  if (!videoId) {
    return (
      <p className="py-6 text-center text-red-600">Invalid YouTube link.</p>
    )
  }

  if (isPending) {
    return (
      <div className="my-3 space-y-3">
        <Skeleton className="aspect-video w-full rounded-sm" />
        <Skeleton className="h-2 w-full" />
      </div>
    )
  }

  // Don't silently start from zero if the progress request failed.
  if (isError) {
    return (
      <p className="py-6 text-center text-red-600">
        Failed to load video progress. Please try again.
      </p>
    )
  }

  return (
    <div className="sticky top-16 z-40  bg-white md:static">
    <VideoPlayer
      key={progressId}
      videoId={videoId}
      progressId={progressId}
      courseId={courseId}
      lessonId={lessonId}
      saved={saved ?? null}
      onProgressChange={onProgressChange}
    />
  </div>
  )
}